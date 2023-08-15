import React, { useState } from 'react';
import axios from 'axios';
import SearchDetail from '../SearchDetail';
import { Spotify } from 'react-spotify-embed';


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

<br></br>
<br></br>

<h2>Find your Flock</h2>
      <form onSubmit={handleQuerySubmit}>

        <input className='search'
          name="search"
          placeholder="__events in your area?"
          value={query}
          onChange={(event) => setQuery(event.target.value)}

        />

&nbsp;&nbsp; <button type="submit">Search</button>

      </form>
      <br></br>



      {selectedEvent ? (

        <div className='hideDetails'>
         <br></br>

          <button onClick={handleHideDetails}>Hide Details</button>
          
          <SearchDetail event={selectedEvent} />
        </div>

      ) : (
        searchResults.map((event) => (

          <div className='searchResults' key={event.id}>

             {event.images && event.images.length > 0 && (
              <img className="searchimg" src={event.images[6].url} alt={`Event`} />
            )}

            <div className='searchRD'>
            <p>{event.name}</p>
            
            
            {event._embedded && event._embedded.venues && event._embedded.venues.length > 0 && (
              <p>
                {event._embedded.venues[0].city?.name},{' '}
                {event._embedded.venues[0].state?.name}
                <br></br>
                {/* <br></br> */}
                {event._embedded.venues[0].country?.name}
              </p>
              )}
            {event.dates.start.localDate}
            <p>Status: <strong><span style={{ color: 'pink', textTransform: 'capitalize' }}>{event.dates.status.code}</span></strong></p>

            <br></br>

              <button onClick={() => handleEventClick(event)}>Show Details</button>

            </div>

          </div>
        ))

      )}

<h2> Need inspo . . .? </h2>

<Spotify className="spotify" width="80%" link="https://open.spotify.com/playlist/37i9dQZF1DX4JAvHpjipBk" />
    </div>
    
  );
}
