import React from 'react'
import AboutSidebar from './AboutSidebar';
import styled from 'styled-components';

const AboutContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* min-width: 95vw; */
    .about-sidebar {
        padding-right: 3rem;
    }
`

const StyledAbout = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fdefe6;
    border-radius: 20px;
    justify-content: space-between;
    /* margin-left: 4rem; */
    min-height: inherit;
    min-width: inherit;
    margin-left: 6rem;
    margin-right: 3rem;
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
    .about-me {
        min-width: 65vw;
        p {
            margin: 2rem;
        }
    }
`

function About() {
    return (
        <AboutContainer>
            <StyledAbout>
                <AboutSidebar className="about-sidebar" />
                <div className="about-me">
                    <h1>About Me</h1>
                    <p>Hello, I'm Erick! I'm a certified full stack software engineer with an interest in remote roles or on-site in Tours, France where I will be living soon.</p>
                    
                    <p>I  am open to remote roles or a role on site in Tours, France.</p>
                
                
                
                
                
                </div>

                
                
            </StyledAbout>
        </AboutContainer>
    )
}

export default About
