import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import InputPassword from "../../components/PlayTogether/InputPassword";
import InputTimer from "../../components/PlayTogether/InputTimer";
import ButtonComponent from "../../components/Buttons";
import TipInput from "../../components/PlayTogether/TipInput";
import { BombMessage, Container, ScrollContainer, Title } from "./styled";

import BombService from "../../services/api/BombApp"


const PlayTogether = () =>{
    const navigation = useNavigation()
    const [pin, setPin] = useState(["", "", ""]);
    const [started, setStarted] = useState(false);
    const [hours, setHours] = useState("");
    const [minutes, setMinutes] = useState("");
    const [seconds, setSeconds] = useState("");
    const [message, setMessage] = useState("");
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [intervalId, setIntervalId] = useState();

    const handleStartBomb = () => {
        const diffTime = BombService.getDiffTime({ hours, minutes, seconds})
        BombService.startCountDown({ setSeconds, setMinutes, setHours, setStarted, diffTime, setIntervalId, intervalId, navigation })
    }

    const handleStartGame = () =>  BombService.bombActivationTogether({question, pin, hours, minutes, seconds, setMessage, setStarted, setPin, handleStartBomb, setAnswer})

    const handleDisarmBomb = () => BombService.bombDisarmTogether({pin, answer, setStarted, intervalId, setPin, setAnswer, navigation})

    const handleGiveUpGame = () => BombService.giveUpGame({intervalId, navigation})

    const handleNavToStart = () => navigation.navigate('Start')
    return (
        <ScrollContainer>
            <Container>
                <Title>Bomb Game Dupla</Title>
                <InputTimer hours={hours} minutes={minutes} seconds={seconds} setHours={setHours} setMinutes={setMinutes} setSeconds={setSeconds}/>
                {message ? <BombMessage>{message}</BombMessage> : null}
                <TipInput started={started} question={question} setQuestion={setQuestion}/>
                <InputPassword pin={pin} setPin={setPin}/>
                {
                    !started ? 
                        (
                            <>
                                <ButtonComponent handlePress={handleStartGame}>Iniciar</ButtonComponent>
                                <ButtonComponent handlePress={handleNavToStart}>Página Inicial</ButtonComponent>
                            </>
                        ) : 
                        (
                            <>
                                <ButtonComponent handlePress={handleDisarmBomb}>Desarmar</ButtonComponent>
                                <ButtonComponent handlePress={handleGiveUpGame}>Desistir</ButtonComponent>
                            </>
                        )
                }
            </Container>
        </ScrollContainer>
    )
}

export default PlayTogether