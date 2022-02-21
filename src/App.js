import React from 'react';
import styled from 'styled-components';

import Carrinho from './components/MainProdutos/Carrinho';
import MainProdutos from './components/MainProdutos/MainProdutos';
import Header from './components/MainProdutos/Header';
import Footer from './components/MainProdutos/Footer';

const MainContainer = styled.div`
  display: flex;
`

class App extends React.Component {

  state={
    carrinho:[]
  }
  adicionarAoCarrinho=(idProd,nomeProd,valorProd,imagemUrl)=>{
    let  carrinhos= this.state.carrinho
    console.log(carrinhos)
    carrinhos.push({id: idProd,nome :nomeProd,valor:valorProd, imagem:imagemUrl,quantidade: 1})
    
    this.setState({carrinho :carrinhos})
    console.log(carrinhos)
  }
 atualizarCarrinho=(produtos)=>{
  this.setState({carrinho: produtos})
 }
  render() {
    return (
      <div>
        <Header />
      <MainContainer>
        <MainProdutos adicionarAoCarrinho={this.adicionarAoCarrinho}/>
        <div>
        <Carrinho atualizarCarrinho={this.atualizarCarrinho} novoCarrinho={this.state.carrinho}/>
        </div>
      </MainContainer>
      <Footer/>
      </div>
    );
  }
}

export default App;
