import { View, Text, Button,StyleSheet, Platform, StatusBar, SafeAreaView, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { PieChart } from 'react-native-chart-kit'

statisticData = [
    {name: "Fan", energy: 53.65, color:"#6E6CD5", legendFontColor: "black", legendFontSize: 13},
    {name: "Light", energy: 43.65, color:"#D9D334", legendFontColor: "black", legendFontSize: 13},
    {name: "Heating", energy: 63.65, color:"#DBA555", legendFontColor: "black", legendFontSize: 13},
    {name: "Coffee", energy: 39.65, color:"#80D272", legendFontColor: "black", legendFontSize: 13},
    {name: "TV", energy: 53.65, color:"#5DB2D7", legendFontColor: "black", legendFontSize: 13},
]

Usages = [
    {usage: "Heating", fontSize:20, color:'#DBA555', time: "5 h 22 mins"},
    {usage: "Light", fontSize:20, color:'#D9D334', time: "3 h 45 mins"},
    {usage: "Fan", fontSize:20, color:'#6E6CD5', time: "2 h 30 mins"},
    {usage: "Coffee", fontSize:20, color:'#80D272', time: "1 h 30 mins"},
    {usage: "TV", fontSize:20, color:'#5DB2D7', time: "1 h 15 mins"},
]

 const EnergyUsage = () => {
  return (
    <SafeAreaView style={[styles.container]}>
            <View style={{height:390, width:350, marginBottom:-149}}>
                <PieChart
                data={statisticData}
                width={350}
                height={234}
                chartConfig={{
                    backgroundColor: '#dfe6e9',
                    backgroundGradientFrom: '#dfe6e9',
                    backgroundGradientTo: '#dfe6e9',
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                }}
                accessor="energy"
                backgroundColor="transparent"
                paddingLeft='15'
                paddingRight='35'
                flexDirection="row"
                center={[-3, 10]}
                absolute
                />
            </View>

            {/* make a view of Usage list using FlatList where each Usage has a view of a white back color with border radios giving space between */}
            <FlatList
                data={Usages}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <View style={{backgroundColor: 'white', borderRadius: 10, margin: 10, padding: 10, flexDirection: 'row', width:350, justifyContent:'space-between'}}>
                        <View style={{backgroundColor: item.color, width: 50, height: 50, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: item.fontSize, color: 'white'}}>{item.usage.charAt(0)}</Text>
                        </View>
                        <View style={{marginLeft: 10}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.usage}</Text>
                            <Text style={{fontSize: 15}}>{item.time}</Text>
                        </View>
                    </View>
                )}
            />

        
    </SafeAreaView>
  )
}
export default EnergyUsage;

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#dfe6e9',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        marginBottom: 0,
        marginTop: -50,

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