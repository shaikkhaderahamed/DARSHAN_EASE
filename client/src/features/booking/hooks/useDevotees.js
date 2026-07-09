import { useState } from 'react';

const DEFAULT_DEVOTEE = { name: '', age: '', gender: 'Male', idProofType: 'Aadhar', idProofNumber: '' };

export const useDevotees = () => {
  const [noOfPersons, setNoOfPersons] = useState(1);
  const [devotees, setDevotees] = useState([{ ...DEFAULT_DEVOTEE }]);

  const updateDevoteeCount = (count, maxSlots) => {
    if (count > maxSlots) return;
    setNoOfPersons(count);
    const current = [...devotees];
    if (count > current.length) {
      for (let i = current.length; i < count; i++) {
        current.push({ ...DEFAULT_DEVOTEE });
      }
    } else {
      current.splice(count);
    }
    setDevotees(current);
  };

  const handleDevoteeChange = (index, field, value) => {
    const newDevotees = [...devotees];
    newDevotees[index][field] = value;
    setDevotees(newDevotees);
  };

  const isValid = devotees.every(d => d.name && d.age && d.idProofNumber);

  return {
    noOfPersons,
    devotees,
    updateDevoteeCount,
    handleDevoteeChange,
    isValid
  };
};
