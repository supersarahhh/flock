import React, { useState } from 'react';
import Event from '../Event';
import axios from 'axios';

export default function SearchPage(props) {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  async function searchData() {
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${encodeURIComponent(
      query
    )}&apikey=${import.meta.env.VITE_TICKET_KEY}`;

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

  return (
    <div>
      <form onSubmit={handleQuerySubmit}>
        <input
          name="search"
          placeholder="Search for events..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <h2>Search Results:</h2>
      {searchResults.map((event) => (
        <Event key={event.id} event={event} updateDetails={props.setDetailsData} />
      ))}
    </div>
  );
}
