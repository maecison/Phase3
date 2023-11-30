import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';

const MemoryGame = () => {
    const [grid, setGrid] = useState([]);
    const [selectedCells, setSelectedCells] = useState([]);
    const [gameStatus, setGameStatus] = useState('');
    const gridSize = 4;

    useEffect(() => {
    initializeGrid();
    }, []);

    const initializeGrid = () => {
        let arr = Array.from({ length: gridSize * gridSize }, (_, i) => i)
        .sort(() => Math.random() - 0.5)
        .map((num) => ({ id: num, value: Math.floor(num / 2), isVisible: false }));

        setGrid(arr);
        setGameStatus('');
    };

    const handleCellPress = (id) => {
        let newGrid = [...grid];
        let cell = newGrid.find((cell) => cell.id === id);
        
        if (cell.isVisible) {
        return;
        }

    cell.isVisible = true;
    let newSelectedCells = [...selectedCells, cell];

    if (newSelectedCells.length === 2) {
        if (newSelectedCells[0].value !== newSelectedCells[1].value) {
        setTimeout(() => {
            newSelectedCells.forEach(cell => {
            newGrid.find(gridCell => gridCell.id === cell.id).isVisible = false;
            });
            setSelectedCells([]);
            setGrid(newGrid);
            }, 1000);
        } 
        else {
        setSelectedCells([]);
        setGameStatus('You made a match!');
        setTimeout(() => {
            setGameStatus('');
        }, 2000);

        if (newGrid.every(cell => cell.isVisible)) {
            setGameStatus('You have won the game!');
        }}}

        else {
        setSelectedCells(newSelectedCells);
    }

    setGrid(newGrid);
    };

    const resetGame = () => {
        initializeGrid();
        setSelectedCells([]);
    }

    return (
        <ScrollView style={styles.body}>
        <View style={styles.gameBoard}>
            {grid.map((cell) => (
            <TouchableOpacity
                key={cell.id.toString()}
                style={styles.cell}
                onPress={() => handleCellPress(cell.id)}
            >
                {cell.isVisible && <Text style={styles.cellText}>{cell.value}</Text>}
            </TouchableOpacity>
            ))}
        </View>
        <TouchableOpacity style={styles.retryButton} onPress={resetGame}>
            <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
        <Text style={styles.gameStatus}>{gameStatus}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    body: {
        padding: 10,
    },
    gameBoard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    cell: {
        width: '25%',
        height: 80,
        borderWidth: 1,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cellText: {
        fontSize: 20,
    },
    retryButton: {
        alignSelf: 'center',
        marginTop: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#007FF4',
        borderRadius: 5,
    },
    retryButtonText: {
        color: '#fff',
        fontSize: 18,
    },
    gameStatus: {
        marginTop: 20,
        fontSize: 20,
        textAlign: 'center',
    },
});

export default MemoryGame;