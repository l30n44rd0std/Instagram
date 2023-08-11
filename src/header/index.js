//import liraries
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Header () {
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <Image
                source={require('../img/logo-instagram.png')}
                style={styles.logo}
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image
                source={require('../img/direct-instagram.png')}
                style={styles.send}
                />
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: '#fff',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 3,
        paddingRight: -4,
        borderBottomWidth: 0.5,
        shadowColor: '#000',
        elevation: 2
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginTop: -30
    },
    send: {
        width: 50,
        height: 30,
        resizeMode: 'contain'
    }
});
