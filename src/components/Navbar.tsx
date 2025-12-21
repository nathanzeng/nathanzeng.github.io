import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import RiceBowl from '../assets/rice_favicon/android-chrome-512x512.png';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

const DesktopNavbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path
      ? 'bg-primary-light p-3 rounded'
      : 'p-3 rounded hover:text-font-primary-dark transition-colors';

  return (
    <div className="flex items-center">
      <Link to="/">
        <img src={RiceBowl} alt="home button" className="w-10 h-auto" />
      </Link>

      <nav className="flex gap-5 p-4 justify-center flex-1">
        <Link to="/" className={isActive('/')}>
          Home
        </Link>
        <Link to="/games" className={isActive('/games')}>
          Games
        </Link>
        <Link
          to="/compoundInterestCalculator"
          className={isActive('/compoundInterestCalculator')}
        >
          Calculator
        </Link>
      </nav>
    </div>
  );
};

function MobileNavbar() {
  const [visible, setVisible] = useState<boolean>(false);
  const isActive = (path: string) =>
    location.pathname === path
      ? 'bg-gray-300 p-3 rounded'
      : 'p-3 rounded hover:text-font-primary-dark transition-colors';

  return (
    <div className="card flex justify-content-center">
      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <nav className="flex flex-col gap-5 p-4 justify-center">
          <Link
            to="/"
            className={isActive('/')}
            onClick={() => setVisible(false)}
          >
            Home
          </Link>
          <Link
            to="/games"
            className={isActive('/games')}
            onClick={() => setVisible(false)}
          >
            Games
          </Link>
          <Link
            to="/compoundInterestCalculator"
            className={isActive('/compoundInterestCalculator')}
            onClick={() => setVisible(false)}
          >
            Calculator
          </Link>
        </nav>
      </Sidebar>

      {/* TODO: I want this to not be blue */}
      {/* TODO: Alignment looks jank */}
      <Button rounded text icon="pi pi-bars" onClick={() => setVisible(true)} />
      <Link to="/">
        <img src={RiceBowl} alt="home button" className="w-10 h-10" />
      </Link>
    </div>
  );
}

function Navbar() {
  return (
    <>
      <div className="hidden md:block">
        <DesktopNavbar />
      </div>
      <div className="md:hidden">
        <MobileNavbar />
      </div>
    </>
  );
}

export default Navbar;
