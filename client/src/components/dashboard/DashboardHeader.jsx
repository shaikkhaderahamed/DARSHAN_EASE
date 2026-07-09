import { IndianRupee } from '../../icons';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts';

export const DashboardHeader = ({ user, isPrivileged }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
      <div>
        <h1 className="title">
          {isPrivileged ? 'Admin Dashboard' : 'My Spiritual Journey'}
        </h1>
        <p className="subtitle mt-2">
          {isPrivileged ? 'Manage bookings and analyze revenue.' : 'View and manage your upcoming darshans.'}
        </p>
      </div>
      <div className="bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100 flex items-center">
        <div className="w-10 h-10 bg-saffron-100 text-saffron-600 rounded-full flex items-center justify-center font-bold mr-3">
          {user?.name?.charAt(0) ?? '?'}
        </div>
        <div>
          <p className="text-sm font-semibold text-darkbrown-900">{user.name}</p>
          <p className="text-xs text-gray-500">{user.role}</p>
        </div>
      </div>
    </div>
  );
};

export const DashboardStats = ({ allBookings, chartData }) => {
  const totalRevenue = allBookings?.reduce((sum, b) => sum + (b.bookingStatus !== 'CANCELLED' ? b.totalAmount : 0), 0) || 0;
  const totalBookings = allBookings?.length || 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
      <div className="lg:col-span-2 card">
        <h3 className="text-lg font-serif font-semibold text-darkbrown-900 mb-6">Revenue Overview (Last 7 Days)</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
              <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} tickFormatter={(value) => `₹${value}`} />
              <Tooltip cursor={{fill: '#fff0d6'}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
              <Bar dataKey="revenue" fill="#ff9933" radius={[4, 4, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="stats-card flex flex-col justify-center">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <IndianRupee size={120} />
        </div>
        <h3 className="text-saffron-100 font-medium mb-2 relative z-10">Total Revenue</h3>
        <p className="text-5xl font-bold font-serif relative z-10">
          ₹{totalRevenue.toLocaleString('en-IN')}
        </p>
        <div className="mt-8 relative z-10">
          <h3 className="text-saffron-100 font-medium mb-2">Total Bookings</h3>
          <p className="text-3xl font-bold font-serif">{totalBookings}</p>
        </div>
      </div>
    </div>
  );
};
