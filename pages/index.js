import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image';
import Button from '@/components/Button';
import logo from '../public/Roofing-logo.png';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTransition(true);
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Head>
        <title>Roofing</title>
      </Head>
      <section className="hero section">
        <div className={`container content ${transition && 'show'}`}>
          <Image className="logo" src={logo} />
          <h1>Fino Exterior</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            aliquid ullam officiis aliquam ipsam? Consequuntur harum incidunt
            aliquid possimus aperiam accusamus et est impedit vel reprehenderit,
            doloribus aspernatur, velit corrupti! Minus quia in magnam
            voluptates!
          </p>
          <Link href="/contact">
            <Button>Get In Touch</Button>
          </Link>
        </div>
        <div className="custom-shape-divider-bottom-1673895580">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <section className="section-two">
        <h1>Section</h1>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .hero {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
      url(/hero-image.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${props => props.theme.colors.white};
    z-index: 10;

    .container {
      width: 80%;
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 0.5em;
      opacity: 0;
      transform: translateY(-2em);

      .logo {
        width: 100%;
        height: 100%;
      }

      Button {
        align-self: flex-start;
        background: ${props => props.theme.colors.orange};
        color: ${props => props.theme.colors.white};
        text-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5);
        /* border: 2px solid white; */

        &:hover {
          background: ${props => props.theme.colors.black};
          color: ${props => props.theme.colors.white};
          transition: 200ms;
        }
      }

      h1 {
        font-size: 3.3rem;
        text-align: left;
        line-height: 1.2;
        font-weight: 700;
      }
    }

    .show {
      opacity: 1;
      transition: 1s;
      transform: translateY(0);
    }

    .custom-shape-divider-bottom-1673895580 {
      display: none;
    }
  }

  .section-two {
    height: 100vh;
    background: ${props => props.theme.colors.orange};
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 5rem;
      color: ${props => props.theme.colors.white};
    }
  }

  @media screen and (min-width: 600px) {
    .hero .content .logo {
      width: 50%;
    }
  }

  @media screen and (min-width: 860px) {
    .hero {
      background-attachment: fixed;

      .container {
        width: unset;
      }

      .content {
        align-items: unset;
        text-align: left;
        gap: 1.5em;

        h1 {
          font-size: 6rem;
        }

        .logo {
          width: 17.5em;
          height: 100%;
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .hero {
      .content {
        p {
          width: 70%;
        }
      }
      .custom-shape-divider-bottom-1673895580 {
        display: unset;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        transform: rotate(180deg);
      }

      .custom-shape-divider-bottom-1673895580 svg {
        position: relative;
        display: block;
        width: calc(161% + 1.3px);
        height: 130px;
        transform: rotateY(180deg);
      }

      .custom-shape-divider-bottom-1673895580 .shape-fill {
        fill: ${props => props.theme.colors.orange};
      }
    }
  }
`;
