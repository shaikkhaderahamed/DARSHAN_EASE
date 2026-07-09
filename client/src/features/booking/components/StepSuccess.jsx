import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Download } from '@/icons';
import { Button } from '@/components/ui/Button';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { format } from 'date-fns';
import { templeImages } from '@/assets/temples';

export const StepSuccess = ({ bookingResult }) => {

  const generatePDF = () => {
    if (!bookingResult) return;
    
    const doc = new jsPDF();
    const templeName = bookingResult.templeId?.name || 'DarshanEase Temple';
    
    // Header background
    doc.setFillColor(235, 94, 40); // Saffron color
    doc.rect(0, 0, 210, 40, 'F');
    
    // Title
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text('DARSHAN TICKET', 105, 25, { align: 'center' });
    
    // Reset text color for body
    doc.setTextColor(51, 51, 51);
    
    // Temple Info
    doc.setFontSize(16);
    doc.text(templeName, 20, 55);
    
    // Adding Temple Image (if available in our local assets map)
    const templeImgData = templeImages[templeName];
    if (templeImgData) {
      try {
        // Simple base64 fetch simulation - ideally we'd load it via HTMLImageElement
        // but for now we'll skip embedding the large image if we can't load it synchronously.
        // We will add it as text placeholder if image loading is complex in sync context
      } catch (e) {
        console.warn("Could not load temple image to PDF", e);
      }
    }
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    
    const startY = 70;
    
    // Booking Details
    doc.text(`Ticket Number: ${bookingResult.ticketNumber || 'N/A'}`, 20, startY);
    doc.text(`Booking ID: ${bookingResult._id}`, 20, startY + 10);
    doc.text(`Darshan Type: ${bookingResult.slotId?.type || 'Standard Darshan'}`, 20, startY + 20);
    
    const dateStr = bookingResult.slotId?.date 
      ? format(new Date(bookingResult.slotId.date), 'dd MMM yyyy') 
      : 'TBA';
    doc.text(`Date: ${dateStr}`, 120, startY);
    doc.text(`Time: ${bookingResult.slotId?.startTime || 'TBA'} - ${bookingResult.slotId?.endTime || 'TBA'}`, 120, startY + 10);
    doc.text(`Total Amount: Rs. ${bookingResult.totalAmount || 0}`, 120, startY + 20);
    
    // Devotees Table
    if (bookingResult.devoteeDetails && bookingResult.devoteeDetails.length > 0) {
      const tableData = bookingResult.devoteeDetails.map(d => [
        d.name, 
        d.age, 
        d.gender, 
        d.idProofType, 
        d.idProofNumber
      ]);
      
      doc.autoTable({
        startY: startY + 35,
        head: [['Name', 'Age', 'Gender', 'ID Type', 'ID Number']],
        body: tableData,
        theme: 'grid',
        headStyles: { fillColor: [235, 94, 40] }
      });
    }
    
    // QR Code
    if (bookingResult.qrCodeUrl) {
      const finalY = doc.lastAutoTable ? doc.lastAutoTable.finalY + 20 : startY + 50;
      doc.text('Scan for Verification:', 20, finalY - 5);
      doc.addImage(bookingResult.qrCodeUrl, 'PNG', 20, finalY, 40, 40);
      
      doc.setFontSize(9);
      doc.setTextColor(100, 100, 100);
      doc.text('Please carry valid ID proof for all devotees.', 70, finalY + 15);
      doc.text('Report 30 minutes before your scheduled slot time.', 70, finalY + 20);
    }
    
    doc.save(`${bookingResult.ticketNumber || 'Ticket'}_DarshanEase.pdf`);
  };

  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="success text-center py-10">
      <div className="icon-wrapper mx-auto mb-4 w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
        <CheckCircle className="w-10 h-10" />
      </div>
      <h3 className="text-2xl font-bold text-darkbrown-900 mb-2">Booking Confirmed!</h3>
      <p className="text-gray-600 mb-8">Your darshan slot has been successfully booked.</p>
      
      {bookingResult?.qrCodeUrl && (
        <div className="qr bg-gray-50 p-6 rounded-xl border border-gray-100 inline-block mb-8">
          <img src={bookingResult.qrCodeUrl} alt="QR Code" className="w-48 h-48 mx-auto mix-blend-multiply" />
          <p className="text-sm font-bold text-gray-800 mt-4 tracking-widest">{bookingResult.ticketNumber}</p>
        </div>
      )}

      <div className="actions flex flex-col sm:flex-row justify-center items-center gap-4">
        <Button onClick={generatePDF} className="bg-saffron-600 hover:bg-saffron-700 text-white min-w-[200px]">
          <Download className="w-4 h-4 mr-2" /> Download Ticket (PDF)
        </Button>
        <Link to="/dashboard" className="px-6 py-2.5 rounded-lg border-2 border-saffron-600 text-saffron-600 font-semibold hover:bg-saffron-50 transition-colors min-w-[200px]">
          View My Bookings
        </Link>
      </div>
    </motion.div>
  );
};
