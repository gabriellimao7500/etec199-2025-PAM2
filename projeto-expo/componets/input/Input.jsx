import React from 'react';
import { TextInput } from 'react-native';
import styles from "./InputStyles"

export default function Input({ placeholder }){
    return(
        <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor={"#888"}>
                
        </TextInput>
    )   
}