import React from 'react';
import { Link } from 'react-router';

const EventListItem = ({ event }) => {
  return (
    <li className="list-group-item">
          <Link to="/event">
      <div>
        {event.name.text}
      </div>
          </Link>
    </li>
  );

};

export default EventListItem;
