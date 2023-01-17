import React from 'react';
import styled from 'styled-components';
import Button from './Button';

export default function Form() {
  return (
    <StyledForm>
      <ul>
        <li>
          <label htmlFor="first-name">Name</label>
          <input id="first-name" type="text" />
        </li>
        <li>
          <label htmlFor="email">E-Mail</label>
          <input id="email" type="email" />
        </li>
        <li>
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" type="phone" />
        </li>
        <li>
          <label htmlFor="comment">Message</label>
          <textarea id="comment" type="text" />
        </li>
      </ul>
      <Button>Submit</Button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 20em;

  ul {
    display: flex;
    flex-direction: column;

    li {
        display: flex;
        flex-direction: column;
        margin: 1.5em 0;
    }
  }

  label {
    font-weight: 500;
  }

  input, textarea{
    all: unset;
    border-bottom: 2px solid black;
    border-radius: 0.25em 0.25em 0 0;

    &:focus {
      background-color: rgba(183,183,183,0.4);
      transition: 200ms;
    }
  }

  Button {
    background: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
    letter-spacing: 0.1em;

    &:hover {
      background: ${props => props.theme.colors.orange};
    }
  }
`;
