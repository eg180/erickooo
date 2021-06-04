import styled from 'styled-components'
import Header from './components/Header';
import LandingPage from './components/LandingPage';


const StyledAppContainer = styled.div`
  background-color: #fffafb;
  min-height: 90vh;
  min-width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <StyledAppContainer>
      <Header />
      <LandingPage />


    </StyledAppContainer>
  );
}

export default App;
