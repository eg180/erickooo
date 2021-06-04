import React from 'react'
import styled from 'styled-components';
import GetAppIcon from '@material-ui/icons/GetApp';

const StyledResumeDiv = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fdefe6;
    border-radius: 20px;
    /* justify-content: space-between; */
    /* margin-left: 5rem; */
    
    min-width: 70vw;
    min-height: 60vh;
    font-size: 3rem;
    font-family: 'Roboto Mono', monospace;
    padding: 1rem;
    box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
                0 2px 2px rgba(0,0,0,0.11), 
                0 4px 4px rgba(0,0,0,0.11), 
                0 6px 8px rgba(0,0,0,0.11),
                0 8px 16px rgba(0,0,0,0.11);
  
`

function Resume() {
    return (
        <>
        <StyledResumeDiv>
            <div>download<a href="https://drive.google.com/file/d/18muTWEiOhGPRjRI7734mtCxsLmVUIOee/view?usp=sharing" rel="noreferrer" target="_blank"><GetAppIcon /></a>
                
    
            
            
            
            
            
            </div>

            
            
        </StyledResumeDiv>
        </>
    )
}

export default Resume
