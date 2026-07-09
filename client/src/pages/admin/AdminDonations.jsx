import { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useDonations } from '../../hooks/useDonations';
import { PageHeader } from '../../components/ui/PageHeader';
import { PageLoader } from '../../components/ui/Loader';
import { Input } from '../../components/ui/Input';
import { Table, Thead, Tbody, Tr, Th, Td } from '../../components/ui/Table';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Search, Heart, Download } from '../../icons';

const AdminDonations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: donations, isLoading } = useDonations();

  const exportToPDF = () => {
    if (!donations || donations.length === 0) return;
    
    const doc = new jsPDF();
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('DarshanEase - Donations Report', 14, 20);
    
    const tableData = donations.map(d => [
      d.transactionId || 'N/A',
      d.userId?.name || 'Anonymous',
      d.templeId?.name || 'General Fund',
      `Rs ${d.amount}`,
      d.purpose || 'General',
      new Date(d.createdAt).toLocaleDateString()
    ]);
    
    doc.autoTable({
      startY: 30,
      head: [['Txn ID', 'Donor', 'Temple/Fund', 'Amount', 'Purpose', 'Date']],
      body: tableData,
      theme: 'grid',
      headStyles: { fillColor: [249, 115, 22] }
    });
    
    doc.save('DarshanEase_Donations.pdf');
  };

  if (isLoading) return <PageLoader />;

  const filteredDonations = donations?.filter(d => 
    d.userId?.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    d.templeId?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.transactionId?.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const totalAmount = filteredDonations.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Donation Management"
        subtitle="Track and manage temple donations and contributions."
        action={
          <Button variant="outline" onClick={exportToPDF}>
            <Download className="w-4 h-4 mr-2" /> Export Report
          </Button>
        }
      />

      <div className="card p-0 overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="w-full md:w-96">
            <Input 
              icon={Search}
              type="text" 
              placeholder="Search by Donor, Temple, or Txn ID..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-6">
            <div className="text-sm">
              <span className="text-gray-500 block">Total Donations:</span>
              <span className="font-bold text-darkbrown-900">{filteredDonations.length}</span>
            </div>
            <div className="text-sm">
              <span className="text-gray-500 block">Total Amount:</span>
              <span className="font-bold text-saffron-600">₹{totalAmount.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <Table>
          <Thead>
            <Tr>
              <Th>Transaction ID</Th>
              <Th>Donor Details</Th>
              <Th>Temple / Fund</Th>
              <Th>Amount & Purpose</Th>
              <Th>Date</Th>
              <Th className="text-center">Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredDonations.map(d => (
              <Tr key={d._id}>
                <Td className="font-mono font-medium text-gray-600">
                  {d.transactionId || 'N/A'}
                </Td>
                <Td>
                  <div className="font-semibold text-darkbrown-900">{d.userId?.name || 'Anonymous Donor'}</div>
                  {d.userId?.email && <div className="text-xs text-gray-500">{d.userId.email}</div>}
                </Td>
                <Td className="text-gray-700 font-medium">
                  {d.templeId?.name || 'General Fund'}
                </Td>
                <Td>
                  <div className="font-bold text-saffron-600">₹{d.amount}</div>
                  <div className="text-xs text-gray-500 capitalize">{d.purpose || 'General'}</div>
                </Td>
                <Td className="text-gray-600">
                  {new Date(d.createdAt).toLocaleDateString()}
                </Td>
                <Td>
                  <div className="flex justify-center">
                    <Badge variant="success" icon={Heart}>
                      SUCCESS
                    </Badge>
                  </div>
                </Td>
              </Tr>
            ))}
            {filteredDonations.length === 0 && (
              <Tr>
                <Td colSpan="6" className="text-center text-gray-500 py-8">
                  No donations found matching your search.
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminDonations;
