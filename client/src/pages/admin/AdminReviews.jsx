import { useState } from 'react';
import { useAllReviews, useDeleteReview } from '../../hooks/useReviews';
import { PageHeader } from '../../components/ui/PageHeader';
import { PageLoader } from '../../components/ui/Loader';
import { Input } from '../../components/ui/Input';
import { Table, Thead, Tbody, Tr, Th, Td } from '../../components/ui/Table';
import { Button } from '../../components/ui/Button';
import { Search, Trash2, Star, Flag } from '../../icons';

const AdminReviews = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const { data: reviews, isLoading } = useAllReviews();
  const deleteMutation = useDeleteReview();

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this review? This affects the temple average rating.')) {
      deleteMutation.mutate(id);
    }
  };

  if (isLoading) return <PageLoader />;

  const filteredReviews = reviews?.filter(r => 
    r.review.toLowerCase().includes(searchTerm.toLowerCase()) || 
    r.userId?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.templeId?.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Review Moderation"
        subtitle="Monitor and moderate user reviews across all temples."
      />

      <div className="card p-0 overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="w-full md:w-96">
            <Input 
              icon={Search}
              type="text" 
              placeholder="Search Review Text, User, or Temple..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="text-sm font-medium text-gray-500">
            Total Reviews: {filteredReviews.length}
          </div>
        </div>

        <Table>
          <Thead>
            <Tr>
              <Th>User & Temple</Th>
              <Th>Rating</Th>
              <Th>Review</Th>
              <Th>Date</Th>
              <Th className="text-right">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredReviews.map(r => (
              <Tr key={r._id}>
                <Td>
                  <div className="font-semibold text-darkbrown-900">{r.userId?.name || 'Unknown User'}</div>
                  <div className="text-xs text-gray-500">{r.templeId?.name || 'Unknown Temple'}</div>
                </Td>
                <Td>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-gold-400 fill-gold-400 mr-1" />
                    <span className="font-bold text-darkbrown-900">{r.rating}.0</span>
                  </div>
                </Td>
                <Td>
                  <p className="text-gray-600 line-clamp-2 max-w-md" title={r.review}>
                    {r.review}
                  </p>
                </Td>
                <Td className="text-gray-600">
                  {new Date(r.createdAt).toLocaleDateString()}
                </Td>
                <Td>
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="outline" className="!p-2 text-yellow-600 border-yellow-200 hover:bg-yellow-50" title="Flag Review">
                      <Flag className="w-4 h-4" />
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(r._id)} className="!p-2" title="Delete Review">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </Td>
              </Tr>
            ))}
            {filteredReviews.length === 0 && (
              <Tr>
                <Td colSpan="5" className="text-center text-gray-500 py-8">
                  No reviews found.
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminReviews;
