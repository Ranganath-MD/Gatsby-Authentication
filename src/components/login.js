import React, { useState } from 'react'
import Layout from './layout'
import SEO from './seo'
import { handleLogin } from "../services/auth"
import { navigate } from 'gatsby'

const Login = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmailChange = (e) => {
        e.persist()
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        e.persist()
        setPassword(e.target.value)
    }
    const handleNameChange = (e) => {
        e.persist()
        setUsername(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            username, email, password
        }
        handleLogin(user)
        navigate("/app/dashboard")
        setEmail("")
        setPassword("")
        setUsername("")
    }

    const inputStyles = {
        width: `100%`,
        marginTop: `10px`,
        borderRadius: `5px`,
        border: `2px solid #black`,
        padding: `5px 10px`
    }
    return (
        <Layout>
            <SEO title="Login" />
            <div >
                <h1 style={{ textAlign: `center`}}>Login</h1>
                <form onSubmit={handleSubmit}
                    style={{
                        width: `300px`,
                        margin: `auto`
                    }}
                >
                    <div>
                        <input
                            style={inputStyles}
                            placeholder="Username"
                            type="text"
                            value={username}
                            onChange={handleNameChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            style={inputStyles}
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            style={inputStyles}
                            placeholder="password"
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <input style={{
                        width: 100,
                        marginTop: 10,
                        backgroundColor: `#fb7454`,
                        color: `white`,
                        border: `none`,
                        borderRadius: 5,
                        cursor: `pointer`
                    }} type="submit"/>
                </form>
            </div>
        </Layout>
    )
}

export default Login