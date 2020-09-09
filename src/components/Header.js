import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import logo from '../assets/logo.png'

const Header = ({ siteTitle }) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img
              src={logo}
              alt="logo"
              height="28"
              style={{ marginRight: 16 }}
            />
            <b>{siteTitle}</b>
          </Link>
          <a
            href="/"
            role="button"
            className={`navbar-burger ${isOpen ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={e => {
              e.preventDefault()
              setOpen(!isOpen)
            }}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div className={`navbar-menu is-dark ${isOpen ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <a href="/resume.pdf" className="navbar-item">
              Resume
            </a>
            <Link to="/blogs" className="navbar-item">
              Blogs
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
