import { Input } from '@/components/ui/Input';

export const DevoteeCard = ({ devotee, index, onChange }) => {
  return (
    <div className="devotee">
      <span className="badge">
        Devotee {index + 1}
      </span>
      <div className="body">
        <Input 
          placeholder="Full Name" 
          value={devotee.name}
          onChange={(e) => onChange(index, 'name', e.target.value)}
        />
        <div className="row-2">
          <Input 
            type="number" 
            placeholder="Age" 
            value={devotee.age}
            onChange={(e) => onChange(index, 'age', e.target.value)}
          />
          <select 
            value={devotee.gender}
            onChange={(e) => onChange(index, 'gender', e.target.value)}
            className="input"
          >
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="row-3">
          <select 
            value={devotee.idProofType}
            onChange={(e) => onChange(index, 'idProofType', e.target.value)}
            className="input col-span-1"
          >
            <option>Aadhar</option>
            <option>PAN</option>
            <option>Passport</option>
          </select>
          <Input 
            placeholder="ID Number" 
            value={devotee.idProofNumber}
            onChange={(e) => onChange(index, 'idProofNumber', e.target.value)}
            containerClassName="col-span-2"
          />
        </div>
      </div>
    </div>
  );
};
