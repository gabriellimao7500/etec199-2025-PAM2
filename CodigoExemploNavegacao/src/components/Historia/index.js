import {View,Image,Text} from 'react-native'
import estilos from './style'


export default function Historia(){
    return(
        <View style={estilos.containerGeral}>

            <Image style={estilos.imagemB3} resizeMode='center' source={require('../../img/l.svg')}/>
            <Text style={estilos.cabecalho}> O museu  </Text>
            <View style={estilos.containerTexto}>
            <Text style={estilos.textoHistoria}> O MUB3 nasceu do desejo de se preservar e compartilhar a história do mercado de capitais brasileiro, a partir de uma potente plataforma de conhecimento, aberta a todas as pessoas que se interessam pelo tema e o pesquisam. O acervo originário das principais bolsas de valores do Brasil permitiu a criação do Museu, que passa agora a integrar uma rede de equipamentos culturais no centro de São Paulo ligados à história econômica brasileira, com reflexos para todo o Brasil.</Text>
            </View>

        </View>
    )
}