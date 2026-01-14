"use client";

import { styled } from "@linaria/react";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    toggleTheme();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Nav>
      <LeftSection>
        <NavLink href="/">
          <Razi>Razi</Razi>
        </NavLink>

        <NavList className={isMenuOpen ? "open" : ""}>
          <NavLink href="/notes">Writings</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/bio">Biography</NavLink>
          <NavLink href="/gallery">Gallery</NavLink>
        </NavList>
      </LeftSection>

      <RightSection>
        <DarkModeButton onClick={toggleDarkMode} aria-label="Toggle dark mode">
          {theme === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </DarkModeButton>

        <HamburgerButton onClick={toggleMenu} aria-label="Toggle menu">
          <span className={isMenuOpen ? "open" : ""} />
          <span className={isMenuOpen ? "open" : ""} />
          <span className={isMenuOpen ? "open" : ""} />
        </HamburgerButton>
      </RightSection>

      {isMenuOpen && <Overlay onClick={() => setIsMenuOpen(false)} />}
    </Nav>
  );
}

const Nav = styled.nav`
  --css-file: nav;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.25rem 1.25rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 0 20px var(--color-shadow);
  background-color: var(--color-background-secondary);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const Razi = styled.div`
  font-weight: bold;
  font-size: 1rem;
  padding-left: 4rem;
  padding-right: 2rem;

  @media (max-width: 768px) {
    padding-left: 0;
    padding-right: 0;
    font-size: 0.95rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 2.5rem;

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 70%;
    max-width: 300px;
    flex-direction: column;
    background-color: var(--color-background-secondary);
    padding: 5rem 2rem 2rem;
    gap: 1.5rem;
    box-shadow: -5px 0 20px var(--color-shadow-light);
    transition: right 0.3s ease-in-out, background-color 0.3s ease;
    z-index: 1001;

    &.open {
      right: 0;
    }
  }
`;

const NavLink = styled(Link)`
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0.5rem 0;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const DarkModeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  border-radius: 50%;
  transition: background-color 0.2s ease, color 0.3s ease;

  &:hover {
    background-color: var(--color-hover);
  }
`;

const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1002;

  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--color-text-secondary);
    border-radius: 2px;
    transition: all 0.3s ease;

    &.open:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    &.open:nth-child(2) {
      opacity: 0;
    }

    &.open:nth-child(3) {
      transform: rotate(-45deg) translate(6px, -6px);
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Overlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-overlay);
    z-index: 1000;
  }
`;

export default Navbar;
