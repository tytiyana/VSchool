import ReactDOM from "react-dom/client"
import App from "./App"

import UserProvider from './context/UserProvider.js'
import { BrowserRouter as Router } from "react-router-dom"
import './css/styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Router><UserProvider><App/></UserProvider></Router>)