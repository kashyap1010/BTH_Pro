import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const LightControl = ({ route }) => {
  const { applianceId, applianceStatus } = route.params;
  const [lightIntensity, setLightIntensity] = useState(0);
  const [isLightOn, setIsLightOn] = useState(applianceStatus);

  const toggleLight = () => {
    setIsLightOn((prevIsLightOn) => !prevIsLightOn);
    // Call your API to control the light status
  };

  const onIntensityChange = (value) => {
    setLightIntensity(value);
    // Call your API to control the light intensity
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Intensity</Text>
      <View style={styles.sliderContainer}>
        {/* <Text>Intensity: {lightIntensity}</Text> */}
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={100}
          value={lightIntensity}
          onValueChange={onIntensityChange}
          minimumTrackTintColor="#00FF00"
          maximumTrackTintColor="#000000"
        />
      </View>
      <View style={styles.switchContainer}>
      <Text style={styles.text}>Power: </Text>
        <Switch
          value={isLightOn}
          onValueChange={toggleLight}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    padding:90
  },
  applianceName: {
    fontSize: 24,
    marginBottom: 20,
  },
  sliderContainer: {
    // alignItems: 'center',
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    fontSize: 19,
  }

});

export default LightControl;
