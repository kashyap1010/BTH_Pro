
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';



// importing the screens
import Schedule_settings from './screens/Schedule_settings';
import EnergyUsage from "./screens/energyUsage"
import ControlStackScreens from "./screens/ControlStackScreens"



// react navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name == "Energy Usage") {
              return (
                <Entypo name="home" size={25} color="black" />
              );
            }
            if (route.name === "Schedule Settings") {
              return (
                <Feather name="settings" size={25} color="black" />
              );
            }
            if (route.name === "Controls") {
              return (
                <Feather name="settings" size={25} color="black" />
              );
            }
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "black",
        })}
      >

        <Tab.Screen name="Energy Usage" component={EnergyUsage} />
        <Tab.Screen name="Schedule Settings" component={Schedule_settings} />
        <Tab.Screen name="Controls" component={ControlStackScreens} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
