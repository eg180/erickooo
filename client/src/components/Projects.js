import React from 'react'
import styled from 'styled-components';


import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';

const StyledAbout = styled.div`
    min-width: inherit;
    min-width: inherit;
    background-color: #fdefe6;
    

    p {
        font-size: 1rem;
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
        color: #118ab2;
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
    .featured {
        h1 {
            font-size: 2rem;
        }
        /* min-width: inherit; */
        div {
            min-width: 30vw;
        }
        display: flex;
        flex-direction: column;
        margin: 2rem;
        word-wrap: break-word;
        a {
            word-wrap: break-word;
        }
        > div {
            margin-bottom: 3rem;
        }

        }
        #featured-projects {
            transform: skew(0.03turn, -9deg);
            color: #14213d;
            border-radius: 5px;
            width: 10rem;
            height: 7rem;
            background-color: #fef6c9;
            padding: 1rem 0 3rem 1rem;
            box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
                        0 2px 2px rgba(0,0,0,0.11), 
                        0 4px 4px rgba(0,0,0,0.11), 
                        0 6px 8px rgba(0,0,0,0.11),
                        0 8px 16px rgba(0,0,0,0.11);
        }
        

    }
`

function Projects() {
    return (
        <>
        <StyledAbout>
            <div className="featured"><h1 id="featured-projects">My Featured Projects 🔥🧑🏻‍💻🔥</h1>
                <div className="featured_title"><h2>Cash-out Poker</h2> 
                    <p className="status">Status: Deployed - Adding final touches before launch 🚀</p>
                    <p><a href="https://vimeo.com/567702592" rel="noreferrer" target="_blank">See trailer <OndemandVideoIcon /></a></p>
                    <p><a href="https://cashoutapp.herokuapp.com" rel="noreferrer" target="_blank">https://cashoutapp.herokuapp.com <OpenInNewIcon /></a></p>
                    <p className="featured_role">Role: Front end / Back End / Design / Concept </p>
                    <p className="featured_tech">Tech Stack: React | Redux | Node | Express.js | JWT | PostgreSQL | Knex.js |Styled-Components | Axios</p>
                </div>
                <div className="featured_title"><h2>filmJot</h2>
                    <p className="status">Status: Deployed - but in development 🚜 </p>
                    <p><a href="https://filmjot.herokuapp.com" rel="noreferrer" target="_blank">https://filmjot.herokuapp.com <OpenInNewIcon /></a></p>
                    <p className="featured_role">Role: Front end / Back End / Design / Concept </p>
                    <p className="featured_tech">Tech Stack: React | Node | Express.js | PostgreSQL | Bcrypt.js | Axios | JwT  | Knex.js | Bootstrap | Context API</p>
                </div>
    
            
            
            
            
            
            </div>

            
            
        </StyledAbout>
        </>
    )
}

export default Projects
