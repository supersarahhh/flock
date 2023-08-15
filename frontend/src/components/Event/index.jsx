import React from 'react';
import { Link } from 'react-router-dom'

export default function Event({ events, updateDetails }) {

  return (

    <div className='event'>     
          <h3>{events.name}</h3>
 
            <Link
              to={`/details/${events.id}`}
              onClick={() => updateDetails(events)}
              >


            {events.images && events.images.length > 0 && (
              <img src={events.images[6].url} alt={`Image 1`} />
              )} 
              
              </Link>
            
              <br></br>
              <p>Date: {events.dates.start.localDate}</p>
              <br></br>
              
              <p>Status: {events.dates.status.code}</p>

      </div>

  );
}
