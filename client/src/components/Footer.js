import React from 'react';
import styled from 'styled-components';


const StyledFooter = styled.footer`
    margin-top: 3rem;
    color: grey;
    opacity: .25;
    padding: 2rem;
`

function Footer() {
    return (
        <StyledFooter>
            <span>©2021 erick gonzalez</span>
        </StyledFooter>
    )
}

export default Footer
