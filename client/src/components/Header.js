import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    font-family: 'Abril Fatface', cursive;
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
    color: blue;
    min-height: 15vh;
    max-height: 10vh;
    max-width: 100vw;
    /* background-color: white; */
    .erick-box-1 {
        padding: 1rem;
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
        background-color: #f0efeb;
        background-color: white;
        padding: 1rem 1rem 0 1rem;
;
        font-size: 2rem;
        padding-left: 5rem;
        a {
            padding-right: 2rem;
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
    }

`

export default function Header() {
    return (
        <StyledHeader>
            <div className="erick-box-1">Erick Gonzalez</div>
            <nav>
                <Link to="/about">about</Link>
                <Link to="/blog">blog</Link>
                <Link to="/resume">resume</Link>
                <Link to="/about">portfolio</Link>

            </nav>

        </StyledHeader>
    )
}
