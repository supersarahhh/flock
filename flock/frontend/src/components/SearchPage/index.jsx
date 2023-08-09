import React, { useState } from 'react';
import Event from '../Event';
import axios from 'axios';

export default function SearchPage(props) {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  async function searchData() {
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${encodeURIComponent(query)}&apikey=${import.meta.env.VITE_TICKET_KEY}`;

    try {
      const response = await axios.get(url);
      setSearchResults(response.data._embedded?.events || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  function handleQuerySubmit(events) {
    events.preventDefault();
    searchData();
  }

  return (
    <div>
      <form onSubmit={handleQuerySubmit}>
        <input
          name="search"
          placeholder="Events in your area?..."
          value={query}
          onChange={(events) => setQuery(events.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {searchResults.map((events, index) => (

        <Event 
        key={events.id} 
        events={events} 
        detailsData={props.detailsData}
        updateDetails={props.setDetailsData}
        index={index}
         />
        
      ))}
    </div>
  );
}
