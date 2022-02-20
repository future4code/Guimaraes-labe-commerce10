import React from "react"
import styled from "styled-components"
import mais from "../../img/mais.png"
import menos from "../../img/menos.png"

const Container=styled.div`
    
    padding: 15px;
    background-color: #e5f3ba;
    max-width: 500px;
    min-height: 400px;
    min-width: 600px;
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
    img{
        max-height: 50px;
    }
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
        produtosNoCarrinho: this.props.novoCarrinho
    }
    getValorTotal=()=>{
        let valorTotal=0
        for(let produto of this.state.produtosNoCarrinho){
            valorTotal+= produto.valor* produto.quantidade
        }
        return valorTotal.toFixed(2)
    }
   aumentarQuantidade=(id)=>{
       const arrayCarrinho=this.state.produtosNoCarrinho.map((produto)=>{

        if(produto.id===id){
            const product={...produto, quantidade: produto.quantidade+1}
            return product
        }
        return produto

       })
       this.setState({produtosNoCarrinho: arrayCarrinho})
       this.props.atualizarCarrinho(this.state.produtosNoCarrinho)
   }
   diminuirQuantidade=(id)=>{
       const arrayCarrinho=this.state.produtosNoCarrinho.map((produto)=>{

        if(produto.id===id){
           if(produto.quantidade>0){
            const product={...produto, quantidade: produto.quantidade-1}
            return product
           }
        }
        return produto

       }).filter((produto) => produto.quantidade > 0)
  
       this.setState({produtosNoCarrinho: arrayCarrinho})
       this.props.atualizarCarrinho(this.state.produtosNoCarrinho)
    }
    adicionarNoCarrinho=()=>{
        let newProduto=this.props.novoCarrinho
        
        
        
        this.setState({produtos: newProduto})
        console.log("produtosCar"+this.state.produtosNoCarrinho)
        this.props.atualizarCarrinho(this.state.produtosNoCarrinho)
    
   }
  componentDidUpdate(prevProps,prevState){
   if(prevState.produtosNoCarrinho !== this.state.produtosNoCarrinho){
    this.props.atualizarCarrinho(this.state.produtosNoCarrinho)
      console.log(this.state.produtosNoCarrinho)
      console.log(this.props.novoCarrinho)
      
   }
 }
    render(){
       
        return(
            <Container>
                <h2>Carrinho</h2>
               
                { 
                this.state.produtosNoCarrinho.map((produto)=>{
                    return <Produto  key={produto.id}>
                        <img src={produto.imagem}/>
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