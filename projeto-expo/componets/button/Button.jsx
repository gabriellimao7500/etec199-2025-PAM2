import React from "react";
import { Text } from "react-native";
import styles from "./ButtonStyles"

export default function Button({ children }){
    return(
        <Text style={styles.botao}>{children}</Text>
    )
}