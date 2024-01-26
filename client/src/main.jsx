import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './utils/Router';
import './style.scss'
ReactDOM.createRoot(document.getElementById('root')).render(
    // <AuthProvider>
        <Router/>
    // {/* </AuthProvider> */}

)
