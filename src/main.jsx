import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Kingo } from 'react-router-dom'
import HouseContextProvider from './Components/HouseContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HouseContextProvider>
      <Kingo>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Kingo>
  </HouseContextProvider>
  
  
)
