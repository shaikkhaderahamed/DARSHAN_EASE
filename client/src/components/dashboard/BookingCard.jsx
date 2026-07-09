import { MapPin, Clock, Ticket, Download, XCircle } from '../../icons';
import { generateTicketPDF } from '../../utils/generatePDF';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const BookingCard = ({ booking, isPrivileged, onCancel }) => {
  const isCancelled = booking.bookingStatus === 'CANCELLED';
  const isConfirmed = booking.bookingStatus === 'CONFIRMED';
  const dateObj = new Date(booking.slotId?.date);

  const getStatusVariant = () => {
    if (isConfirmed) return 'success';
    if (isCancelled) return 'danger';
    return 'warning';
  };

  return (
    <div className="p-6 md:p-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 hover:bg-ivory-50 transition-colors">
      <div className="flex items-start gap-5 flex-1">
        <div className={`w-16 h-16 rounded-2xl flex flex-col items-center justify-center shrink-0 border ${
          isCancelled ? 'bg-gray-100 text-gray-400 border-gray-200' : 'bg-saffron-100 text-saffron-600 border-saffron-200'
        }`}>
          <span className="text-xs font-semibold uppercase">
            {dateObj.toLocaleDateString('en-US', { month: 'short' })}
          </span>
          <span className="text-xl font-bold leading-tight">{dateObj.getDate()}</span>
        </div>
        
        <div>
          <h4 className="text-xl font-serif font-bold text-darkbrown-900 mb-1">
            {booking.templeId?.name}
          </h4>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
            <span className="flex items-center"><MapPin className="w-4 h-4 mr-1 text-gray-400" /> {booking.templeId?.city}</span>
            <span className="flex items-center"><Clock className="w-4 h-4 mr-1 text-gray-400" /> {booking.slotId?.startTime}</span>
            <span className="flex items-center"><Ticket className="w-4 h-4 mr-1 text-gray-400" /> {booking.noOfPersons} Persons</span>
          </div>
          
          {isPrivileged && (
            <div className="mt-3 text-xs text-gray-500 flex items-center gap-2">
              <span className="bg-gray-100 px-2 py-1 rounded">User: {booking.userId?.name}</span>
              <span className="bg-gray-100 px-2 py-1 rounded">Ticket: {booking.ticketNumber}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex flex-col lg:items-end gap-3 w-full lg:w-auto border-t lg:border-t-0 pt-4 lg:pt-0 border-gray-100">
        <div className="flex items-center justify-between lg:justify-end w-full gap-4">
          <div className="text-left lg:text-right">
            <p className="text-xs text-gray-500 uppercase font-semibold">Amount Paid</p>
            <p className={`text-lg font-bold ${isCancelled ? 'text-gray-400 line-through' : 'text-darkbrown-900'}`}>
              ₹{booking.totalAmount}
            </p>
          </div>
          <Badge variant={getStatusVariant()}>
            {booking.bookingStatus}
          </Badge>
        </div>
        
        {!isPrivileged && (
          <div className="flex gap-2 w-full lg:w-auto">
            {isConfirmed && (
              <Button variant="outline" onClick={() => generateTicketPDF(booking, booking.templeId)} className="flex-1 lg:flex-none">
                <Download className="w-4 h-4 mr-2 text-saffron-500" /> Ticket
              </Button>
            )}
            {!isCancelled && (
              <Button 
                variant="danger" 
                onClick={() => { if(window.confirm('Are you sure you want to cancel this booking?')) onCancel(booking._id) }} 
                className="flex-1 lg:flex-none"
              >
                <XCircle className="w-4 h-4 mr-2" /> Cancel
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
