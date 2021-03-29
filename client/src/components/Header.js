import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
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
    font-size: 8rem;
    color: #80ffdb;
    min-height: 10vh;
    max-width: 100vw;
    background-color: #fffafb;
    .erick-box-1 {

        margin-left: .25rem;
        opacity: 1;
        color: black;
        position: fixed;
        max-width: 100%;
        max-height: 100%;
        z-index: 1;
    }
    .erick-box-2 {
        color: #b5179e;
        opacity: .75;
        position: fixed; /* Sit on top of the page content */
        width: 100%; /* Full width (cover the whole page) */
        height: 99%; /* Full height (cover the whole page) */
        top: 5;
        left: 0;
        right: 5;
        bottom: 0;
        z-index: 2; 
    }

`

export default function Header() {
    return (
        <StyledHeader>
            <div className="erick-box-1">Erick</div>
        </StyledHeader>
    )
}
