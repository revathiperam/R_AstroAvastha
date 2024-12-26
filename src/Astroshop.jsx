import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AstroShopScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to Astro Shop</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
});
