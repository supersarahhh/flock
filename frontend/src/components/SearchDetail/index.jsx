import React from 'react';

import CommentSection from '../CommentSection'

export default function SearchDetail({ event }) {

  if (!event) {

    return <div>No details for your event...</div>;
  }

  return (

    <div className='searchDetails'>
      
      {event.images && event.images.length > 0 && (
              <img src={event.images[6].url} alt={`Event`} />
                )}
      <h2>{event.name}</h2>

      <h3>Date </h3>
      {event.dates.start.localDate}

      <h3>Time</h3>
      {event.dates.start.localTime}<br></br>
      {event.dates.timezone}

      <br></br>
      <br></br>
      <h3>Location</h3>
      {event._embedded.venues[0].city?.name}, {event._embedded.venues[0].state?.name}
      <br></br>
      {event._embedded.venues[0].country?.name}

      <h3>Venue</h3>
      {event._embedded.venues[0].name}<br></br>
      <br></br>
      Venue Address: 
      <br></br>{event._embedded.venues[0].address.line1}
      <br></br>{event._embedded.venues[0].address.line2}
      <br></br>
      <h3>Status</h3>
      {event.dates.status.code}

      <h3>URL:</h3> 
      <a href={event.url} target="_blank" rel="noopener noreferrer">{event.url}</a>
      <br></br>
      <br></br>

      <CommentSection eventId=
                {event.name} />
    </div>
  );
}


