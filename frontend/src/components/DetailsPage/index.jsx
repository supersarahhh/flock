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
                    {eventDetails.dates.start.localDate}

                    <h3>Time</h3>
                    {eventDetails.dates.start.localTime}<br></br>
                    {eventDetails.dates.timezone}
                    <br></br><br></br>

                    <h3>Location</h3>
                    {eventDetails._embedded.venues[0].city?.name}, {eventDetails._embedded.venues[0].state?.name}
                    <br></br>
                    {eventDetails._embedded.venues[0].country?.name}

                    <h3>Venue</h3>
                    {eventDetails._embedded.venues[0].name}<br></br>
                    <br></br>

                    Venue Address: 
                    <br></br>{eventDetails._embedded.venues[0].address.line1}
                    <br></br>{eventDetails._embedded.venues[0].address.line2}
                    <br></br>

                    <h3>Status</h3>
                    {eventDetails.dates.status.code}

                    <h3>URL:</h3> <a href={eventDetails.url} target="_blank" rel="noopener noreferrer">{eventDetails.url}</a>
                    <br></br>
                    <br></br>
            <CommentSection eventId=
                {eventDetails.name} />
      
          </div>
      )

}
