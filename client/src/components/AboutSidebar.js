import React from 'react'
import styled from 'styled-components'
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const StyledSidebar = styled.div`
    margin-left: 2rem;
    /* background-color: red; */
    min-height: inherit;
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-weight: 200;
    
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
        
        #city-state {
            font-size: .75rem;
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
                <TwitterIcon />
                <GitHubIcon />
                <LinkedInIcon />
            </div>

            <div className="location">
                <LocationOnIcon /> <span id="city-state">Atlanta, GA</span>
            </div>

        </StyledSidebar>
    )
}
