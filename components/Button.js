import React from 'react';
import styled from 'styled-components';

export default function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

const StyledButton = styled.button`
    all: unset;
    cursor: pointer;
    padding: 0.75em;
    border-radius: 0.35em;
    font-weight: 500;
    text-transform: uppercase;
    transition: 200ms;
    align-self: flex-start;
`;
