import React from 'react'
import AboutSidebar from './AboutSidebar';
import styled from 'styled-components';

const StyledAbout = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fdefe6;
    border-radius: 20px;
    justify-content: space-between;
    /* margin-left: 4rem; */
    min-height: inherit;
    min-width: 78vw;
    font-size: 3rem;
    font-family: 'Roboto Mono', monospace;
         box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 6px 8px rgba(0,0,0,0.11),
              0 8px 16px rgba(0,0,0,0.11);

    h1 {
        margin-bottom: 2rem;
    }

    p {
        font-size: 1.3rem;
    }

    .about-sidebar {
        margin-right: 3rem;
    }
`

function About() {
    return (
        <>
        <AboutSidebar className="about-sidebar" />
        <StyledAbout>
            <div>
                <h1>About Me</h1>
            
            
            
            
            
            
            </div>

            
            
        </StyledAbout>
        </>
    )
}

export default About
