import React from 'react'
import styled from 'styled-components';

import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const StyledAbout = styled.div`
    min-width: inherit;
    max-width: inherit;
    

    p {
        font-size: 1.3rem;
        padding: .5rem;
    }
    h1 {
        margin-bottom: 2rem;
    }
    h2 {
        font-size: 1.75rem;
    }
    a {
        /* padding-right: 1rem; */
        /* color: #312244; */
        color: #bee1e6;
        text-decoration: none;
        font-size: 1rem;
        :active {
            color: #5390d9;
            background-color: grey;
        }
        :hover {

        }
    }
    display: flex;
    flex-direction: row;
    background-color: #fdefe6;
    border-radius: 20px;
    justify-content: space-between;
    /* margin-left: 5rem; */
    min-height: inherit;
    max-width: 80vw;
    font-size: 3rem;
    font-family: 'Roboto Mono', monospace;
    padding: 1rem;
    box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
                0 2px 2px rgba(0,0,0,0.11), 
                0 4px 4px rgba(0,0,0,0.11), 
                0 6px 8px rgba(0,0,0,0.11),
                0 8px 16px rgba(0,0,0,0.11);
    .featured div {
        
        max-width: 40vw;
        min-width: inherit;
        display: flex;
        flex-wrap: wrap;
        background-color: #fbfefb;
        margin: 2rem;
        word-wrap: break-word;
        a {
            word-wrap: break-word;
        }
        }

    }
`

function Projects() {
    return (
        <>
        <StyledAbout>
            <div className="featured"><h1>Featured Projects</h1>
                <div className="featured_title"><h2>Cash-out Poker</h2> 
                    <p><a href="https://cashoutpokerapp.herokuapp.com" rel="noreferrer" target="_blank">https://cashoutpokerapp.herokuapp.com <OpenInNewIcon /></a></p>
                    <p className="featured_role">Role: Front end / Back End / Design / Concept </p>
                    <p className="featured_tech">Tech Stack: HTML | React | Node | Express.js | Styled-Components | PostgreSQL | Knex.js</p>
                </div>
                <div className="featured_title"><h2>filmJot</h2>
                    <p><a href="https://filmjot.herokuapp.com" rel="noreferrer" target="_blank">https://filmjot.herokuapp.com <OpenInNewIcon /></a></p>
                    <p className="featured_role">Role: Front end / Back End / Design / Concept </p>
                    <p className="featured_tech">Tech Stack: HTML | React | Node | Express.js | Styled-Components | PostgreSQL | Knex.js | Material-UI</p>
                </div>
    
            
            
            
            
            
            </div>

            
            
        </StyledAbout>
        </>
    )
}

export default Projects
