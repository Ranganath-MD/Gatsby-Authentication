import { navigate } from "gatsby"

//Checking for the window object
export const isBrowser = () => typeof window !== "undefined"

// get the user object from the localstorage
export const getUser = () =>
    isBrowser() && window.localStorage.getItem("user")
        ? JSON.parse(window.localStorage.getItem("user"))
        : {}

// set the user object to local storage
const setUser = user =>
    window.localStorage.setItem("user", JSON.stringify(user))

export const handleLogin = (user) => {
    console.log(user)
    if (user.email && user.password ) {
        return setUser({
            username: user.username,
            email: user.email,
        })
    }

    return false
}

// check the user is logged in or not
export const isLoggedIn = () => {
    const user = getUser()
    return !!user.email
}

// logout the user
export const logout = () => {
    setUser({})
    navigate("/")
}