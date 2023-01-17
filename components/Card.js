import React from 'react';
import styled from 'styled-components';

export default function Card({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

const StyledDiv = styled.div`
  padding: 3em;
  border-radius: 0.25em;
  background: ${(props) => props.theme.colors.white};
  -webkit-box-shadow: 0px 0px 17px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 17px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 17px -4px rgba(0, 0, 0, 0.75);
`;
