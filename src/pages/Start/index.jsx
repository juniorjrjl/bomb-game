import React from "react";
import ButtonComponent from "../../components/Buttons";
import { Container, Logo, Title, SubTitle, Rules } from "./styles";

const Start = () => {
    const handleNavToPlayAlone = () => console.log('foi')
    const handleNavToPlayTogether = () => console.log('foi 2')
    const handleNavToRules = () => console.log('foi 3')
    return (
        <Container>
            <Logo source={require("../../assets/logoDark.png")} style={{ resizeMode: "contain" }}/>
            <Title>Bem vindo ao {"\n"} Bomb Game</Title>
            <SubTitle>Escolha um modo de jogo.</SubTitle>
            <ButtonComponent handlePress={handleNavToPlayAlone}>Jogar solo</ButtonComponent>
            <ButtonComponent handlePress={handleNavToPlayTogether}>Jogar em Dupla</ButtonComponent>
            <Rules onPress={handleNavToRules}>Ver as regras do jogo</Rules>
        </Container>
    );
}


export default Start