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
  margin-bottom: 24;
  padding-left: 12;
  color: #fff;
`

const App = () => {
  return (
    <WrapperView>
      <ContainerView>
        <SubText>프로필 입력</SubText>
        <TitleText>탑승권에 기입 될</TitleText>
        <TitleText style={{marginBottom: 16}}>프로필 정보를 입력해주세요.</TitleText>
        <InputText>이름</InputText>
        <Input 
          placeholder="이름을 입력해주세요." 
          placeholderTextColor="#B0B0B0"
        />
        <InputText>전화번호</InputText>
        <Input 
          placeholder="전화번호를 입력해주세요." 
          placeholderTextColor="#B0B0B0"
        />
        <InputText>생년월일</InputText>
        <Input 
          placeholder="생년월일을 입력해주세요." 
          placeholderTextColor="#B0B0B0"
        />
      </ContainerView>
    </WrapperView>
  )
}

export default App;