import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

export default class Toggle extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div
            className={`cont`}
            role="button"
            onClick={() => {
              toggleTheme(theme === "light" ? "dark" : "light")
            }}
          >
            <div className="switch"></div>
          </div>
        )}
      </ThemeToggler>
    )
  }
}
