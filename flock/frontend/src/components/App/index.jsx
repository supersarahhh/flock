import { useState,useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import HomePage from '../HomePage'
import SearchPage from '../SearchPage'
import DetailsPage from '../DetailsPage';

import './styles.css'

function App() {
  const [events, setEvents] = useState([])
  const [detailsData, setDetailsData] = useState({})


    async function getData(url) {
      const res = await fetch(url)
      const data = await res.json()
      const events = data._embedded.events

      setEvents(events)
    }

   useEffect(() => {
    getData(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${import.meta.env.VITE_TICKET_KEY}`)


  }, [])

  return  (
    <>
    <nav >
            <Link to="/">
                <h3>Home</h3>      
            </Link>        
            <Link to="/search">
                <h3>Search</h3>
            </Link>             

    </nav>

  <Routes>
      <Route path="/" element={

          <HomePage
              events={events}
              getData={getData}
              setDetailsData={setDetailsData} />} />

      <Route path="/search" element={<SearchPage setDetailsData={setDetailsData} />} />

      <Route path="/details/:id" element={<DetailsPage detailsData={events}/>} />


  </Routes>

</>
  ) 
}

export default App
