import React, { useState } from 'react';
import axios from 'axios';
import SearchDetail from '../SearchDetail';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  async function searchData() {
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${encodeURIComponent(query)}&apikey=${import.meta.env.VITE_TICKET_KEY}`;

    try {
      const response = await axios.get(url);
      setSearchResults(response.data._embedded?.events || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  function handleQuerySubmit(event) {
    event.preventDefault();
    searchData();
  }

  function handleEventClick(selectedEvent) {
    setSelectedEvent(selectedEvent);
  }

  function handleHideDetails() {
    setSelectedEvent(null);
  }

  return (
    <div>
      <form onSubmit={handleQuerySubmit}>

        <input
          name="search"
          placeholder="Events in your area?..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />

&nbsp;&nbsp; <button type="submit">Search</button>

      </form>

      {selectedEvent ? (

        <div>
         <br></br>

          <button onClick={handleHideDetails}>Hide Details</button>
          
          <SearchDetail event={selectedEvent} />
        </div>

      ) : (
        searchResults.map((event) => (

          <div key={event.id}>
                  <br></br>

             {event.images && event.images.length > 0 && (
              <img src={event.images[0].url} alt={`Event`} />
            )}

            <br />
            <br></br>

            <p>Name: {event.name}</p>
            <br></br>
            <p>Type: {event.type}</p>
            <br></br>
      <p>Status: {event.dates.status.code}</p>
      <br></br>

            <div>
            <br></br>

              <button onClick={() => handleEventClick(event)}>Show Details</button>
            </div>
            <br></br>

          </div>
        ))

      )}
    </div>
    
  );
}
