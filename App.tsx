import React, { useState } from "react"
import { Text } from "react-native"
import styled from "styled-components/native";

const WrapperView = styled.View`
  width: 100%;
  height: 100%;
  background-color: #393939;
`

const ContainerView = styled.View`
  padding-top: 25%;
  padding-left: 20;
`

const SubText = styled.Text`
  color: #fff;
  font-size: 12;
  margin-bottom: 13;
  font-weight: bold;
`

const TitleText = styled.Text`
  color: #fff;
  font-size: 24;
  font-weight: 500;
  
`

const InputText = styled.Text`
  color: #fff;
  font-size: 16;
  margin-bottom: 12;
  font-weight: bold;
`

const Input = styled.TextInput`
  background-color: #4B4B4B;
  border-radius: 10px;
  width: 360;
  height: 56;
  margin-bottom: 30;
  padding-left: 12;
  color: #fff;
`

const Button = styled.TouchableOpacity`
  background-color: #CB59FF;
  color: #fff;
  border-radius: 10px;
  width: 360;
  height: 56;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16;
  font-weight: bold;
`

const App = () => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [birthDate, setBirthDate] = useState("")

  // 이름: 문자만 입력 허용 (한글, 영문, 공백)
  const handleNameChange = (text: string) => {
    const textOnly = text.replace(/[^가-힣a-zA-Z\s]/g, '')
    setName(textOnly)
  }

  // 전화번호: 숫자만 입력 허용
  const handlePhoneChange = (text: string) => {
    const numericOnly = text.replace(/[^0-9]/g, '')
    setPhone(numericOnly)
  }

  // 생년월일: 숫자만 입력 허용
  const handleBirthDateChange = (text: string) => {
    const numericOnly = text.replace(/[^0-9]/g, '')
    setBirthDate(numericOnly)
  }

  return (
    <WrapperView>
      <ContainerView>
        <SubText>프로필 입력</SubText>
        <TitleText>탑승권에 기입 될</TitleText>
        <TitleText style={{marginBottom: 50}}>프로필 정보를 입력해주세요.</TitleText>
        <InputText>이름</InputText>
        <Input 
          value={name}
          onChangeText={handleNameChange}
          placeholder="이름을 입력해주세요." 
          placeholderTextColor="#B0B0B0"
          keyboardType="default"
          maxLength={5}
        />
        <InputText>전화번호</InputText>
        <Input 
          value={phone}
          onChangeText={handlePhoneChange}
          placeholder="전화번호를 입력해주세요." 
          placeholderTextColor="#B0B0B0"
          keyboardType="numeric"
          maxLength={11}
        />
        <InputText>생년월일</InputText>
        <Input 
          style={{marginBottom: 220}}
          value={birthDate}
          onChangeText={handleBirthDateChange}
          placeholder="생년월일을 입력해주세요." 
          placeholderTextColor="#B0B0B0"
          keyboardType="numeric"
          maxLength={8}
        />
        <Button>
          <ButtonText>다음</ButtonText>
        </Button>
      </ContainerView>
    </WrapperView>
  )
}

export default App;