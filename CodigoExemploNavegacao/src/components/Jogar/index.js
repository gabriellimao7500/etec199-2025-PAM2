import {View,Image,Text,TouchableOpacity} from 'react-native'
import estilos from './styles'
import { useNavigation } from '@react-navigation/native'

export default function Jogar(){

    const navigation = useNavigation();
    return(
        <View style={estilos.containerJogar}>
            <Text style={estilos.cabecalho}> ATIVIDADES CAA </Text>
            <Text style ={estilos.textoJogar}>Vamos entender palavras importantes com símbolos
            em Comunicação Alternativa  sobre o MUB3 - Museu da bolsa do Brasil?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Games')} style={estilos.Botao}>
                <Text > JOGAR  </Text>
            </TouchableOpacity>
        </View>
    )
}