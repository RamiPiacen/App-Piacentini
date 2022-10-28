import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet,Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <TextInput
          placeholder="agregar al carro"
          style={styles.Imput}
          placeholderTextColor={"gray"}
        />
        <Button style={styles.boton} color="black" title="agregar" />
      </View>
      <View style={styles.textos}>
        <Text style={styles.text}>texto1</Text>
        <Text style={styles.text}>texto2</Text>
        <Text style={styles.text}>texto3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    margin: 50,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "center",
    width: 150,
  },
  Imput: {
    borderButtomColor: "blue",
    borderBottomWidth: 1,
    width: 200,
  },
  textos:{
  marginTop:50,
  },
  text:{
    color:"red",
    borderWidth:1,
    margin:10,
    width:200,
    
  },
});
