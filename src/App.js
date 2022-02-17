import React from 'react';
import styled from 'styled-components';

import Carrinho from './components/MainProdutos/Carrinho';
import MainProdutos from './components/MainProdutos/MainProdutos';
import Filtro from './components/MainProdutos/Filtro';

const MainContainer = styled.div`
  display: flex;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <div>
        <Filtro/>
        </div>
        <MainProdutos></MainProdutos>
        <Carrinho />
      </MainContainer>
    );
  }
}

export default App;
