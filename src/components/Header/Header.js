import React from "react";
import styled from "styled-components";
import Logo from "../img/Logo.svg"

const HeaderContainer = styled.header`
    display: flex;
    background-color: darkorange;
    justify-content: space-between;
    align-items: center;
`
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`
const LogoAstroDev = styled.img`
    width: 4.68vw;
    height: 9.53vh;
    margin: 1.36vh;
    margin-right: 1vw;
`
const NomeLoja = styled.h2`
    font-size: 1.43vw;
`
const BotaoLogin = styled.button`
    background-color: orange;
    border-radius: 15px 15px;
    margin-right: 1.36vw;
    padding-left: 15px;
    padding-right: 15px;
`

class Header extends React.Component {
    render() {
        return (
            <HeaderContainer>
                <LogoContainer>
                    <LogoAstroDev src={Logo} alt="Logo"></LogoAstroDev>
                    <NomeLoja>Astrodev <br></br> ECommerce</NomeLoja>
                </LogoContainer>
                <BotaoLogin>Login</BotaoLogin>
            </HeaderContainer>
        );
    }
}

export default Header;