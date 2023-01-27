import React from "react";
import { Container, Input, InputContainer, TipText, TipTitle } from "./styled";

const TipInput = ({ started, question, setQuestion}) => {
    return (
        <Container>
            <TipTitle>Dica de senha:</TipTitle>
            {!started ? 
            (
                <InputContainer>
                    <Input placeholder="Dica para a sua dupla" value={question} onChangeText={(value) =>setQuestion(value)} />
                </InputContainer>
            ):
            (
                <TipText>{question}</TipText>
            )
            }
        </Container>
    );
}

export default TipInput