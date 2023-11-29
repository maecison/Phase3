import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import ticTacToeImage from './assets/tictactoe.png';
import memoryGameImage from './assets/memory.png';
import comingSoonImage from './assets/coming-soon.png';
import { useNavigation } from '@react-navigation/native';

const GameSelection = () => {
    const navigation = useNavigation();
    
  return (
    <View style={styles.container}>
      {/* ... */}
      <ScrollView style={styles.gameContainer}>
        <View style={styles.gameBox}>
            <TouchableOpacity style={styles.touchableBox} onPress={() => navigation.navigate('TicTacToe')}>
                <Image source={ticTacToeImage} style={styles.gameImage} />
            </TouchableOpacity>
            <Text style={styles.gameTitle}>Tic-Tac-Toe</Text>
        </View>
        <View style={styles.gameBox}>
            <TouchableOpacity style={styles.touchableBox}>
                <Image source={memoryGameImage} style={styles.gameImage} />
            </TouchableOpacity>
            <Text style={styles.gameTitle}>Test Your Memory</Text>
        </View>
        <View style={styles.gameBox}>
            <TouchableOpacity style={styles.touchableBox}>
                <Image source={comingSoonImage} style={styles.gameImage} />
            </TouchableOpacity>
            <Text style={styles.gameTitle}>Minigame 3</Text>
        </View>
        <View style={styles.gameBox}>
            <TouchableOpacity style={styles.touchableBox}>
                <Image source={comingSoonImage} style={styles.gameImage} />
            </TouchableOpacity>
            <Text style={styles.gameTitle}>Minigame 4</Text>
        </View>
        <View style={styles.gameBox}>
            <TouchableOpacity style={styles.touchableBox}>
                <Image source={comingSoonImage} style={styles.gameImage} />
            </TouchableOpacity>
            <Text style={styles.gameTitle}>Minigame 5</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBF5FC',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#2B4162',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 17,
        color: '#000000',
    },
    gameContainer: {
        width: '100%',
        marginTop: 20,
    },
    gameBox: {
        width: '90%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderColor: '#385780',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        alignSelf: 'center',
        backgroundColor: '#FFFFFF',
    },
    gameImage: {
        width: '100%',
        height: '70%',
        resizeMode: 'contain',
    },
    touchableBox: {
        width: '100%',
        height: '100%',
    },
    gameTitle: {
        position: 'relative',
        bottom: 0,
        color: '#6A057F',
    },
});

export default GameSelection;