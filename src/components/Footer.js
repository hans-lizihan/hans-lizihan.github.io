import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>Hans's website {new Date().getFullYear()}</p>
        <p>Built with love with `bulma` and `gatsby.js`</p>
      </div>
    </footer>
  )
}

export default Footer
