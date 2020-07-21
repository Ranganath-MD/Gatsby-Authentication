
import React from "react"

import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <div style={{
        minHeight: `93vh`,
        maxWidth: `768px`,
        margin: `auto`,
        padding: `20px`
      }}>
        <Header />
        {children}
      </div>
      <footer style={{
        textAlign: `center`
      }}>
        <h4>Authentication and Private Routes <span role="img" aria-label="ring">💫</span></h4>
      </footer>
    </>
  )
}

export default Layout
