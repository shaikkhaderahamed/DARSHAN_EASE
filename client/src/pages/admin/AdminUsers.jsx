import { useState } from 'react';
import { useAdminUsers, useUpdateUserRole, useDeleteUser } from '../../hooks/useAdmin';
import { PageHeader } from '../../components/ui/PageHeader';
import { PageLoader } from '../../components/ui/Loader';
import { Input } from '../../components/ui/Input';
import { Table, Thead, Tbody, Tr, Th, Td } from '../../components/ui/Table';
import { Button } from '../../components/ui/Button';
import { Search, Trash2, Shield, Mail, Calendar } from '../../icons';

const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const { data: users, isLoading } = useAdminUsers();
  const updateRoleMutation = useUpdateUserRole();
  const deleteMutation = useDeleteUser();

  const handleRoleChange = (id, newRole) => updateRoleMutation.mutate({ id, role: newRole });
  
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to permanently delete this user account?')) {
      deleteMutation.mutate(id);
    }
  };

  if (isLoading) return <PageLoader />;

  const filteredUsers = users?.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="space-y-6">
      <PageHeader 
        title="User Management"
        subtitle="Manage devotees, organizers, and administrative accounts."
      />

      <div className="card p-0 overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="w-full md:w-96">
            <Input 
              icon={Search}
              type="text" 
              placeholder="Search by Name or Email..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="text-sm font-medium text-gray-500">
            Total Users: {filteredUsers.length}
          </div>
        </div>

        <Table>
          <Thead>
            <Tr>
              <Th>User Details</Th>
              <Th>Contact</Th>
              <Th>Joined Date</Th>
              <Th>Role</Th>
              <Th className="text-right">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredUsers.map(u => (
              <Tr key={u._id}>
                <Td>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-saffron-100 flex items-center justify-center text-saffron-700 font-bold mr-3">
                      {u.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="font-semibold text-darkbrown-900">{u.name}</div>
                      <div className="text-xs text-gray-500 font-mono mt-0.5">ID: {u._id.substring(18)}</div>
                    </div>
                  </div>
                </Td>
                <Td>
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-3 h-3 mr-1.5 text-gray-400" /> {u.email}
                  </div>
                  {u.phone && <div className="text-xs text-gray-500 mt-1">{u.phone}</div>}
                </Td>
                <Td>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-3 h-3 mr-1.5 text-gray-400" />
                    {new Date(u.createdAt).toLocaleDateString()}
                  </div>
                </Td>
                <Td>
                  <div className="flex items-center">
                    <Shield className={`w-4 h-4 mr-2 ${
                      u.role === 'ADMIN' ? 'text-purple-500' : 
                      u.role === 'ORGANIZER' ? 'text-blue-500' : 'text-gray-400'
                    }`} />
                    <select
                      value={u.role}
                      onChange={(e) => handleRoleChange(u._id, e.target.value)}
                      className="bg-transparent text-sm font-medium focus:outline-none focus:ring-2 focus:ring-saffron-500 rounded px-1 py-0.5"
                    >
                      <option value="USER">User</option>
                      <option value="ORGANIZER">Organizer</option>
                      <option value="ADMIN">Admin</option>
                    </select>
                  </div>
                </Td>
                <Td>
                  <div className="flex justify-end">
                    <Button variant="danger" onClick={() => handleDelete(u._id)} className="!p-2">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </Td>
              </Tr>
            ))}
            {filteredUsers.length === 0 && (
              <Tr>
                <Td colSpan="5" className="text-center text-gray-500 py-8">
                  No users found matching your search.
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminUsers;
