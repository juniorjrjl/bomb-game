import React from "react";
import { useNavigation } from "@react-navigation/native";
import InputPassword from "../../components/PlayTogether/InputPassword";
import InputTimer from "../../components/PlayTogether/InputTimer";
import ButtonComponent from "../../components/Buttons";
import TipInput from "../../components/PlayTogether/TipInput";
import { BombMessage, Container, ScrollContainer, Title } from "./styled";

const PlayTogether = () =>{
    const navigation = useNavigation()
    const handleStartGame = () => alert('Jogo iniciado')
    const handleNavToStart = () => navigation.navigate('Start')
    return (
        <ScrollContainer>
            <Container>
                <Title>Bomb Game Dupla</Title>
                <InputTimer />
                <BombMessage>Mensagem de erro temporária!</BombMessage>
                <TipInput />
                <InputPassword />
                <ButtonComponent handlePress={handleStartGame}>Iniciar</ButtonComponent>
                <ButtonComponent handlePress={handleNavToStart}>Página Inicial</ButtonComponent>
            </Container>
        </ScrollContainer>
    )
}

export default PlayTogether