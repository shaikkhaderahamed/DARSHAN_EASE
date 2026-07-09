const DarshanSlot = require('../models/DarshanSlot');

const getSlots = async (req, res, next) => {
  try {
    let query;
    const reqQuery = { ...req.query, templeId: req.params.templeId };
    
    if (req.query.startDate && req.query.endDate) {
      reqQuery.date = {
        $gte: new Date(req.query.startDate),
        $lte: new Date(req.query.endDate)
      };
      delete reqQuery.startDate;
      delete reqQuery.endDate;
    } else if (req.query.date) {
      reqQuery.date = new Date(req.query.date);
    }

    query = DarshanSlot.find(reqQuery).sort({ date: 1, startTime: 1 });

    const slots = await query;
    res.status(200).json({ success: true, count: slots.length, data: slots });
  } catch (error) {
    next(error);
  }
};

const getAllSlots = async (req, res, next) => {
  try {
    const slots = await DarshanSlot.find().populate('templeId', 'name city').sort({ date: 1, startTime: 1 });
    res.status(200).json({ success: true, count: slots.length, data: slots });
  } catch (error) {
    next(error);
  }
};

const createSlot = async (req, res, next) => {
  try {
    const slot = await DarshanSlot.create(req.body);
    res.status(201).json({ success: true, data: slot });
  } catch (error) {
    next(error);
  }
};

const updateSlot = async (req, res, next) => {
  try {
    const slot = await DarshanSlot.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!slot) {
      const error = new Error('Slot not found');
      error.statusCode = 404;
      return next(error);
    }
    res.status(200).json({ success: true, data: slot });
  } catch (error) {
    next(error);
  }
};

const deleteSlot = async (req, res, next) => {
  try {
    const slot = await DarshanSlot.findByIdAndDelete(req.params.id);
    if (!slot) {
      const error = new Error('Slot not found');
      error.statusCode = 404;
      return next(error);
    }
    res.status(200).json({ success: true, message: 'Slot deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getSlots, getAllSlots, createSlot, updateSlot, deleteSlot };
