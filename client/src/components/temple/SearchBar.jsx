import { Search } from '../../icons';
import { Input } from '../ui/Input';

export const SearchBar = ({ value, onChange, placeholder = "Search..." }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="max-w-3xl mx-auto mb-12 flex gap-2">
      <div className="relative flex-1">
        <Input 
          icon={Search}
          type="text" 
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="rounded-full py-3"
        />
      </div>
    </form>
  );
};
