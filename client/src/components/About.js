import React, { useState } from 'react'
import AboutSidebar from './AboutSidebar';
import AboutSidebarBack from './AboutSidebarBack';
import styled from 'styled-components';

import FlipCameraAndroidOutlinedIcon from '@material-ui/icons/FlipCameraAndroidOutlined';

const AboutContainer = styled.div`
    display: flex;
    justify-content: space-between;
    /* margin-left: 20rem; */
    /* padding-left: 20rem; */
    min-height: inherit;
`

const StyledAbout = styled.div`
        .about-sidebar {
        /* margin-right: 3rem; */
        /* margin-left: 5rem; */
    }
    display: flex;
    flex-direction: row;
    background-color: #fdefe6;
    border-radius: 20px;
    justify-content: center;
    margin-left: 3rem;
    margin-right: 3rem;
    min-height: inherit;
    /* min-width: inherit; */
    /* margin-right: 15rem; */
    font-size: 3rem;
    font-family: 'Roboto Mono', monospace;
         box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 6px 8px rgba(0,0,0,0.11),
              0 8px 16px rgba(0,0,0,0.11);

    h1 {
        margin-bottom: 2rem;
    }

    p {
        font-size: 1.3rem;
    }
    .back {
        p {
            font-size: .72rem;
        }
    }

    .about-me {
        min-width: 35vw;
        /* margin-left: 5rem; */
        padding-top: 3rem;
        /* padding-right: 10rem; */
        /* margin-right: 34rem; */
        div {
            /* margin-right: 25rem; */
        }

    }
`

function About() {
    const [showMore, setShowMore] = useState(false);

    const handleFlip = () => {
        setShowMore(!showMore)
    };


    return (
        <AboutContainer>
            <StyledAbout>
                {showMore === false
                ?
                <>
                    <AboutSidebar className="about-sidebar" handleFlip={handleFlip} />
                    <div className="about-me">
                    </div>
                </>
                :
                <>
                    <AboutSidebarBack className="about-sidebar" handleFlip={handleFlip} />
                    <div className="about-me">
                    </div>
                </>
                }


                
                
            </StyledAbout>
        </AboutContainer>
    )
}

export default About
