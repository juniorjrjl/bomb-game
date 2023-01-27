import React, { useRef } from "react";
import { ImageBackground, Keyboard } from "react-native";
import bombImg from "../../../assets/bomba.png"
import { Input, InputContainer, Timer, TextTimer } from "./styled";

const InputTimer = ({ hours, minutes, seconds, setHours, setMinutes, setSeconds }) =>{
    const input1 = useRef()
    const input2 = useRef()
    const input3 = useRef()
    return(
        <ImageBackground source={bombImg} resizeMode="cover" style={ 
            { 
                marginTop: 50, 
                minHeight: 130, 
                alignItems: "center", 
                justifyContent: "center" 
            } }>
                <Timer>
                    <InputContainer>
                        <Input keyboardType={"number-pad"} maxLength={2} placeholder="00" placeholderTextColor="#bbb" ref={input1} value={hours} onChangeText={(value) => {
                            value.lenght >1 && input2.current.focus()
                            setHours(value)
                        }}/>
                    </InputContainer>
                    <TextTimer>:</TextTimer>
                    <InputContainer>
                        <Input keyboardType={"number-pad"} maxLength={2} placeholder="00" placeholderTextColor="#bbb" ref={input2} value={minutes} onChangeText={(value) => {
                            value.lenght >1 && input3.current.focus()
                            setMinutes(value)
                        }}/>
                    </InputContainer>
                    <TextTimer>:</TextTimer>
                    <InputContainer>
                        <Input keyboardType={"number-pad"} maxLength={2} placeholder="00" placeholderTextColor="#bbb" ref={input3} value={seconds} onChangeText={(value) => {
                            value.length > 1 && Keyboard.dismiss();
                            setSeconds(value);
                        }}/>
                    </InputContainer>
                </Timer>
        </ImageBackground>
    )
}

export default InputTimer