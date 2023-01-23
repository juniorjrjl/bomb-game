import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import { Container, TextTimer, Timer, TipContainer, TipText, TipTitle, Title } from "./styled";
import ButtonComponent from "../../components/Buttons";

import bombImg from '../../assets/bomba.png'
import PasswordInput from "../../components/PasswordInput";
import BombService from "../../services/api/BombApp"
import api from '../../services/api/api'

const PlayAlone = () =>{

    const navigation = useNavigation()
    const handleNavToStart = () => navigation.navigate('Start')

    const [started, setStarted] = useState(false);
    const [pin, setPin] = useState(["", "", ""]);
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("03");
    const [seconds, setSeconds] = useState("00");

    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")
    const [intervalId, setIntervalId] = useState()

    const fetchQuestion = async () =>{
        const randomNumber = Math.floor(Math.random() * 6 + 1)
        const data = await api.get(`questions/${randomNumber}`)
        setQuestion(data.data?.question)
        setAnswer(data.data?.answer)
    }

    const handleStartBomb = () => {
        const diffTime = BombService.getDiffTime({hours, minutes, seconds})
        BombService.startCountDown({setSeconds, setMinutes, setHours, setStarted, diffTime, setIntervalId, intervalId, navigation})
    }

    const handleStartGame = () => BombService.bombStartGame({setStarted, hours, minutes, seconds})

    const handleDisarmBomb = () => BombService.disarmBomb({setStarted, answer, navigation, pin, setPin, intervalId})

    const handleGiveUp = () => BombService.giveUpGame({intervalId, navigation})

    useEffect(() =>{
        if(started){
            handleStartBomb()
        }
    }, [started])

    useEffect(() =>{
        fetchQuestion()
    }, [])
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
                <TextTimer>{hours} : {minutes} : {seconds}</TextTimer>
            </Timer>
        </ImageBackground>
        {started ? (
                <TipContainer>
                    <TipTitle>Sua dica:</TipTitle>
                    <TipText>{question}</TipText>
                </TipContainer>
            ): null}
        <PasswordInput pin={pin} setPin={setPin} started={started}/>
        {started ? 
        (
            <>
                <ButtonComponent handlePress={handleDisarmBomb}>Desarnar</ButtonComponent>
                <ButtonComponent handlePress={handleGiveUp}>Desistir</ButtonComponent>
            </>
        ):
        (
            <>
                <ButtonComponent handlePress={handleStartGame}>Iniciar</ButtonComponent>
                <ButtonComponent handlePress={handleNavToStart}>Página Inicial</ButtonComponent>
            </>
        )}
    </Container>
    )
}

export default PlayAlone