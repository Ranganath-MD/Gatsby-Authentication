import { Link } from "gatsby"
import React from "react"
import { logout, isLoggedIn } from "../services/auth"

const Header = () => {
  return (
    <div
      style={{
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `baseline`,

      }}>

      {/* Brand name */}
      <h2
        style={{
          color: `#FB7454`,
          marginTop: `15px`,
          fontSize: `18px`,
          fontWeight: `bold`,
          textTransform: `uppercase`,
        }}>Fun Fun gatsby</h2>

      {/* Nav links */}
      <div
        style={{
          display: "flex",
          fontSize: `18px`,
          fontWeight: `bold`,
          textTransform: `uppercase`,
          color: `#5B4B92`
        }}>
        <Link
          to="/"
          activeStyle={{
            color: `#FB7454`
          }}
          style={{
            marginRight: `15px`,
            textDecoration: `none`
          }}
        >Home</Link>
        {
          isLoggedIn() ?
            <div>
              <Link
                to="/app/dashboard"
                activeStyle={{
                  color: `#FB7454`
                }}
                style={{
                  marginRight: `15px`,
                  textDecoration: `none`
                }}>Dashboard</Link>
              <Link
                to="/app/login"
                onClick={logout}
                activeStyle={{
                  color: `#FB7454`
                }}
                style={{
                  marginRight: `15px`,
                  textDecoration: `none`
                }}>Logout</Link>
            </div> :
            <div>
              <Link
                to="/app/login"
                activeStyle={{
                  color: `#FB7454`
                }}
                style={{
                  marginRight: `15px`,
                  textDecoration: `none`
                }}>Login</Link>
            </div>
        }
      </div>
    </div>
  )
}

export default Header
