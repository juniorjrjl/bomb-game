import { useNavigation } from "@react-navigation/native";
import React from "react";
import ButtonComponent from "../../components/Buttons";
import { Container, Logo, Title, SubTitle, Rules } from "./styles";

const Start = () => {
    const navigation = useNavigation()
    const handleNavToPlayAlone = () => navigation.navigate('PlayAlone')
    const handleNavToPlayTogether = () => console.log('foi 2')
    const handleNavToRules = () => navigation.navigate('Rules')
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