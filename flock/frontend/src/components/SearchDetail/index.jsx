import React from 'react';

import CommentSection from '../CommentSection'

export default function SearchDetail({ event }) {

  if (!event) {

    return <div>No details for your event...</div>;
  }

  return (
    <div>
      <br></br>
{event.images && event.images.length > 0 && (
              <img src={event.images[0].url} alt={`Event`} />
            )}
      <h2>{event.name}</h2>

      <h3>Date and Time</h3>
      <p>Date: {event.dates.start.localDate}</p>
      <br></br>

      <p>Time: {event.dates.start.localTime}</p>
      <br></br>

      <p>Timezone: {event.dates.timezone}</p>
      <br></br>

      <h3>Status</h3>
      <p>Status Code: {event.dates.status.code}</p>
      <br></br>
      <p>URL: <a href={event.url} target="_blank" rel="noopener noreferrer">{event.url}</a></p>

      <CommentSection eventId=
                {event.name} />
    </div>
  );
}


