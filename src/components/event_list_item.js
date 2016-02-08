import React from 'react';

const EventListItem = ({ event }) => {
  return (
    <li className="list-group-item">
      <div>
        {event.name.text}
      </div>
    </li>
  );

};

export default EventListItem;
