import React from 'react'
import styled from 'styled-components';

const StyledAbout = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fdefe6;
    border-radius: 20px;
    justify-content: space-between;
    min-width: 70vw;
    min-height: 55vh;
    font-size: 3rem;
    li {
        padding: 3rem;
    }
    font-family: 'Roboto Mono', monospace;
    padding: 1rem;
    box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
                0 2px 2px rgba(0,0,0,0.11), 
                0 4px 4px rgba(0,0,0,0.11), 
                0 6px 8px rgba(0,0,0,0.11),
                0 8px 16px rgba(0,0,0,0.11);
`

function Projects() {
    return (
        <>
        <StyledAbout>
            <div><ul>Featured Projects</ul>
                <li><a href="https://cashoutapp.herokuapp.com" rel="noreferrer" target="_blank">CashOut Poker</a></li>
                    <p>Role: front end/back end</p>
                    <p>Technologies: HTML | React | Node | Express.js | Styled-Components | PostgreSQL | Knex.js</p>
                <li><a href="https://filmjot.herokuapp.com" rel="noreferrer" target="_blank">filmJot</a></li>
                    <p>Role: front end/back end</p>
                    <p>Technologies: HTML | React | Node | Express.js | Styled-Components | PostgreSQL | Knex.js</p>
                    
            
            
            
            
            
            </div>

            
            
        </StyledAbout>
        </>
    )
}

export default Projects
