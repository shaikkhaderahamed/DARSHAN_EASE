import { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { toast } from 'react-toastify';
import { useAllBookings, useCancelBooking } from '../../hooks/useBookings';
import { PageHeader } from '../../components/ui/PageHeader';
import { PageLoader } from '../../components/ui/Loader';
import { Input } from '../../components/ui/Input';
import { Table, Thead, Tbody, Tr, Th, Td } from '../../components/ui/Table';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Search, Download, Ban, Eye } from '../../icons';

const AdminBookings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  
  const { data: bookings, isLoading } = useAllBookings();
  const cancelMutation = useCancelBooking();

  const handleCancel = (id) => {
    if (window.confirm('Are you sure you want to cancel this booking? This will refund the amount and restore the slot capacity.')) {
      cancelMutation.mutate(id);
    }
  };

  const exportToPDF = () => {
    if (!bookings || bookings.length === 0) {
      toast.error('No data to export');
      return;
    }
    
    const doc = new jsPDF();
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('DarshanEase - All Bookings Report', 14, 20);
    
    const tableData = bookings.map(b => [
      b.ticketNumber || 'N/A',
      b.userId?.name || 'Guest',
      b.templeId?.name || 'Unknown',
      new Date(b.slotId?.date).toLocaleDateString(),
      b.noOfPersons,
      `Rs ${b.totalAmount}`,
      b.bookingStatus
    ]);
    
    doc.autoTable({
      startY: 30,
      head: [['Ticket ID', 'Devotee', 'Temple', 'Date', 'Persons', 'Amount', 'Status']],
      body: tableData,
      theme: 'grid',
      headStyles: { fillColor: [249, 115, 22] }
    });
    
    doc.save('DarshanEase_Bookings.pdf');
  };

  if (isLoading) return <PageLoader />;

  const filteredBookings = bookings?.filter(b => {
    const matchesSearch = 
      b.ticketNumber?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.userId?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.templeId?.name?.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesStatus = statusFilter === 'ALL' || b.bookingStatus === statusFilter;
    
    return matchesSearch && matchesStatus;
  }) || [];

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Booking Management"
        subtitle="Monitor and manage all user reservations and tickets."
        action={
          <Button variant="outline" onClick={exportToPDF}>
            <Download className="w-4 h-4 mr-2" /> Export PDF
          </Button>
        }
      />

      <div className="card p-0 overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <div className="w-full md:w-80">
              <Input 
                icon={Search}
                type="text" 
                placeholder="Search Ticket, Name, or Temple..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="input md:w-auto"
            >
              <option value="ALL">All Statuses</option>
              <option value="CONFIRMED">Confirmed</option>
              <option value="CANCELLED">Cancelled</option>
              <option value="COMPLETED">Completed</option>
            </select>
          </div>
          <div className="text-sm font-medium text-gray-500">
            Total Bookings: {filteredBookings.length}
          </div>
        </div>

        <Table>
          <Thead>
            <Tr>
              <Th>Ticket ID</Th>
              <Th>Devotee & Temple</Th>
              <Th>Date & Time</Th>
              <Th>Details</Th>
              <Th className="text-center">Status</Th>
              <Th className="text-right">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredBookings.map(b => (
              <Tr key={b._id}>
                <Td className="font-mono font-medium text-saffron-600">
                  {b.ticketNumber || 'N/A'}
                </Td>
                <Td>
                  <div className="font-semibold text-darkbrown-900">{b.userId?.name || 'Guest'}</div>
                  <div className="text-xs text-gray-500">{b.templeId?.name}</div>
                </Td>
                <Td className="text-gray-600">
                  {b.slotId ? (
                    <>
                      <div className="font-medium">{new Date(b.slotId.date).toLocaleDateString()}</div>
                      <div className="text-xs">{b.slotId.startTime} - {b.slotId.endTime}</div>
                    </>
                  ) : 'Slot Not Found'}
                </Td>
                <Td>
                  <div className="text-darkbrown-900 font-medium">{b.noOfPersons} Persons</div>
                  <div className="text-xs font-bold text-gray-500">₹{b.totalAmount}</div>
                </Td>
                <Td>
                  <div className="flex justify-center">
                    <Badge variant={
                      b.bookingStatus === 'CONFIRMED' ? 'success' : 
                      b.bookingStatus === 'CANCELLED' ? 'danger' : 'info'
                    }>
                      {b.bookingStatus}
                    </Badge>
                  </div>
                </Td>
                <Td>
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="outline" className="!p-2 text-gray-600 border-gray-200 hover:bg-gray-100" title="View Details">
                      <Eye className="w-4 h-4" />
                    </Button>
                    {b.bookingStatus !== 'CANCELLED' && (
                      <Button variant="danger" className="!p-2" onClick={() => handleCancel(b._id)} title="Force Cancel">
                        <Ban className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </Td>
              </Tr>
            ))}
            
            {filteredBookings.length === 0 && (
              <Tr>
                <Td colSpan="6" className="text-center text-gray-500 py-8">
                  No bookings found matching your criteria.
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminBookings;
