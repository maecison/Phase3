import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import GameBoard from './gameboard';

const TicTacToe = () => {
    return (
        <View style= {styles.container}>
            <GameBoard/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
    },
});

export default TicTacToe;