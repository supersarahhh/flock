import React from 'react';

import CommentSection from '../CommentSection'

export default function SearchDetail({ event }) {

  if (!event) {

    return <div>No details for your event...</div>;
  }

  return (

    <div className='searchDetails'>
      
      <br></br>
      {event.images && event.images.length > 0 && (
              <img src={event.images[6].url} alt={`Event`} />
                )}
      <h2>{event.name}</h2>

      <h3>Date </h3>
      <p>{event.dates.start.localDate}</p>


      <h3>Time</h3>
      <p>{event.dates.start.localTime}</p>
      <p>{event.dates.timezone}</p>

      <h3>Status</h3>
      <p>{event.dates.status.code}</p>

      <h3>URL:</h3> 
      <a href={event.url} target="_blank" rel="noopener noreferrer">{event.url}</a>
      <br></br>
      <br></br>

      <CommentSection eventId=
                {event.name} />
    </div>
  );
}


