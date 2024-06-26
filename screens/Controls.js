import React, { useState } from 'react';
import { View, ScrollView, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


// import LightControl from "./LightControl";

const Controls = ({navigation}) => {
  //const navigation = useNavigation();
  const [appliances, setAppliances] = useState([
    { id: 1, name: 'Light', status: false, screen: 'LightControl' },
    { id: 2, name: 'Fan', status: false, screen: 'FanControl' },
    { id: 3, name: 'Smart Lock', status: false, screen: 'SmartLockScreen' },
    { id: 4, name: 'Coffee', status: false, screen: 'CoffeeControl' },
    { id: 5, name: 'A.C', status: false, screen: 'AcControl' },
  ]);

  const toggleApplianceStatus = (id) => {
    setAppliances((prevAppliances) =>
      prevAppliances.map((appliance) =>
        appliance.id === id ? { ...appliance, status: !appliance.status } : appliance
      )
    );
  };

  const navigateToApplianceScreen = (screenName, applianceId, applianceStatus) => {
    navigation.navigate(screenName, { applianceId, applianceStatus });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {appliances.map((appliance) => (
        <TouchableOpacity
          key={appliance.id}
          style={styles.applianceContainer}
          onPress={() => navigateToApplianceScreen(appliance.screen, appliance.id, appliance.status)}
        >
          <Text style={styles.applianceName}>{appliance.name}</Text>
          <Switch
            value={appliance.status}
            onValueChange={() => toggleApplianceStatus(appliance.id)}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // backgroundColor: '#F5FCFF',
    height: '100%'
  },
  applianceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 30,
  },
  applianceName: {
    fontSize: 18,
    color: 'green',
  },
});

export default Controls;
