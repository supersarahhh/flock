import React from "react";
import { useParams } from "react-router-dom";
import CommentSection from '../CommentSection'

export default function DetailsPage({ detailsData }) {
const {id} = useParams()
const eventDetails = detailsData.find(event => event.id === id);

if (!eventDetails) {

    return <div>No details for your event...</div>;
}
        return (
            
            <div className="details">
                <br></br>
                
                {eventDetails.images && eventDetails.images.length > 0 && (
                
                <img src={eventDetails.images[6].url} alt={`Event`} />
                
                )}
                
                    <h2>{eventDetails.name}</h2>

                    <h3>Date</h3>
                    <p>{eventDetails.dates.start.localDate}</p>

                    <h3>Time</h3>
                    <p>{eventDetails.dates.start.localTime}</p>
                    <p>{eventDetails.dates.timezone}</p>

                    <h3>Status</h3>
                    <p> {eventDetails.dates.status.code}</p>

                    <h3>URL:</h3> <a href={eventDetails.url} target="_blank" rel="noopener noreferrer">{eventDetails.url}</a>
        
            <CommentSection eventId=
                {eventDetails.name} />
      
          </div>
      )

}
