import React from 'react';
import EventListItem from './event_list_item';

const EventList = (props) => {

  const eventItems = props.events.map(event => {
    return (
      <EventListItem
      key={event.id}
      event={event} />
    );
  });

  return (
    <ul className="list-group">
      {eventItems}
    </ul>
  );
};

export default EventList;
