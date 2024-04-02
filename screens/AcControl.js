import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet, Switch } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

const ACControl = ({route}) => {
  const [isACOn, setIsACOn] = useState(false);
  const [temperature, setTemperature] = useState(24);
  const [mode, setMode] = useState('Cool');
  const [isFanOn, setIsFanOn] = useState(route.params.applianceStatus);

  const increaseTemperature = () => {
    if (temperature < 30) {
      setTemperature(temperature + 1);
    }
  };

  const decreaseTemperature = () => {
    if (temperature > 16) {
      setTemperature(temperature - 1);
    }
  };

  const toggleAC = () => {
    setIsACOn(!isACOn);
  };

  return (
    <View style={styles.container}>
      <View style={styles.acContainer}>
        <Image
          source={require('../assets/fan_image2.png')}
          style={styles.image}
        />
          <Text style={styles.productName}>Living Room AC</Text>
      </View>

      <View style={styles.controlContainer}>
        {/* <Text style={styles.productName}>Temperature</Text> */}
        <View style={styles.temperatureContainer}>
          <Pressable onPress={decreaseTemperature}>
            <Text style={styles.temperatureControl}>-</Text>
          </Pressable>
          <Text style={styles.temperatureText}>{temperature}°C</Text>
          <Pressable onPress={increaseTemperature}>
            <Text style={styles.temperatureControl}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.controlContainer}>
        <Text style={styles.productName}>Mode</Text>
        <SegmentedControl
          style={styles.segmentedControl}
          values={['Cool', 'Dry', 'Fan', 'Normal']}
          selectedIndex={mode === 'Cool' ? 0 : mode === 'Dry' ? 1 : mode === 'Fan' ? 2 : 3}
          onChange={(index) => setMode(index === 0 ? 'Cool' : index === 1 ? 'Dry' : index === 2 ? 'Fan' : 'Normal')}
          activeFontStyle={{ color: 'white' }}
          activeBackgroundColor="#4CAF50"
          fontStyle={{ fontSize: 16 }}
          backgroundColor="#E0E0E0"
          tintColor="#4CAF50"
          segmentedControlHeight={40}
        />
      </View>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: isFanOn ? 'green' : 'gray',
          },
          styles.onOffButton,
        ]}
        onPress={() => setIsFanOn(!isFanOn)}
      >
        <Text style={styles.onOffButtonText}>{isFanOn ? 'Turn Off' : 'Turn On'}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    padding: 20
  },
  acContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    // marginBottom: 10,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#424242',
  },
  controlContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
    marginVertical: 10,
    gap:10
  },
  controlLabel: {
    fontSize: 18,
    // marginRight: 10,
    color: '#424242',
    // margin: 30
  },
  temperatureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderColor: '#BDBDBD',
  },
  temperatureControl: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: '#424242',
  },
  temperatureText: {
    fontSize:25,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: '#424242',
  },
  segmentedControl: {
    width: 300,
  },
  onOffButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  onOffButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default ACControl;
