import styled from 'styled-components'
import Header from './components/Header';
import LandingPage from './components/LandingPage';


const StyledAppContainer = styled.div`
  background-color: #fffafb;

  /* max-width: 75vw; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
`

function App() {
  return (
    <StyledAppContainer>
      <Header className="header" />
      <LandingPage />


    </StyledAppContainer>
  );
}

export default App;
