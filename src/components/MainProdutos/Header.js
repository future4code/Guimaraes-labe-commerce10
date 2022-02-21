import React from "react";
import styled from "styled-components";

import LogoImg from "../../img/Logo.svg"

const ContainerHeader = styled.header`
    display: flex;
    background-color: darkorange;
    height: 10vh;
    align-items: center;
`
const Logo = styled.img`
    height: 90%;
    margin-top: auto;
    margin-bottom: auto;
`
const NomeLoja = styled.h3`
    text-align: center;
`

class Header extends React.Component{
    render(){
        return (
            <ContainerHeader>
                <Logo src={LogoImg}></Logo>
                <NomeLoja>Astro<br/>Commerce</NomeLoja>
            </ContainerHeader>
        )
    }
}

export default Header;