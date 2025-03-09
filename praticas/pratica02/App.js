import { StyleSheet, Text, View } from "react-native";

// Função AppBar
function AppBar(props) {
  return (
    <View style={styles.appBar}>
      <Text style={styles.title}>{props.titulo}</Text>
    </View>
  );
}

// Função App
function App() {
  return (
    <View style={styles.container}>
      <AppBar titulo="Lucibundis" />
      <View></View>
    </View>
  );
}

export default App;

// Estilos usando StyleSheet
const styles = StyleSheet.create({
  // Estilo para o componente View raiz
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  // Estilo para a AppBar
  appBar: {
    height: 50,
    backgroundColor: "#333",
    justifyContent: "center",
    paddingLeft: 16,
  },
  // Estilo para o título da AppBar
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
