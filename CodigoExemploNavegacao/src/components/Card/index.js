import { Image,Text,View, TouchableOpacity} from "react-native-web";
import estilo from "./style";
import { useNavigation } from "@react-navigation/native";


export default function Card(){

    const navigation = useNavigation();
    return(
        <TouchableOpacity style={estilo.containerPrincipal} onPress= {()=>navigation.navigate()}>
        <View style={estilo.container}>

            <Image style = {estilo.imagem} resizeMode="contain" source={require("../../img/Screenshot_1.png")}/>


        </View>
        <View style={estilo.container}>

            <Image style = {estilo.imagem} resizeMode="contain" source={require("../../img/Screenshot_2.png")}/>



        </View>
        <View style={estilo.container}>

            <Image style = {estilo.imagem} resizeMode="contain" source={require("../../img/Screenshot_3.png")}/>

        </View>


        </TouchableOpacity>
    )
}