import React from 'react'
import { Router } from "@reach/router"
import PrivateRoute from "../services/privateRoutes"
import Dashboard from "../components/dashboard"
import Login from "../components/login"
import NotFoundPage from "../pages/404"
const App = () => {
    return (
        <div>
            <Router>
                <PrivateRoute path="/app/dashboard" component={Dashboard}/>
                <Login path="/app/login" />
                <NotFoundPage path="*" />
            </Router>
        </div>
    )
}

export default App
