import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'


export default function Footer() {
  return (
    <StyledFooter>
        <div className="container content">
            <h3>Fino Exterior</h3>
        </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
    background: ${props => props.theme.colors.gray};
    color: ${props => props.theme.colors.white};
    display: flex;

    .content {
      padding: 2em;
      
      h3 {
        font-weight: 200;
        text-transform: uppercase;
      }
    }
`