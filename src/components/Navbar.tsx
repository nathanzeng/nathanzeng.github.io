import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import RiceBowl from '../assets/rice_favicon/android-chrome-512x512.png'

const Navbar: React.FC = () => {
  const location = useLocation()

  const isActive = (path: string) =>
    location.pathname === path
      ? 'bg-primary-light p-3 rounded'
      : 'p-3 rounded hover:text-font-primary-dark transition-colors'

  return (
    <div className='flex items-center'>
      <Link to="/"><img src={RiceBowl} alt="home button" className="w-10 h-auto" /></Link>
      <nav className='flex gap-5 p-4 justify-center flex-1'>
        <Link to="/" className={isActive('/')}>Home</Link>
        {/* <Link to="/projects" className={isActive('/projects')}>Projects</Link> */}
        <Link to="/about" className={isActive('/about')}>About</Link>
      </nav>
    </div>
    
  )
}

export default Navbar
