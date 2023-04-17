import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { useState } from 'react';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('');

  const links = [
    { name: 'GitHub User Page', path: '/' },
    { name: 'Graphs', path: '/graphs' },
  ];

  const handleNavLinkClick = (path: string) => {
    setActiveLink(path);
  };

  return (
    <nav className='container'>
      <ul>
        {links.map(({ name, path }) => (
          <li key={path}>
            <NavLink
              className={`${path === activeLink ? 'active' : ''}`}
              onClick={() => handleNavLinkClick(path)}
              to={path}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
