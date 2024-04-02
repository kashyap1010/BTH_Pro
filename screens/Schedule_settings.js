import {ScrollView, View, Text, StyleSheet, Button, TextInput, TouchableOpacity, Alert, Platform, StatusBar, SafeAreaView, Pressable, Switch} from 'react-native';
import {useState} from 'react';
import { Calendar} from 'react-native-calendars';

import DateTimePicker from '@react-native-community/datetimepicker';


import Slider from '@react-native-community/slider';




const Schedule_settings = ({navigation}) => {
    const [selected, setSelected] = useState('');
    
    const [date, setDate] = useState(null);
    const [date1, setDate1] = useState(null);
    const [date1_2, setDate1_2] = useState(null);
    const [date2, setDate2] = useState(null);
    const [date3, setDate3] = useState(null);
    const [date4, setDate4] = useState(null);

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showDatePicker1, setShowDatePicker1] = useState(false);
    const [showDatePicker1_2, setShowDatePicker1_2] = useState(false);
    const [showDatePicker2, setShowDatePicker2] = useState(false);
    const [showDatePicker3, setShowDatePicker3] = useState(false);
    const [showDatePicker4, setShowDatePicker4] = useState(false);

    const [sliderValue, setSliderValue] = useState(0);
    const [sliderValue1, setSliderValue1] = useState(0);
    const [sliderValue2, setSliderValue2] = useState(0);

    const [coffeeSwitch, setCoffeeSwitch] = useState(false);
    const [tvSwitch, setTvSwitch] = useState(false);

    return(
        <SafeAreaView style={[styles.container]}>
            <ScrollView style={{padding:10, top:0}}>
                <Calendar
                    onDayPress={(day) => {setSelected(day.dateString)}}
                    markedDates={{
                        [selected]: {selected: true, selectedColor: 'green'},
                    }}
                    style={styles.cal}
                />
                
                <ScrollView horizontal style={{paddingBottom:5, paddingRight:5, paddingLeft:-9}}>
                    
                    {/* Lighting Settings */}
                    <View style={{flexDirection:'column', marginTop:45, padding:24, backgroundColor:'white', width: 350, height: 692, borderRadius: 20, left:15, marginBottom: 34, shadowOffset: {width: 0, height:2}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation:5}}>
                            
                            <Text style={[styles.text]}>Light Setting</Text>
                           

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text>Low</Text>
                                <Slider vertical
                                    value={sliderValue}
                                    onChange={setSliderValue}
                                    style={{marginTop: 50, marginBottom: 50}}
                                    width={240}
                                    height={300}
                                    step={1}
                                    minimumValue={0}
                                    maximumValue={100}
                                    borderRadius={5}
                                    minimumTrackTintColor="#000000"
                                    maximumTrackTintColor="#FFFF00"
                                    showBallIndicator
                                    ballIndicatorColor="#000000"
                                />
                                <Text>High</Text>
                            </View>
                        
                        <Pressable 
                            onPress={() => {
                                setShowDatePicker(true);
                                setDate(new Date()); // Reset the date when the picker is opened
                            }}
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? 'transparent' : '#17C008'
                                },
                                styles.pressable
                            ]}
                            >
                            <Text style={[styles.buttonText]}>Open Time Picker</Text>
                        </Pressable>
                        {showDatePicker && (
                            <DateTimePicker
                                value={date}
                                mode="time"
                                onChange={(event, selectedDate) => {
                                    if (selectedDate) {
                                        setDate(selectedDate);
                                    }
                                    else{
                                        setDate(null)
                                    }
                                    
                                    setShowDatePicker(false);
                                }}
                            />
                        )}
                        { date && <Text style={styles.message}>Time is set!</Text>}
                        {!date && <Text style={styles.message}>Set a Time!</Text>}

                    </View>


                    {/* Thermostate */}
                    <View style={{flexDirection:'column', marginTop:45, padding:24, backgroundColor:'white', width: 350, height: 692, borderRadius: 20, left: 40, shadowOffset: {width: 0, height:2}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation:5}}>
                            
                            <Text style={[styles.text]}>Thermostate</Text>
                           
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text>Low</Text>
                                <Slider vertical
                                    value={sliderValue1}
                                    onChange={setSliderValue1}
                                    style={{marginTop: 30, marginBottom: 30}}
                                    width={240}
                                    height={300}
                                    step={1}
                                    minimumValue={0}
                                    maximumValue={100}
                                    borderRadius={5}
                                    minimumTrackTintColor="#000000"
                                    maximumTrackTintColor="#FFFF00"
                                    showBallIndicator
                                    ballIndicatorColor="#000000"
                                />
                                <Text>High</Text>
                            </View>
                        
                        <Pressable 
                            onPress={() => {
                                setShowDatePicker1(true);
                                setDate1(new Date()); // Reset the date when the picker is opened
                            }}
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? 'transparent' : '#17C008',
                                    marginBottom: 10,
                                },
                                styles.pressable
                            ]}
                            >
                            <Text style={[styles.buttonText]}>Set Start Time</Text>
                        </Pressable>
                        {showDatePicker1 && (
                            <DateTimePicker
                                value={date1}
                                mode="time"
                                onChange={(event, selectedDate) => {
                                    if (selectedDate) {
                                        setDate1(selectedDate);
                                    }
                                    else{
                                        setDate1(null)
                                    }
                                    
                                    setShowDatePicker1(false);
                                }}
                            />
                        )}

                        <Pressable 
                            onPress={() => {
                                setShowDatePicker1_2(true);
                                setDate1_2(new Date()); // Reset the date when the picker is opened
                            }}
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? 'transparent' : '#17C008'
                                },
                                styles.pressable
                            ]}
                            >
                            <Text style={[styles.buttonText]}>Set End Time</Text>
                        </Pressable>
                        {showDatePicker1_2 && (
                            <DateTimePicker
                                value={date1_2}
                                mode="time"
                                onChange={(event, selectedDate) => {
                                    if (selectedDate) {
                                        setDate1_2(selectedDate);
                                    }
                                    else{
                                        setDate1_2(null)
                                    }
                                    
                                    setShowDatePicker1_2(false);
                                }}
                            />
                        )}

                        {date1 && date1_2 && <Text style={styles.message}>Time is set!</Text>}
                        {!date1 || !date1_2 && <Text style={styles.message}>Set a Time!</Text>}

                    </View>


                    {/* Make Coffee */}
                    <View style={{flexDirection:'column', marginTop:45, padding:24, backgroundColor:'white', width: 350, height: 692, borderRadius: 20, left: 60, shadowOffset: {width: 0, height:2}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation:5}}>
                            
                            <Text style={[styles.text]}>Make Coffee</Text>
                           
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:4, marginBottom:4, padding: 75 }}>
                               
                                <Switch
                                    style={{width:100, height: 34}}
                                    value={coffeeSwitch}
                                    onValueChange={setCoffeeSwitch}
                                />
                                {coffeeSwitch ? <Text>On</Text> : <Text>Off</Text>}
                            </View>
                        
                        <Pressable 
                            onPress={() => {
                                setShowDatePicker2(true);
                                setDate2(new Date()); // Reset the date when the picker is opened
                            }}
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? 'transparent' : '#17C008'
                                },
                                styles.pressable
                            ]}
                            >
                            <Text style={[styles.buttonText]}>Open Time Picker</Text>
                        </Pressable>
                        {showDatePicker2 && (
                            <DateTimePicker
                                value={date2}
                                mode="time"
                                onChange={(event, selectedDate) => {
                                    if (selectedDate) {
                                        setDate2(selectedDate);
                                    }
                                    else{
                                        setDate2(null)
                                    }
        
                                    setShowDatePicker2(false);
                                }}
                            />
                        )}
                        {date2 && <Text style={styles.message}>Time is set!</Text>}
                        {!date2 && <Text style={styles.message}>Set a Time!</Text>}

                    </View>



                    {/* Set TV */}
                    <View style={{flexDirection:'column', marginTop:45, padding:24, backgroundColor:'white', width: 350, height: 692, borderRadius: 20, left: 80, shadowOffset: {width: 0, height:2}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation:5}}>
                            
                            <Text style={[styles.text]}>Set TV</Text>
                           
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:4, marginBottom:4, padding: 75 }}>
                               
                                <Switch
                                    style={{width:100, height: 34}}
                                    value={tvSwitch}
                                    onValueChange={setTvSwitch}
                                />
                                {tvSwitch ? <Text>On</Text> : <Text>Off</Text>}
                            </View>
                        
                        <Pressable 
                            onPress={() => {
                                setShowDatePicker3(true);
                                setDate3(new Date()); // Reset the date when the picker is opened
                            }}
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? 'transparent' : '#17C008'
                                },
                                styles.pressable
                            ]}
                            >
                            <Text style={[styles.buttonText]}>Open Time Picker</Text>
                        </Pressable>
                        {showDatePicker3 && (
                            <DateTimePicker
                                value={date3}
                                mode="time"
                                onChange={(event, selectedDate) => {
                                    if (selectedDate) {
                                        setDate3(selectedDate);
                                    }
                                    else{
                                        setDate3(null)
                                    }
                                    
                                    setShowDatePicker3(false);
                                }}
                            />
                        )}
                        {date3 && <Text style={styles.message}>Time is set!</Text>}
                        {!date3 && <Text style={styles.message}>Set a Time!</Text>}
                        

                    </View>


                    {/* Fan */}
                    <View style={{flexDirection:'column', marginTop:45, padding:24, backgroundColor:'white', width: 350, height: 692, borderRadius: 20, left: 100, marginRight:120, shadowOffset: {width: 0, height:2}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation:5}}>
                            
                            <Text style={[styles.text]}>Fan</Text>
                           
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text>Low</Text>
                                <Slider
                                    style={{marginTop: 30, marginBottom: 30}}
                                    width={240}
                                    height={300}
                                    minimumValue={0}
                                    maximumValue={100}
                                    minimumTrackTintColor="#000000"
                                    maximumTrackTintColor="#FFFF00"
                                    onValueChange={setSliderValue}
                                    value={sliderValue}
                                />
                                <Text>High</Text>
                            </View>
                        
                        <Pressable 
                            onPress={() => {
                                setShowDatePicker4(true);
                                setDate4(new Date()); // Reset the date when the picker is opened
                            }}
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? 'transparent' : '#17C008'
                                },
                                styles.pressable
                            ]}
                            >
                            <Text style={[styles.buttonText]}>Open Time Picker</Text>
                        </Pressable>
                        {showDatePicker4 && (
                            <DateTimePicker
                                value={date4}
                                mode="time"
                                onChange={(event, selectedDate) => {
                                    if (selectedDate) {
                                        setDate4(selectedDate);
                                    }
                                    else{
                                        setDate4(null)
                                    }
                                    
                                    setShowDatePicker4(false);
                                }}
                            />
                        )}
                        {date4 && <Text style={styles.message}>Time is set!</Text>}
                        {!date4 && <Text style={styles.message}>Set a Time!</Text>}

                    </View>

                </ScrollView>
                

            </ScrollView>
            
        </SafeAreaView>
    );
}

export default Schedule_settings;

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#dfe6e9',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        marginBottom: 0,

    },
    text: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    input: {
        width: 200,
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'black',
        padding: 10,
        margin: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        // get to center of a view
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    cal:{
        width: 369,
        height: 374,
        borderRadius: 30,
        shadowOffset: {width: 0, height:2}, 
        shadowOpacity: 0.25, 
        shadowRadius: 3.84, 
        elevation:5,
        marginTop: 10,
        marginLeft: 3,
        marginRight: 3,
    },
    pressable: {
        borderRadius: 5,
        width: 200,
        left: 50,
        right: 50,
        padding: 10,
    },
    message: {
        fontSize: 20,
        color: 'green',
        marginTop: 0,
        padding: 90,
    },
});