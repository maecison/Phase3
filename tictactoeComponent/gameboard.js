import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GameBoard = () => {
    return (
    <View style = {styles.container}>
        <View style = {styles.board}>

        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: 'row'
    },
    board: {
        width: 312,
        height: 312,
        borderWidth: 3,
        borderColor: '#000'
    }
});

export default GameBoard;
