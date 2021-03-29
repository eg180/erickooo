import styled from 'styled-components'
import Header from './components/Header';

const StyledAppContainer = styled.div`
  background-color: #fffafb;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <StyledAppContainer>
      <Header />

    </StyledAppContainer>
  );
}

export default App;
