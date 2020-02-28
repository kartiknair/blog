import React from "react"
import { Link } from "gatsby"
import Toggle from "./themeToggle"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          margin: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
            fontSize: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3 style={{ margin: 0 }}>
        <Link to={`/`}>Go back home</Link>
      </h3>
    )
  }
  return (
    <div className="grotesk">
      <div className="parent">
        <header
          style={{
            display: `flex`,
            alignItems: `center`,
            margin: `2% 0`,
          }}
        >
          {header}
          <Toggle />
        </header>

        <main>{children}</main>
        <footer>
          <p>
            © {new Date().getFullYear()}{" "}
            <a href="https://kartikn.me">Kartik Nair</a>, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a> &{" "}
            <a href="https://grotesk.now.sh">Grotesk</a>
          </p>
        </footer>
      </div>
    </div>
  )
}

export default Layout
