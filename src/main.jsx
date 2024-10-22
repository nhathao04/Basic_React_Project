// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GlobalStyles from './Components/GlobalStyles/GlobalStyles.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
createRoot(document.getElementById('root')).render(
  <GlobalStyles>
      <Router>
        <App />
      </Router>
  </GlobalStyles>
)
