import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { getUser } from "../services/auth"

const Dashboard = () => {
    return (
        <Layout>
            <SEO title="Dashboard" />
            <div style={{
                textAlign: "center",
                marginTop: `3%`
            }}>
                <h1>Hi {getUser().username !== undefined ? getUser().username : `Dev`}</h1>
                <p>You are logged in as {getUser().email}</p>
            </div>
        </Layout>
    )
}

export default Dashboard
