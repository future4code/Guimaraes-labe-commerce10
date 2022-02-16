import React from 'react';
import styled from 'styled-components';
import Carrinho from './components/MainProdutos/Carrinho';
import MainProdutos from './components/MainProdutos/MainProdutos';

class App extends React.Component {
  render() {
    return (
      <div>
        <MainProdutos></MainProdutos>
        <Carrinho />
      </div>
    );
  }
}

export default App;
