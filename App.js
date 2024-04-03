
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';




// importing the screens
import Schedule_settings from './screens/Schedule_settings';

import ControlStackScreens from "./screens/ControlStackScreens";
import EnergyUsage from "./screens/EnergyUsage";


// react navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Controls" component={ControlStackScreens}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialIcons 
                name="settings-remote" 
                size={24} 
                color={focused ? '#258F13' : 'grey'} 
              />
            ),
            headerShown: false,
          }} />

        <Tab.Screen name="Schedule Settings" component={Schedule_settings}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons 
                name="calendar-clear" 
                size={24} 
                color={focused ? '#258F13' : 'grey'} 
              />
            )
          
          }} />
        <Tab.Screen name="Energy Usage" component={EnergyUsage} 
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialIcons 
                name="energy-savings-leaf" 
                size={24} 
                color={focused ? '#258F13' : 'grey'} 
              />
            ),
            
          
          }}
        />

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
