import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import App from './components/App'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Auth0Provider
    domain={`${import.meta.env.VITE_AUTH0_DOMAIN}`}
    clientID={`${import.meta.env.VITE_AUTH0_CLIENT_ID}}`}
      authorizationParams={{
        redirect_uri: window.location.origin}}
    >
    <App />
    
    </Auth0Provider>
  </Router>,
)
