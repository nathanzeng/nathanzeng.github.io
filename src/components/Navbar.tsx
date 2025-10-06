import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar: React.FC = () => {
  const location = useLocation()

  const isActive = (path: string) =>
    location.pathname === path
      ? 'bg-primary-light p-3 rounded'
      : 'p-3 rounded hover:text-font-primary-dark transition-colors'

  return (
    <nav className='flex gap-5 p-4 justify-center'>
      <Link to="/" className={isActive('/')}>Home</Link>
      {/* <Link to="/projects" className={isActive('/projects')}>Projects</Link> */}
      <Link to="/about" className={isActive('/about')}>About</Link>
    </nav>
  )
}

export default Navbar
