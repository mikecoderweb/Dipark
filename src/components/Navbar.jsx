import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background: ${props => props.transparent ? 'transparent' : 'white'};
  box-shadow: ${props => props.transparent ? 'none' : '0 2px 4px rgba(0,0,0,0.1)'};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  color: ${props => props.light ? 'white' : '#1f2937'};
`;

const Logo = styled.span`
  background: #2563eb;
  color: white;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-right: 0.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.light ? 'white' : '#1f2937'};
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #2563eb;
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${props => props.light ? 'white' : '#1f2937'};

  @media (max-width: 768px) {
    display: block;
  }
`;

const CurrentTime = styled.div`
  margin-left: 2rem;
  font-weight: 500;
  color: ${props => props.light ? 'white' : '#6b7280'};
`;

const Navbar = ({ transparent = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('uz-UZ'));

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('uz-UZ'));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Nav transparent={transparent}>
      <Brand to="/" light={transparent}>
        <Logo>D</Logo>
        <span>DiPark</span>
      </Brand>
      <NavLinks isOpen={isOpen}>
        <NavLink to="/" light={transparent}>Asosiy</NavLink>
        <NavLink to="/web-design" light={transparent}>Kurslar</NavLink>
        <NavLink to="/about" light={transparent}>Bizning Jamoa</NavLink>
        <NavLink to="/contact" light={transparent}>Bog'lanish</NavLink>
        {/* <CurrentTime light={transparent}>{currentTime}</CurrentTime> */}
      </NavLinks>
      <MenuToggle 
        onClick={() => setIsOpen(!isOpen)}
        light={transparent}
      >
        ☰
      </MenuToggle>
    </Nav>
  );
};

export default Navbar;
