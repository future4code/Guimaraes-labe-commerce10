import React from "react";
import styled from "styled-components";
import youtube from "../../img/youtube.png"
import linkedin from "../../img/linkedin.png"
import twitter from "../../img/twitter.png"
import facebook from "../../img/facebook.png"

import LogoImg from "../../img/Logo.svg"

const ContainerFooter = styled.footer`
    display: flex;
    padding: 50px;
    background-color: darkorange;
    height: 10vh;
    align-items: center;
    justify-content: space-between;
`
const ContainerLogo=styled.div`
    display: flex;

`
const ContainerRedesSociais=styled.div`
    display: flex;
    margin-right: 50px;
    img.sociais{
        cursor: pointer;
        height: 60px;
    }
    img.sociais:hover{
        background-color: white;
        border-radius: 50%;
    }
`
const Logo = styled.img`
    height: 90%;
    margin-top: auto;
    margin-bottom: auto;
`
const NomeLoja = styled.h3`
    text-align: center;
`

class Footer extends React.Component{
    render(){
        return (
            <ContainerFooter>
               <ContainerLogo>
               <Logo src={LogoImg}></Logo>
                <NomeLoja>Astro<br/>Commerce</NomeLoja>
               </ContainerLogo>
               <ContainerRedesSociais>
               <a href="https://www.youtube.com/"> <img className="sociais" src={youtube}/></a>
               <a href="https://www.linkedin.com/"> <img className="sociais" src={linkedin}/></a>
               <a href="https://twitter.com/home"> <img className="sociais" src={twitter}/></a>
               <a href="https://www.facebook.com/"> <img className="sociais" src={facebook}/></a>
               </ContainerRedesSociais>
            </ContainerFooter>
        )
    }
}

export default Footer;