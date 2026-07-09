import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';
import { Loader2 } from 'lucide-react';

// Lazy loading pages
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const TempleList = lazy(() => import('./pages/TempleList'));
const TempleDetails = lazy(() => import('./pages/TempleDetails'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

const AdminLayout = lazy(() => import('./layouts/AdminLayout'));
const AdminTemples = lazy(() => import('./pages/admin/AdminTemples'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const AdminSlots = lazy(() => import('./pages/admin/AdminSlots'));
const AdminBookings = lazy(() => import('./pages/admin/AdminBookings'));
const AdminUsers = lazy(() => import('./pages/admin/AdminUsers'));
const AdminReviews = lazy(() => import('./pages/admin/AdminReviews'));
const AdminDonations = lazy(() => import('./pages/admin/AdminDonations'));
const AdminSettings = lazy(() => import('./pages/admin/AdminSettings'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-ivory-100">
    <Loader2 className="w-12 h-12 animate-spin text-saffron-500" />
  </div>
);

const MainLayout = () => (
  <div className="min-h-screen bg-ivory-100 text-darkbrown-900 font-sans relative flex flex-col">
    <Navbar />
    <main className="flex-grow">
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </main>
    <Chatbot />
  </div>
);

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          {/* Main User Routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/temples" element={<TempleList />} />
            <Route path="/temples/:id" element={<TempleDetails />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={
            <Suspense fallback={<PageLoader />}>
              <AdminLayout />
            </Suspense>
          }>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="temples" element={<AdminTemples />} />
            <Route path="slots" element={<AdminSlots />} />
            <Route path="bookings" element={<AdminBookings />} />
            <Route path="donations" element={<AdminDonations />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="reviews" element={<AdminReviews />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
