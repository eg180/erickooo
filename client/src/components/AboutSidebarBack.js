import React from 'react'
import styled from 'styled-components'
import FlipCameraAndroidOutlinedIcon from '@material-ui/icons/FlipCameraAndroidOutlined';



const StyledSidebar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* overflow-y: scroll; */
    background-color: white;
    padding: 2rem;
    margin-top: 2rem;
    margin-left: 9rem;
    margin-bottom: 2rem;
    margin-right: 1rem;
    border-radius: 20px;
    max-height: 70vh;
    max-width: 15vw;
    min-width: 10rem;
    min-height: inherit;
    /* display: flex;
    flex-wrap: wrap; */

   #flip {
       margin-top: 2rem;
       display: flex;
       align-self: flex-end;
       color: grey;
       cursor: pointer;
   }
   p {
       font-size: .80rem;
   }

`



export default function AboutSidebarBack(props) {
    const { handleFlip } = props;





    return (
        <StyledSidebar>
            <p>👨🏻‍💻 I enjoy creating fun and (sometimes) useful things with code and thinking about how to solve problems with technology. </p>
            <p>🤔 There's been a lot of trial-and-error in determining what I want to be 'when I grow up'. I studied economics, became interested in data analytics, and along the way, I found my love of writing instructions for computers to follow to make neat things. The cool thing is, I can create tools for those other interests.</p>
            <p>👨🏻‍🏫 When I was a French teacher, I used technology constantly (for teaching, and for grading), and I always wanted to create something of my own for that. I currently own lesubjonctif.com. My plan is to create the tools I wish existed when I started learning French. </p>
            <p>🍑 Currently, I'm in Atlanta, Georgia, but I will soon be living in Tours, France 🇫🇷. I don't know that I needed more coffee, but okay.</p>
            <FlipCameraAndroidOutlinedIcon id="flip" onClick={handleFlip} />
        </StyledSidebar>
    )
}
