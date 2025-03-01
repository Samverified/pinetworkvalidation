import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { UserDataProvider } from './context/UserContext.jsx'
// import { UserProvider } from './context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <UserDataProvider>
      <UserProvider> */}
        <App />
      {/* </UserProvider>
    </UserDataProvider> */}
  </React.StrictMode>,
)
