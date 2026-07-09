export const Table = ({ children }) => (
  <div className="table-container w-full overflow-x-auto">
    <table className="w-full text-left border-collapse">
      {children}
    </table>
  </div>
);

export const Thead = ({ children }) => (
  <thead className="bg-gray-50 border-b border-gray-100">
    {children}
  </thead>
);

export const Tbody = ({ children }) => (
  <tbody className="divide-y divide-gray-50 bg-white">
    {children}
  </tbody>
);

export const Tr = ({ children, className = '' }) => (
  <tr className={`table-row ${className}`}>
    {children}
  </tr>
);

export const Th = ({ children, className = '' }) => (
  <th className={`px-6 py-4 text-xs text-gray-500 uppercase font-semibold tracking-wider ${className}`}>
    {children}
  </th>
);

export const Td = ({ children, className = '' }) => (
  <td className={`table-cell whitespace-nowrap ${className}`}>
    {children}
  </td>
);
