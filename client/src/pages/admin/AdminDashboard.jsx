import { Link } from 'react-router-dom';
import { useAdminStats } from '../../hooks/useAdmin';
import { PageLoader } from '../../components/ui/Loader';
import { EmptyState } from '../../components/ui/EmptyState';
import { PageHeader } from '../../components/ui/PageHeader';
import { Badge } from '../../components/ui/Badge';
import { AdminStatCard } from "../../components/admin/AdminStatCard";
import { AdminChart } from "../../components/admin/AdminChart";
import { Users, Ticket, IndianRupee, Landmark } from '../../icons';

const AdminDashboard = () => {
  const { data: stats, isLoading, error } = useAdminStats();

  if (isLoading) return <PageLoader />;
  if (error) return (
    <div className="p-6 bg-red-50 text-red-600 rounded-xl">
      Error loading dashboard stats. Make sure you have Admin privileges.
    </div>
  );

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Dashboard Overview"
        subtitle="Welcome to DarshanEase Admin Control Center"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AdminStatCard title="Total Revenue" value={`₹${stats.totalRevenue.toLocaleString()}`} icon={IndianRupee} trend="+12.5%" />
        <AdminStatCard title="Total Bookings" value={stats.totalBookings} icon={Ticket} trend="+5.2%" />
        <AdminStatCard title="Total Users" value={stats.totalUsers} icon={Users} trend="+18.1%" />
        <AdminStatCard title="Active Temples" value={stats.totalTemples} icon={Landmark} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2">
          <AdminChart data={stats.bookingsTrend} />
        </div>

        <div className="lg:col-span-1 card overflow-hidden flex flex-col p-0">
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <h2 className="text-lg font-bold text-darkbrown-900">Recent Bookings</h2>
            <Link to="/admin/bookings" className="text-sm text-saffron-600 hover:text-saffron-700 font-medium">View All</Link>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {stats.recentBookings.length === 0 ? (
              <EmptyState description="No recent bookings." className="border-none shadow-none" />
            ) : (
              stats.recentBookings.map(booking => (
                <div key={booking._id} className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-darkbrown-900 text-sm truncate w-32">{booking.templeId?.name || 'Unknown Temple'}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{booking.userId?.name || 'Guest User'}</p>
                  </div>
                  <div className="text-right flex flex-col items-end gap-1">
                    <Badge variant={
                      booking.bookingStatus === 'CONFIRMED' ? 'success' :
                      booking.bookingStatus === 'CANCELLED' ? 'danger' : 'warning'
                    }>
                      {booking.bookingStatus}
                    </Badge>
                    <p className="text-xs font-bold text-darkbrown-900">₹{booking.totalAmount}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
