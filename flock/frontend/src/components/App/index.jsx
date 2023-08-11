import { useState,useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from '../HomePage'
import SearchPage from '../SearchPage'
import DetailsPage from '../DetailsPage'

import LoginButton from '../LoginButton'
import LogoutButton from '../LogOutButton'
import { useAuth0 } from '@auth0/auth0-react'
import { Navigate } from 'react-router-dom';

import './styles.css'

function App() {
  const [events, setEvents] = useState([])
  const [detailsData, setDetailsData] = useState({})
  const {isLoading, error, isAuthenticated } = useAuth0();
  
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
   <div>

    {error && <p>Auth error</p>}

    {!error && isLoading && <p>Loading...</p>}

    {!error && !isLoading && (

      <>
    <LoginButton />
    <LogoutButton />
    {isAuthenticated && <Navigate to="/profile" />}
      </>

      )} 

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

</div>
  ) 
}

export default App
