import React from "react"
import styled from "styled-components"
import mais from "../../img/mais.png"
import menos from "../../img/menos.png"

const Container=styled.div`
    position: absolute;
    top:0px;
    right: 0px;
    padding: 15px;
    background-color: #e5f3ba;
    max-width: 500px;
    min-height: 300px;
    min-width: 300px;
    h3{
        text-align: end;
    }
    h3>span{
        margin: 20px;
        color :green;
        font-size: 1.3em;
    }
    h2{
       
        border-bottom: 2px solid black;
    }
`
const ContainerFooterCarrinho=styled.div`
    border-top: 2px solid black;
    padding: 20px;
    display: flex;
    flex-direction: column;
    button {
        margin: 20px;
        height: 40px;
        border-radius: 10px;
        background-color: #5dd838;
        border: none;
        color: white;
        font-weight: bolder;
        font-size: 20px;

    }
    button:hover{
        cursor: pointer;
        background-color:#90e93c ;
        color:black;

    }
`
const Produto=styled.div`
    display: flex;
    margin: 10px;
    padding: 10px;
    border: 1px solid green;
    justify-content: space-around;
    align-items: center;
    img:hover{
        
        background-color: #5bb4e7;
    }
`
const IconeMais=styled.img`
    width: 30px;
    margin: 0 10px;
    cursor: pointer;
    border-radius: 50%;
    background-color: #50eb50;
   
`
const IconeMenos=styled.img`
    width: 30px;
    margin: 0 10px;
    cursor: pointer;
    border-radius: 50%;
    background-color: #d34c4c;
   
`
export default class Carrinho extends React.Component{
    state={
        produtos:[{id:1,nome:"Produto 1",valor: 999.99,imagem:"https://picsum.photos/50/50",quantidade:1},{id:2,nome:"Produto 2",valor: 499.99,imagem:"https://picsum.photos/50/50",quantidade:1},{id:3,nome:"Produto 3",valor: 299.99,imagem:"https://picsum.photos/50/50",quantidade:1}]
    }
    getValorTotal=()=>{
        let valorTotal=0
        for(let produto of this.state.produtos){
            valorTotal+= produto.valor* produto.quantidade
        }
        return valorTotal.toFixed(2)
    }
   aumentarQuantidade=(id)=>{
       const arrayCarrinho=this.state.produtos.map((produto)=>{

        if(produto.id===id){
            const product={...produto, quantidade: produto.quantidade+1}
            return product
        }
        return produto

       })
       this.setState({produtos: arrayCarrinho})
     
   }
   diminuirQuantidade=(id)=>{
       const arrayCarrinho=this.state.produtos.map((produto)=>{

        if(produto.id===id){
           if(produto.quantidade>0){
            const product={...produto, quantidade: produto.quantidade-1}
            return product
           }
        }
        return produto

       }).filter((produto) => produto.quantidade > 0)
  
       this.setState({produtos: arrayCarrinho})
     
   }
   
    
    render(){
        return(
            <Container>
                <h2>Carrinho</h2>
                {this.state.produtos.map((produto)=>{
                    return <Produto  key={produto.id}>
                        <img src={produto.imagem}  />
                        <span >{produto.nome}</span>
                        <span ><IconeMenos src={menos}  onClick={()=>this.diminuirQuantidade(produto.id)} /> {produto.quantidade}   <IconeMais src={mais}  onClick={()=>this.aumentarQuantidade(produto.id)}/></span>
                        <span  >R$: {(produto.valor)}</span>
                    </Produto>
                })}
                <ContainerFooterCarrinho>
                <>
                <h3> Total : R$ <span> {this.getValorTotal()}</span></h3>
                </> 
                <button>Finalizar  compra</button>                   
                </ContainerFooterCarrinho>
            </Container>
        )
    }
}