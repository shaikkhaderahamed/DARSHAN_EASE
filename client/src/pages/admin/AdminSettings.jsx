import { useState } from 'react';
import { toast } from 'react-toastify';
import { PageHeader } from '../../components/ui/PageHeader';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Save, Settings, Shield, Bell, Database } from '../../icons';

const AdminSettings = () => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('general');

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success('Settings saved successfully');
    }, 1000);
  };

  const navItems = [
    { id: 'general', label: 'General', icon: Settings },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'database', label: 'System & Data', icon: Database },
  ];

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Platform Settings"
        subtitle="Manage global configurations for DarshanEase."
        action={
          <Button onClick={handleSave} isLoading={loading} className="shadow-lg shadow-saffron-500/20">
            <Save className="w-4 h-4 mr-2" /> Save Changes
          </Button>
        }
      />

      <div className="card p-0 flex flex-col md:flex-row min-h-[500px]">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-gray-50/50 border-r border-gray-100 p-4">
          <nav className="space-y-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button 
                key={id}
                onClick={() => setActiveTab(id)}
                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                  activeTab === id ? 'bg-saffron-100 text-saffron-800' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-4 h-4 mr-3" /> {label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8">
          {activeTab === 'general' && (
            <div className="max-w-2xl space-y-6 animate-in fade-in">
              <h2 className="text-xl font-bold text-darkbrown-900 mb-6">General Settings</h2>
              
              <Input label="Platform Name" defaultValue="DarshanEase" />
              <Input label="Contact Email" type="email" defaultValue="support@darshanease.com" />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Platform Status</label>
                <select className="input">
                  <option>Active</option>
                  <option>Maintenance Mode</option>
                </select>
                <p className="text-xs text-gray-500 mt-2">Setting to Maintenance Mode will prevent non-admins from logging in.</p>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="max-w-2xl space-y-6 animate-in fade-in">
              <h2 className="text-xl font-bold text-darkbrown-900 mb-6">Security Settings</h2>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div>
                  <h3 className="font-semibold text-darkbrown-900">Require Two-Factor Auth for Admins</h3>
                  <p className="text-sm text-gray-500 mt-1">Enhance security for privileged accounts.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-saffron-500"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div>
                  <h3 className="font-semibold text-darkbrown-900">Strict Rate Limiting</h3>
                  <p className="text-sm text-gray-500 mt-1">Limit requests to prevent DDoS attacks.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-saffron-500"></div>
                </label>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="max-w-2xl space-y-6 animate-in fade-in">
              <h2 className="text-xl font-bold text-darkbrown-900 mb-6">Email & SMS Settings</h2>
              
              <Input label="SMTP Host" defaultValue="smtp.sendgrid.net" />
              
              <div className="flex gap-4">
                <Input label="SMTP Port" defaultValue="587" containerClassName="flex-1" />
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">SMS Gateway</label>
                  <select className="input">
                    <option>Twilio</option>
                    <option>MSG91</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'database' && (
            <div className="max-w-2xl space-y-6 animate-in fade-in">
              <h2 className="text-xl font-bold text-darkbrown-900 mb-6">System Status</h2>
              
              <div className="p-5 bg-blue-50 border border-blue-100 rounded-xl flex items-start">
                <Database className="w-6 h-6 text-blue-500 mr-3 shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-900">Database Connection: Healthy</h3>
                  <p className="text-sm text-blue-700 mt-1">MongoDB cluster is running perfectly. Latency is &lt; 20ms.</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-lg font-bold text-red-600 mb-2">Danger Zone</h3>
                <p className="text-sm text-gray-500 mb-4">Once you delete data, there is no going back. Please be certain.</p>
                <Button variant="danger" className="border-red-200 bg-white">
                  Purge Old Logs
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
