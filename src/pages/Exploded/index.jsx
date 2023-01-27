import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, Logo, FailedImg, Title } from "./styled";

import logoImg from '../../assets/logoLightRed.png';
import failedImg from '../../assets/bomba_explodiu.png';
import ButtonComponent from "../../components/Buttons";
import { Vibration } from "react-native";

const Explouded = () =>{
    const navigation = useNavigation()
    const handleNavToStart = () => navigation.navigate("Start")

    useEffect(() =>{
        Vibration.vibrate(5000)
    }, [])

    return(
        <Container>
            <Logo source={logoImg} style={{ resizeMode: "contain" }} />
            <Title>Você falhou, a{'\n'} bomba explodiu!</Title>
            <FailedImg source={failedImg} style={{ resizeMode: "contain" }}/>
            <ButtonComponent handlePress={handleNavToStart}>Página inicial</ButtonComponent>
        </Container>
    )
}


export default Explouded;