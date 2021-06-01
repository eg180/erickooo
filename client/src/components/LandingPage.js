import React from 'react'
import styled from 'styled-components';
// import 'antd/dist/antd.css';
// import { Carousel } from 'antd';
import About from './About';
import Home from './Home';
import { 
    Route, 
    Path, 
    Switch } from 'react-router-dom'


const StyledHomeContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: column;
    align-items: center;
    margin-top: 3rem;
    min-height: 85vh;
    
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
