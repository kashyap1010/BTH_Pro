import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet, Switch, TextInput } from 'react-native';
import { buildUnavailableHoursBlocks } from 'react-native-calendars/src/timeline/Packer';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Schedule_settings = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [repeatOption, setRepeatOption] = useState('Daily');
  const [isLightOn, setIsLightOn] = useState(false);

  // Function to toggle light state
  const toggleLight = () => {
    setIsLightOn(!isLightOn);
  };

  // Function to handle date selection
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  // Function to handle time selection
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmTime = (time) => {
    setSelectedTime(time);
    hideTimePicker();
  };

  // Function to handle repeat option change
  const handleRepeatOptionChange = (option) => {
    setRepeatOption(option);
  };

  // Function to save schedule and trigger light state change
  const saveSchedule = () => {
    // Logic to save the schedule
    // Example: Call an API to save the schedule
    console.log('Schedule saved');
    
    // Trigger light state change at scheduled time
    const now = new Date();
    const scheduledDateTime = new Date(selectedDate);
    scheduledDateTime.setHours(selectedTime.getHours());
    scheduledDateTime.setMinutes(selectedTime.getMinutes());

    const timeDifference = scheduledDateTime - now;
    if (timeDifference > 0) {
      setTimeout(() => {
        setIsLightOn(!isLightOn);
        console.log('Light state changed at scheduled time');
      }, timeDifference);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Select Date</Text>
        <Pressable style={styles.datePickerButton} onPress={showDatePicker}>
          <Text>{selectedDate.toDateString()}</Text>
        </Pressable>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirmDate}
          onCancel={hideDatePicker}
          textColor="black"
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Select Time</Text>
        <Pressable style={styles.timePickerButton} onPress={showTimePicker}>
          <Text>{selectedTime.toLocaleTimeString()}</Text>
        </Pressable>
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleConfirmTime}
          onCancel={hideTimePicker}
          textColor="black"
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Repeat Options</Text>
        <TextInput
          style={styles.input}
          value={repeatOption}
          onChangeText={handleRepeatOptionChange}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Light Settings</Text>
        <View style={styles.lightSettings}>
          <Text style={styles.lightSettingLabel}>Turn on/off light</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isLightOn ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleLight}
            value={isLightOn}
          />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable style={[styles.button, styles.saveButton]} onPress={saveSchedule}>
          <Text style={styles.buttonText}>Save</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.cancelButton]} onPress={() => {}}>
          <Text style={styles.buttonText}>Cancel</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    height: '100%',
    width: '100%',
    backgroundColor: '#F5FCFF',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  datePickerButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  timePickerButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    color: 'black'
  },
  lightSettings: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lightSettingLabel: {
    marginRight: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    width: '47%'
  },
  saveButton: {
    backgroundColor: 'green',
  },
  cancelButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default Schedule_settings;
