import React from 'react'
import styled from 'styled-components'
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';

const StyledSidebar = styled.div`
    background-color: white;
    padding: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-radius: 20px;
    max-height: 70vh;
    overflow: hidden;

    a {
        color: #f08080;
    }
    margin-left: 2rem;
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

    #occupation {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        background-color: #ebebeb;

        padding: .50rem;
        border-radius: 10px;
        font-size: .75rem;
    }
    .social {
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;

    }

    .location {
        margin-top: 2rem;
        display: flex;
        align-items: baseline;

        #marker {
            margin-right: .25rem;
            color: #0081a7;
        }
        
        #city-state {
            font-size: .75rem;
        }
        
    }
    .email {
        margin-top: 1rem;
        display: flex;
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

    img {
        border-radius: 20px;
    }
`

export default function AboutSidebar() {
    return (
        <StyledSidebar>
            
            <img src="images/laserbackground_erick.jpeg" alt="erick-avatar" />
            <div>
                <p id="name">Erick</p>
                <p>Gonzalez</p>
            </div>

            <div id="occupation">
                <p>Software Engineer</p>
            </div>
    

            <div className="social">
                <a href="https://twitter.com/itserick" rel="noreferrer" target="_blank"><TwitterIcon id="twitter" /></a>
                <a href="https://github.com/eg180" rel="noreferrer" target="_blank"><GitHubIcon /></a>
                <a href="https://linkedin.com/in/mrerickgonzalez" rel="noreferrer" target="_blank"><LinkedInIcon /></a>
            </div>

            <div className="location">
                <LocationOnIcon id="marker" /> <span id="city-state">Atlanta, GA</span>
            </div>
            <div className="email">
                <EmailTwoToneIcon id="envelope" /> <span id="email-address">ericksinbox@gmail.com</span>
            </div>

        </StyledSidebar>
    )
}
