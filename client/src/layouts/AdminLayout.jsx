import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from '../context/AuthContext';
import { LayoutDashboard, Building2, CalendarDays, Ticket, Users, FileText, Settings, Heart, LogOut } from 'lucide-react';
import { useEffect } from 'react';

const AdminLayout = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== 'ADMIN') {
      navigate('/login');
    }
  }, [user, navigate]);

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Temple Management', path: '/admin/temples', icon: <Building2 size={20} /> },
    { name: 'Slot Management', path: '/admin/slots', icon: <CalendarDays size={20} /> },
    { name: 'Booking Management', path: '/admin/bookings', icon: <Ticket size={20} /> },
    { name: 'Donations', path: '/admin/donations', icon: <Heart size={20} /> },
    { name: 'Users', path: '/admin/users', icon: <Users size={20} /> },
    { name: 'Reviews', path: '/admin/reviews', icon: <FileText size={20} /> },
    { name: 'Settings', path: '/admin/settings', icon: <Settings size={20} /> },
  ];

  if (!user) return null;

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-darkbrown-900 text-ivory-50 flex flex-col shadow-2xl">
        <div className="h-16 flex items-center px-6 border-b border-darkbrown-800">
          <Link to="/" className="text-xl font-serif font-bold text-saffron-500 tracking-wider">
            DarshanEase <span className="text-xs text-gray-400 align-top">ADMIN</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {navItems.map((item) => {
              const isActive = location.pathname.includes(item.path);
              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                      isActive ? 'bg-saffron-600 text-white font-medium' : 'text-gray-300 hover:bg-darkbrown-800 hover:text-white'
                    }`}
                  >
                    {item.icon}
                    <span className="text-sm">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="p-4 border-t border-darkbrown-800">
          <button
            onClick={() => logout()}
            className="flex items-center gap-3 px-3 py-2.5 w-full text-left text-gray-400 hover:text-white hover:bg-darkbrown-800 rounded-lg transition-colors"
          >
            <LogOut size={20} />
            <span className="text-sm">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto flex flex-col">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm">
          <h1 className="text-lg font-serif font-semibold text-darkbrown-900">
            {navItems.find(i => location.pathname.includes(i.path))?.name || 'Admin Panel'}
          </h1>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-800">{user.name}</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-saffron-100 text-saffron-700 flex items-center justify-center font-bold">
              {user.name.charAt(0)}
            </div>
          </div>
        </header>
        
        {/* Page Content */}
        <div className="p-8 flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
