import React from 'react'
import styled from 'styled-components'
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import FlipCameraAndroidOutlinedIcon from '@material-ui/icons/FlipCameraAndroidOutlined';
import { RiReactjsFill } from 'react-icons/ri';
import { FaNode } from 'react-icons/fa';
import { SiPostgresql, SiAdobephotoshop } from 'react-icons/si';


const StyledSidebar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
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
    /* display: flex;
    flex-wrap: wrap; */
   #flip {
       margin-top: 2rem;
       display: flex;
       align-self: flex-end;
       color: grey;
       cursor: pointer;
   }

    a {
        color: #f08080;
    }
    /* background-color: red; */
    min-height: inherit;
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-weight: 200;
    font-family: 'Roboto Mono', monospace;
    
    #name {
        font-weight: 300;
        font-size: 1.4rem;
        padding-top: 2rem;
    }

    .occupation {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        background-color: #ebebeb;

        padding: .50rem;
        border-radius: 10px;
        font-size: .75rem;
        p {
            font-size: .65rem;
        }
    }
    #tags {
        div {
            margin-left: .25rem;
        }
        display: flex;
        flex-wrap: wrap;
    }
    .social {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 2rem;
        a {
            padding-right: 2rem;
        }

    }
    #skills {
        display: flex;
        justify-content: space-around;
        margin-top: 1rem;
        color: grey;
        svg {
            padding-right: 1rem;
        }
        
    }

    .location {
        margin-top: 2rem;
        display: flex;
        justify-content: flex-start;
        align-self: flex-start;

        #marker {
            margin-right: .25rem;
            color: #0081a7;
            align-self: baseline;
        }
        
        #city-state {
            font-size: .75rem;
            align-self: baseline;
        }
        
    }
    .email {
        margin-top: 1rem;
        display: flex;
        align-self: flex-start;
        align-items: baseline;


        #envelope {
            margin-right: .25rem;
            color: #0081a7;
        }

      
        #email-address {
            font-size: .75rem;
            vertical-align: baseline;
        }
        
    }
.about-me {
    max-width: 2rem;

    overflow-wrap: normal;
    p {
        font-size: 1rem;
        max-width: 12rem;
        #flip p {
            font-size: 25rem;
        }

    }

}

    img {
        border-radius: 20px;
        max-width: 100%;
    }
`

export default function AboutSidebar(props) {
    const { handleFlip } = props;

    return (
        <StyledSidebar>
            <img src="images/laserbackground_erick.jpeg" alt="erick-avatar" />
            <div>
                <p id="name">Erick</p>
                <p>Gonzalez</p>
            </div>
            <div className="social">
                <a href="https://twitter.com/itserick" rel="noreferrer" target="_blank"><TwitterIcon id="twitter" /></a>
                <a href="https://github.com/eg180" rel="noreferrer" target="_blank"><GitHubIcon /></a>
                <a href="https://linkedin.com/in/mrerickgonzalez" rel="noreferrer" target="_blank"><LinkedInIcon /></a>
            </div>
            <div id="tags">
                <div className="occupation">
                    <p>Software Engineer</p>
                </div>
                <div className="occupation">
                    <p>Front End</p>
                </div>
                <div className="occupation">
                    <p>Back End</p>
                </div>
                <div className="occupation">
                    <p>Web Developer</p>
                </div>
                <div className="occupation">
                    <p>Full Stack</p>
                </div>
            </div>
            <div id="skills"><RiReactjsFill /><FaNode /><SiPostgresql /><SiAdobephotoshop />
            </div>

            <div className="location">
                <LocationOnIcon id="marker" /> <span id="city-state">Tours, France</span>
            </div>
            <div className="email">
                <EmailTwoToneIcon id="envelope" /> <span id="email-address">ericksinbox@gmail.com</span>
            </div>
        <FlipCameraAndroidOutlinedIcon onClick={handleFlip} id="flip" />
        </StyledSidebar>
    )
}
