import { ActivityIndicator, Button, Image, Text, TouchableOpacity, View } from "react-native"

// 컴포넌트
// Veiw: 공간을 차지하는 컴포넌트
// Text: 텍스트를 표시하는 컴포넌트
// Image: 이미지를 표시하는 컴포넌트
// TouchableOpacity: 터치 가능한 영역을 만드는 컴포넌트
// ActivityIndicator: 로딩 중일 때 표시하는 컴포넌트
// Button: 버튼을 표시하는 컴포넌트


// const App = () => {
//   return (
//     <View>
//       <Text>Hello My name is Jeongha</Text>
//       {/* <Image source={require("../firstpractice/cat.jpg")} style={{width: "50%", height: "50%"}} /> */}
//       <Image source={{uri: "https://i.pinimg.com/736x/3f/25/91/3f259165de2f1d2b7002053c1b88fa11.jpg"}} 
//       style={{width: "50%", height: "50%"}} />
//       <Button title={"Button"}/>
//       <TouchableOpacity onPress={() => console.log("abcde")}>
//         <Text>This is TouchableOpacity</Text>
//         </TouchableOpacity>
//         <ActivityIndicator size={"large"} color={"#000000"} />
//     </View>
//   )
// }

const App = () => {
  return (
    <View>
      <Text>Hello My name is Jeongha</Text>
      <View style={{backgroundColor: "#ddd", padding: "5%", margin: "5%", borderRadius: 10}}>
        <Text>Title</Text>
        <Text>This is a description.</Text>
      </View>
    </View>
  )
}

export default App;