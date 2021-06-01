import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledHeader = styled.header`
    a {
        text-decoration: none;
    }
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    font-family: 'Abril Fatface', cursive;
    font-family: 'Roboto Mono', monospace;
    /* font-family: 'Bebas Neue', cursive; */
    /* font-family: 'Bungee Outline', cursive; */
    /* font-family: 'Bungee Shade', cursive; */
    /* font-family: 'Codystar', cursive; */
    /* font-family: 'Comfortaa', cursive; */
    /* font-family: 'Fascinate', cursive; */
    /* font-family: 'Fredericka the Great', cursive; */
    /* font-family: 'Modak', cursive; */
    /* font-family: 'Monoton', cursive; */
    /* font-family: 'Patua One', cursive; */
    /* font-family: 'Playball', cursive; */
    /* font-family: 'Righteous', cursive; */
    font-size: 5rem;
    /* color: blue; */
    min-height: 15vh;
    max-height: 10vh;
    max-width: 100vw;
    /* background-color: white; */
    .erick-box-1 {
        margin-top: 3rem;
        
        /* margin-left: .25rem; */
        opacity: 1;
        color: #312244;
        /* position: fixed; */
        max-width: 100%;
        max-height: 100%;
        z-index: 1;
    }
    .erick-box-2 {
        color: pink;
        opacity: .75;
        /* position: fixed; */

        top: 5;
        left: 0;
        right: 5;
        bottom: 0;
        z-index: 2; 
    }

    nav {
        display: flex;
        padding: 1rem 0rem 0rem 1rem;
        min-height: 5vh;
        font-size: 2rem;
        padding-left: 5rem;
        a {
            /* padding-right: 1rem; */
            /* color: #312244; */
            color: #bee1e6;
            text-decoration: none;
            :active {
                color: #5390d9;
                background-color: grey;
            }
            :hover {

            }
        }
            .link-tab {
                display: flex;
                justify-content: flex-start;
                border-radius: 15px 50px 0px 0px;
                background-color: black;
                padding-right: .5rem;
                background-color: #fdefe6;
                /* padding-bottom: 3.5rem; */
                margin-right: 2rem;
                padding-left: 2rem;
                padding-right: 3rem;
                padding-top: .5rem;
                padding-bottom: 2rem;
                .link {
                    /* display: flex;
                    flex-direction: column;
                    justify-content: center; */
                    /* margin-left: 1rem; */
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: white;
                    /* border-radius: 10px; */
                    font-size: 2rem;
                }

            }

        div {

        }
}

`

export default function Header() {
    return (
        <StyledHeader>
            <Link to="/"><div className="erick-box-1">Erick Gonzalez</div></Link>
            <nav>
                <div className="link-tab">
                    <span className="link"><Link to="/about">about</Link></span>               
                </div>
                <div className="link-tab">
                    <span className="link"><Link to="/resume">resume</Link></span>                
                </div>
                <div className="link-tab">
                    <span className="link"><Link to="/projects">projects</Link></span>                
                </div>




            </nav>

        </StyledHeader>
    )
}
