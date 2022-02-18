import React from 'react';
import styled from 'styled-components';

import Carrinho from './components/MainProdutos/Carrinho';
import MainProdutos from './components/MainProdutos/MainProdutos';

const MainContainer = styled.div`
  
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        
        <MainProdutos />
        <Carrinho />
      </MainContainer>
    );
  }
}

export default App;
