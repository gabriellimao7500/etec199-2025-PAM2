import { View } from 'react-native';
import Login from './componets/login/Login';
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}> //Corpo principal
      <View style={styles.main}>
        <View style={styles.top}>
          <View style={styles.quadrado}>
            <View style={styles.circulo}></View>
          </View>
        </View>
        <View style={styles.bottom}>
          <Login></Login>
        </View>
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
    },
    main: {
      backgroundColor: "#fff",
      flex: 1,
      alignItems: 'center',
      backgroundColor: "#000"
  
    },  
    top: {
      width: "100vw",
      height: "30vh",
      backgroundColor: "#000",
      justifyContent: "center",
      alignItems: "center"
    },
    quadrado: {
      backgroundColor: "#fff",
      width: "80px",
      height: "80px",
      borderRadius: 10,
      borderTopRightRadius: 0,
      justifyContent: "center",
      alignItems: "center"
    },  
    circulo: {
      backgroundColor: "#000",
      borderRadius: 50,
      width: "40px",
      height: "40px",
      borderBottomStartRadius: 0,
    },  
  
  
    bottom: {
      height: "70vh",
      width: "100vw",
      backgroundColor: "#fff",
      borderTopLeftRadius: 80,
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
  
    titulo: {
      color: "#000",
      fontSize: "25px",
      fontWeight: "bold",
      marginTop: "20px",
      marginBottom: "40px"
    },  
  
    input: {
      width: "80%",
      height: 50,
      borderColor: "#CCC", 
      borderWidth: 1,
      borderRadius: 10,
      paddingLeft: 10,
      marginTop: 20,
      marginBottom: 40,
    },
    botao: {
      color: "#fff",
      backgroundColor: "#000",
      borderColor: "#CCC", 
      borderWidth: 1,
      borderRadius: 10,
      paddingLeft: 10,
      marginTop: 30,
      width: "80%",
      height: 50,
      textAlign: "center",
      paddingTop: 12,
    },
    texto: {
      margintop: 10,
      textDecorationLine:  'underline'   
    }
  });