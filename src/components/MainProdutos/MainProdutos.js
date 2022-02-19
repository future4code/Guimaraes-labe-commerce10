import React from "react";
import styled from "styled-components";

import Filtro from "./Filtro";

const ContainerMain = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const ContainerMainProdutos = styled.div`
    display: inline-grid;
    border: 1px solid black;
    margin: 15px;
    width: 20vw;
`
const ImagemProduto = styled.img`
    width: 100%;
`
const BotaoProduto = styled.button`
    width: 50%;
    justify-self: center;
    background-color: orange;
    margin-bottom: 10px;
    border-radius: 15px 15px;
    padding: 5px;
    &:hover{
        background-color: darkorange;
    }
`

const PrecoProduto = styled.p`
    border-top: 1px solid black;
    font-weight: bold;
    font-size: large;
`

class MainProdutos extends React.Component {
    state = {
        inputValorMinimo: '1000',
        inputValorMaximo: '3000',
        inputNome: '',
        organizacao: 'crescente',
        produtos: [{
            id: 1,
            name: "Foguete da Missão Apollo 11",
            value: 1000.0,
            imageUrl: "https://picsum.photos/200/200",
        },
        {
            id: 2,
            name: "Caneca",
            value: 1500.0,
            imageUrl: "https://picsum.photos/200/199",
        },
        {
            id: 3,
            name: "Meia",
            value: 2000.0,
            imageUrl: "https://picsum.photos/200/198",
        },
        {
            id: 4,
            name: "Tênis",
            value: 2500.0,
            imageUrl: "https://picsum.photos/200/197",
        },
        {
            id: 5,
            name: "Camisa",
            value: 3000.0,
            imageUrl: "https://picsum.photos/200/196",
        }],
    }

    onChangeOrganizacao = (event) => {
        this.setState({
            organizacao: event.target.value
        })
    }
    onChangeValorMinimo = (event) => {
        this.setState({
            inputValorMinimo: event.target.value
        })
    }
    onChangeValorMaximo = (event) => {
        this.setState({
            inputValorMaximo: event.target.value
        })
    }
    onChangeNome = (event) => {
        this.setState({
            inputNome: event.target.value
        })
    }

    onClickCarrinho = (idProd,nomeProd,valorProd,imagemUrl) => {
        this.props.adicionarAoCarrinho(idProd,nomeProd,valorProd,imagemUrl)
    }

    render() {

        const Produtos = this.state.produtos
            .filter(produto => {
                return produto.name.toLowerCase().includes(this.state.inputNome.toLowerCase())
            })
            .filter(produto => {
                return this.state.inputValorMinimo === "" || produto.value >= this.state.inputValorMinimo
            })
            .filter(produto => {
                return this.state.inputValorMaximo === "" || produto.value <= this.state.inputValorMaximo
            })
            .sort((produtoAtual, proximoProduto) => {
                if (this.state.organizacao === "crescente") {
                    return produtoAtual.value - proximoProduto.value
                }else
                if(this.state.organizacao === "decrescente"){
                    return proximoProduto.value - produtoAtual.value
                }else
                if(this.state.organizacao === "nome"){
                    return produtoAtual.name.localeCompare(proximoProduto.name)
                }
            })
            .map((produto) => {
                return (<ContainerMainProdutos key={produto.id}>
                    <ImagemProduto src={produto.imageUrl} alt={produto.name}></ImagemProduto>
                    <p>{produto.name}</p>
                    <PrecoProduto>R$: {produto.value}</PrecoProduto>
                    <BotaoProduto onClick={()=>this.onClickCarrinho(produto.id,produto.name,produto.value,produto.imageUrl)}>Adicionar ao carrinho</BotaoProduto>
                </ContainerMainProdutos>)
            })
        return (
            <ContainerMain>
                    <div>
                    <Filtro
                        inputValorMinimo={this.state.inputValorMinimo}
                        onChangeValorMinimo={this.onChangeValorMinimo}
                        inputValorMaximo={this.state.inputValorMaximo}
                        onChangeValorMaximo={this.onChangeValorMaximo}
                        inputNome={this.state.inputNome}
                        onChangeNome={this.onChangeNome}
                        organizacao={this.state.organizacao}
                        onChangeOrganizacao={this.onChangeOrganizacao}
                    />
                    </div>
                {Produtos}
            </ContainerMain>

        );
    }
}

export default MainProdutos;