import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions, Alert } from 'react-native';
import circleImg from '../assets/circle.png';
import crossImg from '../assets/cross.png';
import playAgainImg from '../assets/play-again.png';

const cellWidth = Dimensions.get('window').width;

const TicTacToe = () => {

    // Keep track of player, starting player is X
    const [activePlayer, setActivePlayer] = useState('X')

    // Start with an empty board
    const [gamePiece, setGamePiece] = useState([
        null, null, null,
        null, null, null,
        null, null, null
    ])

    // Function use to switch players turn after making a move
    const turn = (position) => {
        if (!gamePiece[position]) {
            let playerTurn = [...gamePiece]
            playerTurn[position] = activePlayer
            setGamePiece(playerTurn)
            if ( activePlayer === 'X') {
                setActivePlayer('O')
            } else {
                setActivePlayer('X')
            }
        // Display error if player tries to pick a non-empty cell
        } else {
            Alert.alert('Please pick an empty space!')
        }
    }

    // Function to set all game pieces to null
    const replay = () => {
        setGamePiece([
            null, null, null,
            null, null, null,
            null, null, null
        ])
    }

    // Function to check if someone has won
    const winCheck = (squares) => {
        const win = [
            [0,1,2], // Top row win
            [3,4,5], // Mid row win
            [6,7,8], // Bot row win
            [0,3,6], // Left col win
            [1,4,7], // Mid col win
            [2,5,8], // Right col win
            [0,4,8], // Diagonal win
            [2,4,6] // Diagonal win
        ];
        
        // For loop to check for winner
        for (let i = 0; i < win.length; i++) {
            const [a,b,c] = win[i];
            if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c] && squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    // Display Winner
    useEffect(() => {
        const winner = winCheck(gamePiece);
        const isBoardFull = gamePiece.every(square => square !== null);

        if (winner === 'X') {
            alert("Player X has WON!")
        } else if (winner === 'O') {
            alert("Player O has WON!")
        } else if (isBoardFull) {
            alert("It's a TIE!")
    }
    }, [gamePiece])
    
    return (
        <ScrollView style={styles.body}>
            <View style={[styles.playerInfo, {backgroundColor: activePlayer === 'X' ? '#007FF4' : '#F40075'}]}>
                <Text style={styles.playerText}>Player {activePlayer}'s Turn</Text>
            </View>
            <View style= {styles.gameBoard}> 
                <TouchableOpacity style={styles.cell} onPress={ () => turn(0)}>
                    {gamePiece[0] === 'X' && <Image source={crossImg} style={styles.icon}></Image>}
                    {gamePiece[0] === 'O' && <Image source={circleImg} style={styles.icon}></Image>}
                </TouchableOpacity>
                <TouchableOpacity style={styles.cell} onPress={ () => turn(1)}>
                    {gamePiece[1] === 'X' && <Image source={crossImg} style={styles.icon}></Image>}
                    {gamePiece[1] === 'O' && <Image source={circleImg} style={styles.icon}></Image>}
                </TouchableOpacity>
                <TouchableOpacity style={styles.cell} onPress={ () => turn(2)}>
                    {gamePiece[2] === 'X' && <Image source={crossImg} style={styles.icon}></Image>}
                    {gamePiece[2] === 'O' && <Image source={circleImg} style={styles.icon}></Image>}
                </TouchableOpacity>
                <TouchableOpacity style={styles.cell} onPress={ () => turn(3)}>
                    {gamePiece[3] === 'X' && <Image source={crossImg} style={styles.icon}></Image>}
                    {gamePiece[3] === 'O' && <Image source={circleImg} style={styles.icon}></Image>}
                </TouchableOpacity>
                <TouchableOpacity style={styles.cell} onPress={ () => turn(4)}>
                    {gamePiece[4] === 'X' && <Image source={crossImg} style={styles.icon}></Image>}
                    {gamePiece[4] === 'O' && <Image source={circleImg} style={styles.icon}></Image>}
                </TouchableOpacity>
                <TouchableOpacity style={styles.cell} onPress={ () => turn(5)}>
                    {gamePiece[5] === 'X' && <Image source={crossImg} style={styles.icon}></Image>}
                    {gamePiece[5] === 'O' && <Image source={circleImg} style={styles.icon}></Image>}
                </TouchableOpacity>
                <TouchableOpacity style={styles.cell} onPress={ () => turn(6)}>
                    {gamePiece[6] === 'X' && <Image source={crossImg} style={styles.icon}></Image>}
                    {gamePiece[6] === 'O' && <Image source={circleImg} style={styles.icon}></Image>}
                </TouchableOpacity>
                <TouchableOpacity style={styles.cell} onPress={ () => turn(7)}>
                    {gamePiece[7] === 'X' && <Image source={crossImg} style={styles.icon}></Image>}
                    {gamePiece[7] === 'O' && <Image source={circleImg} style={styles.icon}></Image>}
                </TouchableOpacity>
                <TouchableOpacity style={styles.cell} onPress={ () => turn(8)}>
                    {gamePiece[8] === 'X' && <Image source={crossImg} style={styles.icon}></Image>}
                    {gamePiece[8] === 'O' && <Image source={circleImg} style={styles.icon}></Image>}
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.replayButton} onPress={ () => replay()}>
                <Image source={playAgainImg} style={styles.replayIcon}></Image>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#EBF5FC',
    },
    playerInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    playerText: {
        fontSize: 20,
        fontWeight: '700',
        letterSpacing: 1.2,
        color: '#fff',
    },
    gameBoard: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: 40,
    },
    cell: {
        width: cellWidth/3.2,
        height: cellWidth/3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 2.5,
        alignItems: 'center',
    },
    icon: {
        height: 50,
        width: 50,
    },
    replayButton: {
        bottom: 0,
        marginLeft: 150,
        marginTop: 30,
    },
    replayIcon: {
        height: 80,
        width: 80,
    },
});

export default TicTacToe;