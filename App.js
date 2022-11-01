import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [item, setItem] = useState("");
  const [itemlist, setItemlist] = useState([]);

  const cambiarTextoImput = (t) => {
    setItem(t);
  };

  const presionarBoton = () => {
    setItemlist((currenItems) => [
      ...currenItems,
      { id: Math.random().toString(), value: item },
    ]);
    console.log(item)
    setItem("");
  };
  console.log(item);

  const renderItem = ({item}) => (
    <View>
      <View style={styles.items}>
        <Text>{item.value}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <TextInput
          value={item}
          placeholder="agregar al carro"
          style={styles.Imput}
          placeholderTextColor={"gray"}
          onChangeText={cambiarTextoImput}
        />
        <Button
          onPress={presionarBoton}
          style={styles.boton}
          color="black"
          title="agregar"
        />
      </View>
      <FlatList
        data={itemlist}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
  textos: {
    marginTop: 50,
  },
  text: {
    color: "red",
    borderWidth: 1,
    margin: 10,
    width: 200,
  },
});
