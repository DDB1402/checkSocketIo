import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Button,
  Dimensions,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import { io } from "socket.io-client";
export default function App() {
  const { landscape } = useDeviceOrientation();
  let x = 1;

  //** Socket Config */
  let socket = io("http://localhost:5000", {
    transports: ["websocket"],
    forceNew: true,
    path: "/test/",
  });

  socket.on("connection", () => console.log("Connection socket"));
  socket.on("connect_error", (error) => {
    console.log(`${error}`);
  });

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "red",
          width: landscape ? "50%" : "10%",
          height: 50,
        }}
      ></View>
      {/* <Button 
        title='Click me' 
        onPress={() => console.log("Btn pressed") } 
      /> */}
      {/* <TouchableHighlight
        onPress={ () => console.log("Ok") }
      >
        <Image
        blurRadius={5}
        fadeDuration={1000}
        source={{
          width: 200,
          height: 300, 
          uri: 'https://picsum.photos/200/300' }} 
        />
      </TouchableHighlight> */}
      <Text>
        Open up App.js to start working on your app ! This is the first time I
        try to make an adroidddd{" "}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
