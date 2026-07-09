import { Clock, Users, Building2, Ticket } from '@/icons';

export const TempleInfo = ({ temple }) => {
  return (
    <div className="info">
      
      <div className="card">
        <h2 className="title">
          <Building2 className="w-6 h-6 mr-3 text-saffron-500" />
          About {temple.name}
        </h2>
        <p className="text">
          {temple.description}
        </p>
      </div>

      <div className="stats">
        <div>
          <span className="label">Opening Time</span>
          <div className="value">
            <Clock className="w-5 h-5 mr-2 text-saffron-500" />
            {temple.openingTime}
          </div>
        </div>
        <div>
          <span className="label">Closing Time</span>
          <div className="value">
            <Clock className="w-5 h-5 mr-2 text-saffron-500" />
            {temple.closingTime}
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="title">
          <Ticket className="w-6 h-6 mr-3 text-saffron-500" />
          Darshan Types
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {temple.darshanTypes?.map((darshan, index) => (
            <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div>
                <h4 className="font-semibold text-darkbrown-800">{darshan.name}</h4>
                <p className="text-sm text-gray-500">{darshan.duration} minutes</p>
              </div>
              <div className="text-lg font-bold text-saffron-600">
                ₹{darshan.price}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h2 className="title">
          <Users className="w-6 h-6 mr-3 text-saffron-500" />
          Facilities
        </h2>
        <div className="flex flex-wrap gap-2">
          {temple.facilities?.map((facility, index) => (
            <span key={index} className="tag">
              {facility}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};
