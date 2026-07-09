/**
 * Mock Notification Service
 * Simulates sending emails and SMS messages for development and testing.
 * Ready to be swapped with Nodemailer/SendGrid/Twilio in production.
 */
class NotificationService {
  /**
   * Send a booking confirmation email
   * @param {Object} user - User object containing email and name
   * @param {Object} booking - Booking details
   * @param {Object} temple - Temple details
   */
  static async sendBookingConfirmation(user, booking, temple) {
    try {
      console.log('\n======================================================');
      console.log(`✉️  MOCK EMAIL SENT TO: ${user.email}`);
      console.log(`Subject: Booking Confirmed - ${temple.name}`);
      console.log('------------------------------------------------------');
      console.log(`Dear ${user.name},\n`);
      console.log(`Your darshan booking at ${temple.name} is confirmed.`);
      console.log(`Ticket Number: ${booking.ticketNumber}`);
      console.log(`Total Persons: ${booking.noOfPersons}`);
      console.log(`Amount Paid: ₹${booking.totalAmount}`);
      console.log(`\nPlease download your PDF ticket from your dashboard.`);
      console.log('======================================================\n');
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      return true;
    } catch (error) {
      console.error('NotificationService Error:', error);
      return false;
    }
  }

  /**
   * Send a booking cancellation email
   */
  static async sendBookingCancellation(user, booking, temple) {
    try {
      console.log('\n======================================================');
      console.log(`✉️  MOCK EMAIL SENT TO: ${user.email}`);
      console.log(`Subject: Booking Cancelled - ${temple.name}`);
      console.log('------------------------------------------------------');
      console.log(`Dear ${user.name},\n`);
      console.log(`Your booking (Ticket: ${booking.ticketNumber}) has been cancelled successfully.`);
      console.log(`A refund of ₹${booking.totalAmount} will be initiated shortly.`);
      console.log('======================================================\n');
      return true;
    } catch (error) {
      console.error('NotificationService Error:', error);
      return false;
    }
  }
}

module.exports = NotificationService;
