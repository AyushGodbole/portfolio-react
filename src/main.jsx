// components imports
import App from './App.jsx'

// css imports
import './index.css'

// libraries imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
)
