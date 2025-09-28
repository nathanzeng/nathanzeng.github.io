import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const navStyle: React.CSSProperties = {
  display: 'flex',
  gap: '1rem',
  padding: '1rem',
  borderBottom: '1px solid #ccc',
  backgroundColor: '#f8f8f8',
}

const activeStyle: React.CSSProperties = {
  fontWeight: 'bold',
  textDecoration: 'underline',
}

const Navbar: React.FC = () => {
  const location = useLocation()

  return (
    <nav style={navStyle}>
      <Link to="/" style={location.pathname === '/' ? activeStyle : {}}>Home</Link>
      <Link to="/projects" style={location.pathname === '/projects' ? activeStyle : {}}>Projects</Link>
      <Link to="/about" style={location.pathname === '/about' ? activeStyle : {}}>About</Link>
    </nav>
  )
}

export default Navbar
