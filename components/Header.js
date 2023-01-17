import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';
import logo from '../public/Roofing-logo.png';
import Image from 'next/image';

export default function Header() {
  const [navState, setNavState] = useState(false);

  return (
    <StyledHeader>
      <div className="container">
        <Nav />
        <Link href="/">
          <Image src={logo} />
        </Link>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  background-color: ${props => props.theme.colors.gray};
  padding: 0.75em 0;
  position: unset;
  z-index: 10;

  .container {
    display: flex;
    justify-content: center;

    img {
      width: 5em;
      height: 100%;
    }
  }

  @media screen and (min-width: 860px) {
    padding: 0.5em 0;

    .container {
      justify-content: space-between;
      flex-direction: row-reverse;
      align-items: center;
    }
  

    @media screen and (min-width: 1200px) {
      img {
        width: 7em;
        height: 100%;
      }
    }
  }
`;
