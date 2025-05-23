import styles from "./LoginStyles.js"
import { View, Text } from "react-native"
import Input from "../input/Input.jsx"
import Button from "../button/Button.jsx"

function Login(){
    return(
        <>
            <Text style={styles.titulo}>LOGIN</Text>
            <Input placeholder='Email'>    
            </Input>
            <Input placeholder='Senha'>      
            </Input>
        
            <Button>LOGIN</Button>
        
            <Text style={styles.texto}>Don't have any account! Sing up</Text>
        </>
    )
}

export default Login