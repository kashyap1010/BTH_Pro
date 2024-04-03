import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet, Switch } from 'react-native';

const SmartLockScreen = ({route}) => {
    const [isLocked, setIsLocked] = useState(route.params.applianceStatus);
    const [isAutoLockEnabled, setIsAutoLockEnabled] = useState(false);

    const toggleLock = () => {
        setIsLocked(!isLocked);
    };

    const toggleAutoLock = () => {
        setIsAutoLockEnabled(!isAutoLockEnabled);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Front Entrance</Text>
            <Image
                source={require('../assets/smart_lock.webp')}
                style={styles.lockImage}
            />
            <Text style={styles.title}>{isLocked ? 'Unlocked' : 'Locked'}</Text>
            <Pressable
                style={({ pressed }) => [
                    {
                        backgroundColor: isLocked ? 'gray' : 'green',
                    },
                    styles.lockButton,
                ]}
                onPress={() => setIsLocked(!isLocked)}
            >
                <Text style={styles.lockButtonText}>{isLocked ? 'Lock' : 'Unlock'}</Text>
            </Pressable>
            <View style={styles.autoLockContainer}>
                <Text style={styles.autoLockLabel}>Auto Lock</Text>
                <Switch
                    value={isAutoLockEnabled}
                    onValueChange={toggleAutoLock}
                    thumbColor="#fff"
                    trackColor={{ true: '#4CAF50', false: '#BDBDBD' }}
                />
            </View>


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
    lockImage: {
        width: 150,
        height: 150,
        marginBottom: 20,
        justifyContent: 'center',
        marginLeft: 30
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    lockButton: {
        // backgroundColor: '#4CAF50',
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 30,
        marginBottom: 20,
        width: '90%'
    },
    lockButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    autoLockContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    autoLockLabel: {
        fontSize: 18,
        marginRight: 10,
    },
});

export default SmartLockScreen;
