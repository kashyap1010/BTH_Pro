import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmployeeComponent = ({ name, hourlyRate, hoursWorked }) => {
  const weeklyPay = hourlyRate * hoursWorked;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Name: {name}</Text>
      <Text style={styles.pay}>Weekly Pay: ${weeklyPay.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pay: {
    fontSize: 16,
  },
});

export default EmployeeComponent;
