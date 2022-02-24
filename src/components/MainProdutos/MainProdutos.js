import React from "react";
import styled from "styled-components";

import Filtro from "./Filtro";

import CamisaSanta from "../../img/camisa-santa.jpeg"
import CamisaClean from "../../img/camisa-clean.jpg"
import CamisaCapacete from "../../img/camisa-capacete.jpg"
import CamisaUni from "../../img/camisa-uni.jpeg"
import CamisaBalao from "../../img/camisa-balao.jpeg"

const ContainerMain = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const ContainerMainProdutos = styled.div`
    display: inline-grid;
    border: 1px solid gray;
    margin: 15px;
    width: 15vw;
    border-radius: 10px 10px;
`
const ImagemProduto = styled.img`
    width: 100%;
    border-radius: 10px;
    
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
    border-top: 1px solid gray;
    font-weight: bold;
    font-size: large;
`

class MainProdutos extends React.Component {
    state = {
        inputValorMinimo: '0',
        inputValorMaximo: '100',
        inputNome: '',
        organizacao: 'crescente',
        produtos: [{
            id: 1,
            name: "Camiseta Santa Astronaut",
            value: 93.0,
            imageUrl: CamisaSanta,
        },
        {
            id: 2,
            name: "Camiseta Clean Stars",
            value: 46.0,
            imageUrl: CamisaClean,
        },
        {
            id: 3,
            name: "Camiseta Astronaut",
            value: 85.0,
            imageUrl: CamisaCapacete,
        },
        {
            id: 4,
            name: "Camiseta Unicórnio Espacial",
            value: 76.0,
            imageUrl: CamisaUni,
        },
        {
            id: 5,
            name: "Camiseta Balloons",
            value: 92.0,
            imageUrl: CamisaBalao,
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

    onClickCarrinho = (idProd, nomeProd, valorProd, imagemUrl) => {
        this.props.adicionarAoCarrinho(idProd, nomeProd, valorProd, imagemUrl)
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
                } else
                    if (this.state.organizacao === "decrescente") {
                        return proximoProduto.value - produtoAtual.value
                    } else
                        if (this.state.organizacao === "nome") {
                            return produtoAtual.name.localeCompare(proximoProduto.name)
                        }
            })
            .map((produto) => {
                return (<ContainerMainProdutos key={produto.id}>
                    <ImagemProduto src={produto.imageUrl} alt={produto.name}></ImagemProduto>
                    <p>{produto.name}</p>
                    <PrecoProduto>R$: {produto.value}</PrecoProduto>
                    <BotaoProduto onClick={() => this.onClickCarrinho(produto.id, produto.name, produto.value, produto.imageUrl)}>Adicionar ao carrinho</BotaoProduto>
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