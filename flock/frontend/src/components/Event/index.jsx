import React from 'react';

export default function Event({ event }) {

  return (

    <div>
      
          <h2>{event.name}</h2>
          <h4>url:</h4>

          {event.url && Object.values(event.url).map((url, index) => (
            <a key={index}>{url}</a>
              ))}

            <br></br>
          {event.images && event.images.length > 0 && (
            <img src={event.images[0].url} alt={`Image 1`} />
              )}
  </div>

  );
}
