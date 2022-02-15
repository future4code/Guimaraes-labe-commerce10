import React from "react";
import styled from "styled-components";

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
        produtos: [{
            id: 1,
            name: "Foguete da Missão Apollo 11",
            value: 10000.0,
            imageUrl: "https://picsum.photos/200/200",
        },
        {
            id: 2,
            name: "Foguete da Missão Apollo 12",
            value: 15000.0,
            imageUrl: "https://picsum.photos/200/199",
        },
        {
            id: 3,
            name: "Foguete da Missão Apollo 13",
            value: 20000.0,
            imageUrl: "https://picsum.photos/200/198",
        },
        {
            id: 4,
            name: "Foguete da Missão Apollo 14",
            value: 25000.0,
            imageUrl: "https://picsum.photos/200/197",
        },
        {
            id: 5,
            name: "Foguete da Missão Apollo 15",
            value: 30000.0,
            imageUrl: "https://picsum.photos/200/196",
        },
    ],
    }

    onClickCarrinho = () => {

    }

    render() {

        const Produtos = this.state.produtos.map((produto) => {
            return (<ContainerMainProdutos key={produto.id}>
                    <ImagemProduto src={produto.imageUrl} alt={produto.name}></ImagemProduto>
                    <p>{produto.name}</p>
                    <PrecoProduto>R$: {produto.value}</PrecoProduto>
                    <BotaoProduto onClick={this.onClickCarrinho}>Adicionar ao carrinho</BotaoProduto>
                </ContainerMainProdutos>)
        })
        return (
            <div>
                {Produtos}
            </div>
            
        );
    }
}

export default MainProdutos;