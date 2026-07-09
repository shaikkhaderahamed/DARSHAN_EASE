import { useState } from 'react';
import { useTemples, useDeleteTemple, useToggleTempleStatus } from '@/features/temple';
import { PageHeader } from '../../components/ui/PageHeader';
import { PageLoader } from '../../components/ui/Loader';
import { EmptyState } from '@/components/ui/EmptyState';
import { templeImages } from '@/assets/temples';
import { Input } from '../../components/ui/Input';
import { Table, Thead, Tbody, Tr, Th, Td } from '../../components/ui/Table';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Plus, Search, Edit2, Trash2, Power } from '../../icons';
import AdminTempleForm from './AdminTempleForm';

const AdminTemples = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTemple, setEditingTemple] = useState(null);

  const { data: templesData, isLoading } = useTemples('limit=100');
  const temples = templesData?.data || templesData;
  
  const toggleStatusMutation = useToggleTempleStatus();
  const deleteMutation = useDeleteTemple();

  const handleEdit = (temple) => {
    setEditingTemple(temple);
    setIsFormOpen(true);
  };

  const handleAddNew = () => {
    setEditingTemple(null);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingTemple(null);
  };

  const templesArray = templesData?.data || [];
  const filteredTemples = templesArray.filter(t => 
    t.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    t.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return <PageLoader />;

  if (isFormOpen) {
    return <AdminTempleForm temple={editingTemple} onClose={handleCloseForm} />;
  }

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Temple Management"
        subtitle="Manage temples, their details, and status."
        action={
          <Button onClick={handleAddNew}>
            <Plus className="w-4 h-4 mr-2" /> Add New Temple
          </Button>
        }
      />

      <div className="card p-0 overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-gray-50/50">
          <div className="w-full md:w-96">
            <Input 
              icon={Search}
              type="text" 
              placeholder="Search temples by name or city..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <Table>
          <Thead>
            <Tr>
              <Th>Temple Details</Th>
              <Th>Location</Th>
              <Th>Status</Th>
              <Th>Rating</Th>
              <Th className="text-right">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredTemples.map(temple => (
              <Tr key={temple._id}>
                <Td>
                  <div className="flex items-center gap-4">
                    <img src={templeImages[temple.name] || templeImages['Tirumala Venkateswara Temple']} alt={temple.name} className="w-12 h-12 rounded-lg object-cover" />
                    <div>
                      <p className="font-semibold text-gray-900">{temple.name}</p>
                      <p className="text-xs text-gray-500">{temple._id.substring(18)}</p>
                    </div>
                  </div>
                </Td>
                <Td>
                  <p className="text-sm text-gray-800">{temple.city}</p>
                  <p className="text-xs text-gray-500">{temple.state}</p>
                </Td>
                <Td>
                  <Badge variant={temple.isActive ? 'success' : 'danger'}>
                    {temple.isActive ? 'Active' : 'Inactive'}
                  </Badge>
                </Td>
                <Td className="text-gray-600">
                  {temple.ratings} ({temple.reviewsCount})
                </Td>
                <Td>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" className="!p-2 text-blue-600 border-blue-200 hover:bg-blue-50" onClick={() => handleEdit(temple)} title="Edit">
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" className={`!p-2 ${temple.isActive ? 'text-orange-600 border-orange-200 hover:bg-orange-50' : 'text-green-600 border-green-200 hover:bg-green-50'}`} onClick={() => toggleStatusMutation.mutate(temple._id)} title="Toggle Status">
                      <Power className="w-4 h-4" />
                    </Button>
                    <Button variant="danger" className="!p-2" onClick={() => { if(window.confirm('Delete this temple?')) deleteMutation.mutate(temple._id) }} title="Delete">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </Td>
              </Tr>
            ))}
            {filteredTemples.length === 0 && (
              <Tr>
                <Td colSpan="5" className="text-center text-gray-500 py-8">
                  No temples found.
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminTemples;
