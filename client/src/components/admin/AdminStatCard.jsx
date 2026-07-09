import { TrendingUp } from '../../icons';

export const AdminStatCard = ({ title, value, icon: Icon, trend }) => (
  <div className="card">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-saffron-50 rounded-xl">
        <Icon className="w-6 h-6 text-saffron-600" />
      </div>
      {trend && (
        <span className="flex items-center text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
          <TrendingUp className="w-3 h-3 mr-1" /> {trend}
        </span>
      )}
    </div>
    <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
    <p className="text-3xl font-bold text-darkbrown-900 mt-1">{value}</p>
  </div>
);
