import { useState,useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from '../HomePage'
import SearchPage from '../SearchPage'
import DetailsPage from '../DetailsPage'

import LoginButton from '../LoginButton'
import LogoutButton from '../LogOutButton'
import { useAuth0 } from '@auth0/auth0-react'

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
    getData(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=${import.meta.env.VITE_TICKET_KEY}`)

  }, [])


  return  (
    <div>

      <nav>
        <Link to="/"> 
            <h3>Home</h3>      
          </Link>                   
        <Link to="/search">
            <h3>Search</h3>
          </Link>                       
        </nav>

          {error && <p>Auth error</p>}
          {!error && isLoading && <p>Loading...</p>}
          {!error && !isLoading && (

                  <>
                <div className="auth">
                <LoginButton />&nbsp;&nbsp;&nbsp;&nbsp;
                <LogoutButton />
                </div>
                  </>
                        )} 

       <h2>"Birds of a Feather Flock Together"</h2>

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
