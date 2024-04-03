import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

const CoffeeControl = () => {
    const [roastType, setRoastType] = useState(null);
    const [roast, setRoast] = useState(''); // ['Regular', 'Dark Roast', 'Decaf'
    const [size, setSize] = useState(null);
    const [sizeValue, setSizeValue] = useState(''); // ['Small', 'Medium', 'Large'

    const handleBrew = () => {
        if (roastType === null || size === null) {
            // Validation message
            return alert('Please fill in all required fields.');
        } else {
            return alert('Your Coffee is brewing');
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={require('../assets/coffee.png')}
                    style={styles.image}
                />
                <Text style={styles.productName}>Coffee Machine</Text>
            </View>

            <View style={styles.typeSelectionContainer}>
                <Text style={styles.typeSelectionText}> Roast Type</Text>

                <SegmentedControl
                    style={styles.segmentedControl}
                    values={['Regular', 'Dark Roast', 'Decaf']}
                    selectedIndex={roastType}
                    onChange={(event) => setRoastType(event.nativeEvent.selectedSegmentIndex)}
                    onValueChange={setRoast}
                />
            </View>

            <View style={styles.typeSelectionContainer}>
                <Text style={styles.typeSelectionText}> Size </Text>

                <SegmentedControl
                    style={styles.segmentedControl}
                    values={['Small', 'Medium', 'Large']}
                    selectedIndex={size}
                    onChange={(event) => setSize(event.nativeEvent.selectedSegmentIndex)}
                    onValueChange={setSizeValue}
                />
            </View>

            <View style={styles.purchaseContainer}>
                <View style={styles.horizontalLine} />
                <View style={styles.buyContainer}>
                    <Pressable
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? 'darkgray' : 'gray',
                            },
                            styles.buyButton,
                        ]}
                        onPress={handleBrew}
                    >
                        <Text style={styles.buyButtonText}>Start Brewing</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        // justifyContent: 'space-between',
        alignItems: 'center',
        // marginTop: 60,
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
    },
    purchaseContainer: {
        width: '90%',
    },
    horizontalLine: {
        height: 3,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        width: '100%',
        marginVertical: 10,
    },
    buyContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    buyButton: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: 'green',
        width: '100%'
    },
    buyButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default CoffeeControl;
