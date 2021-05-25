import styled from 'styled-components'
import Header from './components/Header';
import LandingPage from './components/LandingPage';

const StyledAppContainer = styled.div`
  background-color: #fffafb;
  min-height: 90vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
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
