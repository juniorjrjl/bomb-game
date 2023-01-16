import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import { Container, TextTimer, Timer, TipContainer, TipText, TipTitle, Title } from "./styles";
import ButtonComponent from "../../components/Buttons";

import bombImg from '../../assets/bomba.png'
import PasswordInput from "../../components/PasswordInput";

const PlayAlone = () =>{

    const navigation = useNavigation()
    const handleStartGame = () => alert('Jogo iniciado')
    const handleNavToStart = () => navigation.navigate('Start')

    return (
    <Container>
        <Title>Bomb Game Solo</Title>
        <ImageBackground source={bombImg} resizeMode="cover" style={{
            minHeight: 130,
            marginTop: 50,
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Timer>
                <TextTimer>00 : 05 : 00</TextTimer>
            </Timer>
        </ImageBackground>
        <TipContainer>
            <TipTitle>Sua dica:</TipTitle>
            <TipText>Dica vai estar aqui!</TipText>
        </TipContainer>
        <PasswordInput />
        <ButtonComponent handlePress={handleStartGame}>Iniciar</ButtonComponent>
        <ButtonComponent handlePress={handleNavToStart}>Página Inicial</ButtonComponent>
    </Container>
    )
}

export default PlayAlone