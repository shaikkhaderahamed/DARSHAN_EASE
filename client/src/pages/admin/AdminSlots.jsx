import { useState } from 'react';
import { useAllSlots, useDeleteSlot } from '../../hooks/useSlots';
import { PageHeader } from '../../components/ui/PageHeader';
import { PageLoader } from '../../components/ui/Loader';
import { Input } from '../../components/ui/Input';
import { Table, Thead, Tbody, Tr, Th, Td } from '../../components/ui/Table';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Calendar, Clock, Plus, Edit2, Trash2, Search } from '../../icons';

const AdminSlots = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const { data: slots, isLoading } = useAllSlots();
  const deleteMutation = useDeleteSlot();

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this slot? This action cannot be undone.')) {
      deleteMutation.mutate(id);
    }
  };

  if (isLoading) return <PageLoader />;

  const filteredSlots = slots?.filter(slot => {
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return (
      slot.templeId?.name?.toLowerCase().includes(term) ||
      slot.darshanType.toLowerCase().includes(term)
    );
  }) || [];

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Slot Management"
        subtitle="Manage daily Darshan availability across all temples."
        action={
          <Button className="shadow-lg shadow-saffron-500/20">
            <Plus className="w-4 h-4 mr-2" /> Add New Slot
          </Button>
        }
      />

      <div className="card p-0 overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="w-full md:w-96">
            <Input 
              icon={Search}
              type="text" 
              placeholder="Search by Temple or Darshan Type..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="text-sm font-medium text-gray-500">
            Total Slots: {filteredSlots.length}
          </div>
        </div>

        <Table>
          <Thead>
            <Tr>
              <Th>Temple</Th>
              <Th>Date & Time</Th>
              <Th>Type</Th>
              <Th className="text-right">Capacity</Th>
              <Th className="text-center">Status</Th>
              <Th className="text-right">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredSlots.map(slot => {
              const date = new Date(slot.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' });
              return (
                <Tr key={slot._id}>
                  <Td className="font-medium text-darkbrown-900">
                    {slot.templeId?.name || 'Unknown Temple'}
                  </Td>
                  <Td className="text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1.5 text-gray-400" /> {date}
                    </div>
                    <div className="flex items-center text-xs mt-1">
                      <Clock className="w-3 h-3 mr-1.5 text-gray-400" /> {slot.startTime} - {slot.endTime}
                    </div>
                  </Td>
                  <Td>
                    <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-lg text-xs font-medium">
                      {slot.darshanType}
                    </span>
                  </Td>
                  <Td className="text-right">
                    <div className="font-semibold text-darkbrown-900">{slot.availableSeats} <span className="text-gray-400 text-xs font-normal">avail</span></div>
                    <div className="text-xs text-gray-500 mt-1">{slot.totalCapacity} total</div>
                  </Td>
                  <Td>
                    <div className="flex justify-center">
                      <Badge variant={slot.status === 'AVAILABLE' ? 'success' : 'danger'}>
                        {slot.status}
                      </Badge>
                    </div>
                  </Td>
                  <Td>
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="outline" className="!p-2 text-blue-600 border-blue-200 hover:bg-blue-50" title="Edit">
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button variant="danger" className="!p-2" onClick={() => handleDelete(slot._id)} title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </Td>
                </Tr>
              );
            })}
            
            {filteredSlots.length === 0 && (
              <Tr>
                <Td colSpan="6" className="text-center text-gray-500 py-8">
                  No darshan slots found matching your criteria.
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminSlots;
