import React, { useState } from 'react';
// import Slider from '@react-native-community/slider';
import { View, Text, Switch, StyleSheet, Image, Pressable } from 'react-native';
import Slider from '@react-native-community/slider';

const LightControl = ({ route }) => {
  const { applianceId, applianceStatus } = route.params;
  const [lightIntensity, setLightIntensity] = useState(0);
  // const [isLightOn, setIsLightOn] = useState(applianceStatus);
  const [isLightOn, setIsLightOn] = useState(applianceStatus);
  const [brightness, setBrightness] = useState(50);
  const [color, setColor] = useState('#FFFFFF');

  const toggleLight = () => {
    setIsLightOn(!isLightOn);
  };

  const adjustBrightness = (value) => {
    setBrightness(value);
  };

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  const onIntensityChange = (value) => {
    setLightIntensity(value);
    // Call your API to control the light intensity
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/bulb.png')}
        style={styles.lightBulbImage}
      />
      <Text style={styles.title}>{isLightOn ? 'Light is On' : 'Light is Off'}</Text>
      <Pressable onPress={toggleLight} style={[styles.controlButton, { backgroundColor: isLightOn ? 'green' : '#BDBDBD' }]}>
        <Text style={styles.controlButtonText}>{isLightOn ? 'Turn Off' : 'Turn On'}</Text>
      </Pressable>
      <View style={styles.sliderContainer}>
        <Text style={styles.sliderLabel}>Brightness</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          value={brightness}
          // minimumTrackTintColor="#FFD600"
          maximumTrackTintColor="#BDBDBD"
          // thumbTintColor="#FFD600"
          onValueChange={adjustBrightness}
        />
      </View>
      {/* <View style={styles.colorPickerContainer}>
        <Text style={styles.colorPickerLabel}>Color</Text>
        <ColorPicker
          style={styles.colorPicker}
          onColorChange={changeColor}
          defaultColor={color}
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  lightBulbImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  controlButton: {
    backgroundColor: '#BDBDBD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20,
    width: '90%'
  },
  controlButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'center',
  },
  sliderContainer: {
    width: '90%',
    marginBottom: 20,
  },
  sliderLabel: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  slider: {
    width: '100%',
  },
});

export default LightControl;
