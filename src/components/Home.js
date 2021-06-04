import React from 'react'
import styled from 'styled-components';

const StyledHomeDiv = styled.div`
    img {
        max-width: 100%;
        height: auto;
  
    }
    display: flex;
    flex-direction: row;
    background-color: #fdefe6;
    border-radius: 20px;
    justify-content: space-between;
    /* margin-left: 9rem; */
    min-height: inherit;
    min-width: inherit;
    font-size: 3rem;
    font-family: 'Roboto Mono', monospace;
    padding: 1rem;
    box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
                0 2px 2px rgba(0,0,0,0.11), 
                0 4px 4px rgba(0,0,0,0.11), 
                0 6px 8px rgba(0,0,0,0.11),
                0 8px 16px rgba(0,0,0,0.11);    

`


function Home() {
    return (
        <StyledHomeDiv>
            <img src="images/ErickGithubBanner.jpg" alt="retro desktop" />
        </StyledHomeDiv>
    )
}

export default Home

