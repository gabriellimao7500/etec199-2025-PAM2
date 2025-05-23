import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    
    containerJogar:{
       backgroundColor: "black",
       margin:30,
       padding:20,
       borderRadius:25,
       alignItems:'center',
       justifyContent:'center'
    },
    Botao:{
        marginTop:8,
        width:'95%',
        padding:20,
        backgroundColor:"#69e1f5",
        alignItems:'center',
        justifyContent:'center',
        borderRadius:80,
        borderColor:'white',
        borderWidth:1,
        
        fontWeight:'bold',
        


    },
    textoJogar:{
        color:"white",
        textAlign:'justify',
        fontSize:15,
        marginBottom:10,
        fontWeight:'bold'
    },
    cabecalho:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:25,
        color:'white'

    },
})

export default estilos;