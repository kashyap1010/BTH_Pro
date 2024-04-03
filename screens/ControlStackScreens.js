import { View, Text, Button, StyleSheet } from "react-native"


// import of the stack relatd elements
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


// create screens for the stack
import Controls from "./Controls";
import LightControl from "./LightControl"
import FanControl from "./FanControl"
import CoffeeControl from './CoffeeControl'
import AcControl from "./AcControl";
import SmartLockScreen from './SmartLockScreen'


const ControlStackScreens = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Control" component={Controls} />
            <Stack.Screen name="LightControl" component={LightControl} />
            <Stack.Screen name="FanControl" component={FanControl} />
            <Stack.Screen name="CoffeeControl" component={CoffeeControl} />
            <Stack.Screen name="AcControl" component={AcControl} />
            <Stack.Screen name="SmartLockScreen" component={SmartLockScreen} />
        </Stack.Navigator>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});


export default ControlStackScreens





