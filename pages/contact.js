import React from 'react';
import styled from 'styled-components';
import Form from '@/components/Form';
import Card from '@/components/Card';
import { useEffect, useState } from 'react';

export default function contact({ className }) {
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTransition(true);
    }, 500);
  }, []);

  return (
    <Wrapper className={className}>
      <section className="section">
        <div className={`container ${transition && `show`}`}>
          <Card>
            <Form />
          </Card>
        </div>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .section {
    background: ${(props) => props.theme.colors.orange};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      font-size: 7rem;
      margin-top: 0.5em;
      color: white;
    }

    .container {
      transform: translateY(-2em);
      opacity: 0;
    }

    .show {
      opacity: 1;
      transition: 1s;
      transform: translateY(0);
    }

    .random {
      width: 100%;
      background: black;
      height: 2em;
      position: absolute;
      bottom: 0;
    }
  }
`;
