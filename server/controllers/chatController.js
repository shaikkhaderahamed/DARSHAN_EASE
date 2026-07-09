const { GoogleGenAI } = require('@google/genai');
const ChatHistory = require('../models/ChatHistory');
const Temple = require('../models/Temple');
const DarshanSlot = require('../models/DarshanSlot');
const Booking = require('../models/Booking');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const getChatResponse = async (req, res, next) => {
  try {
    const { message } = req.body;
    const userId = req.user ? req.user._id : null;

    if (!message) {
      const error = new Error('Message is required');
      error.statusCode = 400;
      return next(error);
    }

    // Context Injection Strategy
    let contextData = '';
    const msgLower = message.toLowerCase();

    // 1. Context: Specific Temple details (regex match)
    // Extract potential temple names or search generally
    const temples = await Temple.find({
      $or: [
        { name: { $regex: msgLower, $options: 'i' } },
        { city: { $regex: msgLower, $options: 'i' } }
      ]
    }).select('name city state openingTime closingTime dressCode history facilities faqs').limit(3);

    if (temples.length > 0) {
      contextData += `\nMatching Temple Info: ${JSON.stringify(temples)}`;
    } else if (msgLower.includes('temple') || msgLower.includes('list')) {
      // General temple query
      const allTemples = await Temple.find().select('name city state').limit(10);
      contextData += `\nGeneral Temples Context (Top 10): ${JSON.stringify(allTemples)}`;
    }

    // 2. Context: Live Slots Availability
    if (msgLower.includes('slot') || msgLower.includes('book') || msgLower.includes('available') || msgLower.includes('darshan')) {
      let slotQuery = { status: 'AVAILABLE', date: { $gte: new Date() } };
      if (temples.length > 0) {
        slotQuery.templeId = temples[0]._id; // Prioritize slots for the matched temple
      }
      const slots = await DarshanSlot.find(slotQuery).populate('templeId', 'name').sort('date startTime').limit(10);
      contextData += `\nLive Available Darshan Slots: ${JSON.stringify(slots)}`;
    }

    // 3. Context: Booking History
    if (msgLower.includes('my booking') || msgLower.includes('my ticket') || msgLower.includes('status') || msgLower.includes('cancel')) {
      if (userId) {
        const bookings = await Booking.find({ userId }).populate('templeId', 'name').populate('slotId');
        contextData += `\nUser's Actual Bookings: ${JSON.stringify(bookings)}`;
      } else {
        contextData += `\nNote: User is not logged in, so booking history is unavailable. Inform them to log in to view or cancel bookings.`;
      }
    }

    const systemInstruction = `You are Darshan AI Assistant, the official virtual assistant for DarshanEase, an online temple darshan booking platform. You answer questions about temples, darshan bookings, donations, festivals, pilgrim guidance, and the DarshanEase application. Respond respectfully, accurately, and concisely. Never fabricate booking data. When application data is available, use it. If information is unavailable, state that clearly instead of guessing. Context Data from DarshanEase database: ${contextData}`;

    // Initialize the model
    // Using gemini-2.5-flash as the default standard model for conversational tasks
    let aiResponseText = '';
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: message,
            config: {
                systemInstruction: systemInstruction,
            }
        });
        aiResponseText = response.text;
    } catch (apiErr) {
        console.error('Gemini API Error:', apiErr);
        aiResponseText = "🙏 Sorry, I am currently unable to reach the AI servers. Please try checking the FAQs or contact support.";
    }

    // Save Chat History if user is logged in
    if (userId) {
      await ChatHistory.create({
        userId,
        message,
        response: aiResponseText
      });
    }

    res.status(200).json({
      success: true,
      data: { reply: aiResponseText }
    });

  } catch (error) {
    next(error);
  }
};

module.exports = { getChatResponse };
