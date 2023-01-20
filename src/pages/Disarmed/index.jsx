import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, Logo, SucessImg, Title } from "./styled";

import logoImg from "../../assets/logoDark.png";
import sucessImg from "../../assets/bomba_cortada_matrix.png";
import ButtonComponent from "../../components/Buttons";


const Disarmed = () =>{
    const navigation = useNavigation()
    const handleNavToStart = () => navigation.navigate("Start")
    return(
        <Container>
            <Logo source={logoImg} style={{ resizeMode: 'contain' }}/>
            <Title>Parabéns!{'\n'}Você desarmou</Title>
            <SucessImg source={sucessImg} style={{ resizeMode: 'contain' }} />
            <ButtonComponent handlePress={handleNavToStart}>Página inicial</ButtonComponent>
        </Container>
    )
}

export default Disarmed;