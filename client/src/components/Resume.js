import React from 'react'
import styled from 'styled-components';

import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const StyledAbout = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fdefe6;
    border-radius: 20px;
    justify-content: space-between;
    /* margin-left: 5rem; */
    min-height: inherit;
    min-width: 95vw;
    font-size: 3rem;
    font-family: 'Roboto Mono', monospace;
    padding: 1rem;
    box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
                0 2px 2px rgba(0,0,0,0.11), 
                0 4px 4px rgba(0,0,0,0.11), 
                0 6px 8px rgba(0,0,0,0.11),
                0 8px 16px rgba(0,0,0,0.11);
    div {
        p {
            font-size: 3rem;
            a {
                color: #118ab2;
                margin-left: 5rem;
            }
        }
    }
`

function Resume() {
    return (
        <>
        <StyledAbout>
            <div><p><a href="https://docs.google.com/document/d/1lYnecWR6GRiS5kthmbvAYSmxUNxVCbk-rGCkAlNwvgU/edit?usp=sharing" rel="noreferrer" target="_blank" alt="link to resume on Google Drive"><OpenInNewIcon /></a></p>
            <p></p>
    
            
            
            
            
            
            </div>

            
            
        </StyledAbout>
        </>
    )
}

export default Resume
