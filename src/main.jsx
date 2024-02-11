// components imports
import App from './App.jsx'

// css imports
import './index.css'

// libraries imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {Toaster} from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
        <BrowserRouter>
            <App />
            <Toaster/>
        </BrowserRouter>
)
