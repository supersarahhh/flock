import React from "react";
import { useParams } from "react-router-dom";
import CommentSection from '../CommentSection'

export default function DetailsPage({ detailsData }) {
const {id} = useParams()
const eventDetails = detailsData[id];

if (!eventDetails) {

    return <div>No details for your event...</div>;
}

        return (
            
            <div>
                
            <h2>{eventDetails.name}</h2>
            <br></br>

            <p>Type: {eventDetails.type}</p>

            <br></br>
            <p>ID: {eventDetails.id}</p>

            <br></br>
            <p>URL: <a href={eventDetails.url} target="_blank" rel="noopener noreferrer">{eventDetails.url}</a></p>
      
            <h3>Date</h3>
            <p>{eventDetails.dates.start.localDate}</p>

            <br></br>
            <h3>Time</h3>
            <p>{eventDetails.dates.start.localTime}</p>
            <br></br>
            <p>{eventDetails.dates.timezone}</p>
     
            <h3>Accessibility</h3>
            <p>Info: {eventDetails.accessibility.info}</p>
            <p>Ticket Limit: {eventDetails.accessibility.ticketLimit}</p>
        
            <CommentSection eventId=
                {eventDetails.name} />
      
          </div>
      )

}
