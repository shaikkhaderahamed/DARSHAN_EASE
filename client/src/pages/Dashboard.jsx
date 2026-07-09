import { useContext } from "react";
import { AuthContext } from '../context/AuthContext';
import { useMyBookings, useAllBookings, useCancelBooking } from '../hooks/useBookings';
import { DashboardHeader, DashboardStats } from '../components/dashboard/DashboardHeader';
import { BookingCard } from '../components/dashboard/BookingCard';
import { Loader } from '../components/ui/Loader';
import { EmptyState } from '../components/ui/EmptyState';
import { Ticket } from '../icons';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const isPrivileged = user?.role === 'ADMIN' || user?.role === 'ORGANIZER';

  const myBookingsQuery = useMyBookings();
  const allBookingsQuery = useAllBookings();
  const cancelMutation = useCancelBooking();

  if (!user) return <div className="text-center py-24 text-gray-500">Please login to view dashboard.</div>;

  const bookingsToDisplay = isPrivileged ? allBookingsQuery.data : myBookingsQuery.data;
  const isLoading = isPrivileged ? allBookingsQuery.isLoading : myBookingsQuery.isLoading;

  const generateChartData = () => {
    if (!allBookingsQuery.data) return [];
    
    const grouped = allBookingsQuery.data.reduce((acc, curr) => {
      const date = new Date(curr.createdAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' });
      acc[date] = (acc[date] || 0) + curr.totalAmount;
      return acc;
    }, {});

    return Object.keys(grouped).map(date => ({
      date,
      revenue: grouped[date]
    })).slice(-7);
  };

  return (
    <div className="page">
      <div className="section">
        <DashboardHeader user={user} isPrivileged={isPrivileged} />

        {isPrivileged && (
          <DashboardStats 
            allBookings={allBookingsQuery.data} 
            chartData={generateChartData()} 
          />
        )}

        <div className="card p-0 overflow-hidden">
          <div className="p-6 md:p-8 border-b border-gray-100 bg-gray-50/50">
            <h2 className="text-2xl font-serif font-bold text-darkbrown-800">
              {isPrivileged ? 'Recent Bookings' : 'Your Bookings'}
            </h2>
          </div>

          {isLoading ? (
            <Loader />
          ) : bookingsToDisplay?.length === 0 ? (
            <EmptyState 
              icon={Ticket}
              title="No bookings found"
              className="border-none shadow-none"
            />
          ) : (
            <div className="divide-y divide-gray-100">
              {bookingsToDisplay?.map((booking) => (
                <BookingCard 
                  key={booking._id} 
                  booking={booking} 
                  isPrivileged={isPrivileged}
                  onCancel={(id) => cancelMutation.mutate(id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
