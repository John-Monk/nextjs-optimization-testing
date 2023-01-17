import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { route } = useRouter();

  useEffect(() => {
    setMenuOpen(false);
  }, [route])

  return (
    <Wrapper>
      <button
        className={`menu-btn ${menuOpen && 'open'}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="menu-btn__burger"></div>
      </button>
      <nav className={`nav ${menuOpen && 'show'}`}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 10;

  .menu-btn {
    all: unset;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    z-index: 2;
    margin: 1em;
  }

  .menu-btn__burger {
    width: 25px;
    height: 3px;
    background-color: white;
    transition: all 0.5s ease-in-out;
  }

  .menu-btn__burger::before,
  .menu-btn__burger::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 3px;
    background-color: white;
    transition: all 0.5s ease-in-out;
  }

  .menu-btn__burger::before {
    transform: translateY(-8px);
  }

  .menu-btn__burger::after {
    transform: translateY(8px);
  }

  /* hamburger menu animation */
  .menu-btn.open .menu-btn__burger {
    transform: translateX(-25px);
    background: transparent;
  }

  .menu-btn.open .menu-btn__burger::before {
    transform: rotate(45deg) translate(17.5px, -17.5px);
    background-color: black
  }

  .menu-btn.open .menu-btn__burger::after {
    transform: rotate(-45deg) translate(17.5px, 17.5px);
    background-color: black;
  }

  /* nav styling */
  nav {
    position: fixed;
    top: 0;
    right: 0;
    border-radius: 0 0 0 0.5em;
    padding: 5em 0;
    opacity: 10%;
    transform: translateX(12em);
    transition: all 0.35s ease-in-out;
    -webkit-box-shadow: 0px 0px 17px -4px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 17px -4px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 17px -4px rgba(0, 0, 0, 0.75);
    background-color: white;
    color: black;
    ul {
      display: flex;
      flex-direction: column;

      li {
        transform: translateY(-7em);
        transition: all 0.40s ease-in-out;
      }

      li a {
        padding: 0 2em;
        flex: 1;
        font-size: 1.2rem;
      }
    }
  }

  .show {
    opacity: 100%;
    transform: translate(0, 0);
    transition: all 0.35s ease-in-out;

    li {
      transform: translate(0);
      transition: all 0.40s ease-in-out;
    }
  }

  @media screen and (min-width: 860px){
    .menu-btn {
      display: none;
    }

    nav {
      transform: unset;
      background-color: unset;
      opacity: unset;
      margin: unset;
      padding: unset;
      position: unset;
      box-shadow: unset;
      color: white;

      ul {
        flex-direction: row;

        li {
          transform: unset;

          a {
            font-size: 1rem;

            &:hover {
              color: gray;
              transition: 200ms;
            }
          }
        }
      }
    }
  }
`;

export default Nav;
