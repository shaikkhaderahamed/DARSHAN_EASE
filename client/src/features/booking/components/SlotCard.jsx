export const SlotCard = ({ slot, selectedSlot, onSelect }) => {
  const dateObj = new Date(slot.date);
  const isSelected = selectedSlot?._id === slot._id;
  const isSoldOut = slot.availableSeats === 0;

  const stateClass = isSelected 
    ? 'active' 
    : isSoldOut 
      ? 'disabled' 
      : '';

  return (
    <button
      onClick={() => onSelect(slot)}
      disabled={isSoldOut}
      className={`slot ${stateClass}`}
    >
      <div className="header">
        <div className="info">
          <p className="date">
            {dateObj.toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' })}
          </p>
          <p className="time">{slot.startTime} - {slot.endTime}</p>
        </div>
        <span className={`tag ${slot.darshanType === 'VIP' ? 'vip' : 'general'}`}>
          {slot.darshanType}
        </span>
      </div>
      <div className="footer">
        <span className={`seats ${slot.availableSeats < 10 ? 'low' : 'high'}`}>
          {slot.availableSeats} slots left
        </span>
        <span className="price">
          {slot.ticketPrice === 0 ? 'Free' : `₹${slot.ticketPrice}`}
        </span>
      </div>
    </button>
  );
};
