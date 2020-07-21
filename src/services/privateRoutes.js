import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "./auth"

const PrivateRoute = ({ component: Component, location }) => {
    // if the user is not loggedin, navigate back to login page
    if (!isLoggedIn() && location.pathname !== `/app/login`) {
        navigate("/app/login")
        return null
    }

    return <Component />
}

export default PrivateRoute