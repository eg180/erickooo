import React from 'react';
import styled from 'styled-components';


const StyledFooter = styled.footer`
    background-color: #0081a7;
    min-width: 25vw;
    padding: 2rem;
`

function Footer() {
    return (
        <StyledFooter>
            <span>Created & Designed by Me (the person who owns the site)</span>
        </StyledFooter>
    )
}

export default Footer
