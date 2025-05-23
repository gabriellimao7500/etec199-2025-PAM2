import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Games from "../pages/Game";


export default function Route(){

    const stack = createNativeStackNavigator()

    return(
        <NavigationContainer>

            
            <stack.Navigator>
                <stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
                <stack.Screen name='Games' component={Games} />
            </stack.Navigator>

        </NavigationContainer>
    )
}