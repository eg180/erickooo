import React from 'react'
import AboutSidebar from './AboutSidebar';
import styled from 'styled-components';

const StyledAbout = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #f8edeb;
    border-radius: 20px;
    justify-content: space-between;
    margin-left: 5rem;
    min-height: inherit;
    min-width: 80vw;
    font-size: 3rem;

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
            <div><h1>About Me</h1>
            <p>Content here</p>
            
            
            
            
            </div>

            
            
        </StyledAbout>
        </>
    )
}

export default About
