import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

const FanControl = () => {
  const [speed, setSpeed] = useState(null);
  const [direction, setDirection] = useState(null);
  const [isFanOn, setIsFanOn] = useState(false);

  const [speedValue, setSpeedValue] = useState(''); // ['Low', 'Medium', 'High']
  const [directionValue, setDirectionValue] = useState(''); // ['Clockwise', 'Anti-Clockwise']

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.productName}>Fan Control</Text>
        <Image
          source={require('../assets/fan_image2.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.typeSelectionContainer}>
        <Text style={styles.typeSelectionText}> Speed</Text>
        <SegmentedControl
          style={styles.segmentedControl}
          values={['Low', 'Medium', 'High']}
          selectedIndex={speed}
          onChange={(event) => setSpeed(event.nativeEvent.selectedSegmentIndex)}
          onValueChange={setSpeedValue}
          activeTextColor="#fff" // Text color when selected
          activeTabColor="green" // Background color when selected
        />
      </View>

      <View style={styles.typeSelectionContainer}>
        <Text style={styles.typeSelectionText}> Direction </Text>
        <SegmentedControl
          style={styles.segmentedControl}
          values={['Clockwise', 'Anti-Clockwise']}
          selectedIndex={direction}
          onChange={(event) => setDirection(event.nativeEvent.selectedSegmentIndex)}
          onValueChange={setDirectionValue}
          activeTextColor="green" // Text color when selected
          activeTabColor="blue" // Background color when selected
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
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5FCFF',
    height: '100%'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50
  },
  productName: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 40,
    textAlign: 'center'
  },
  typeSelectionContainer: {
    width: '90%',
    marginTop: 15,
  },
  typeSelectionText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  segmentedControl: {
    width: '100%',
    marginTop: 9,
    borderRadius: 10, // Rounded corners
    shadowColor: '#000', // Shadow color
    shadowOffset: {
      width: 4,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Shadow on Android
  },
  onOffButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: '90%'
  },
  onOffButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default FanControl;
