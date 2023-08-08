import { useState,useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import HomePage from '../HomePage'
import SearchPage from '../SearchPage'

import './styles.css'

function App() {
  const [event, setEvent] = useState([])
  const [detailsData, setDetailsData] = useState({})

    async function getData(url) {
      const res = await fetch(url)
      const attractionsData = await res.json();
      const event = attractionsData._embedded.attractions;
      setEvent(event)
      // console.log(attractions)

    }

   useEffect(() => {
    getData(`https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=${import.meta.env.VITE_TICKET_KEY}`)

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
              event={event}
              getData={getData}
              setDetailsData={setDetailsData} />} />

      <Route path="/search" element={<SearchPage setDetailsData={setDetailsData} />} />
  </Routes>
</>
  ) 
}

export default App
