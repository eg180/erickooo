import React from 'react'
import styled from 'styled-components';
// import 'antd/dist/antd.css';
// import { Carousel } from 'antd';
import About from './About';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';

import { 
    Route, 
    Switch } from 'react-router-dom'


const StyledHomeContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 0rem;
    min-height: 85vh;
    min-width: 30vw;

    
    /* .carousel {
        max-width: 50vw;
    } */
    
`

// function onChange(a, b, c) {
//   console.log(a, b, c);
// };

// const contentStyle = {
//   height: '160px',
//   color: '#312244',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#f0efeb',
  

// };





export default function LandingPage() {


    return (
        <StyledHomeContainer>
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/" component={Home} />


            
            {/*<Carousel className="carousel" afterChange={onChange}>
                <div>
                <h3 style={contentStyle}>CashOutApp</h3>
                </div>
                <div>
                <h3 style={contentStyle}>FilmJot</h3>
                </div>
                <div>
                <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>*/}

            </Switch>
        </StyledHomeContainer>
    )
}
