import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginPage from './loginComponent/login-page';
import GameSelection from './gameSelectionComponent/game-selection';
import SignupPage from './signUpComponent/sign-up';
import TicTacToe from './tictactoeComponent/tictactoe';
import MemoryGame from './memoryGameComponent/memory-game';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginPage} 
          options={{ title: 'Welcome back gamer!' }}
        />
        <Stack.Screen 
          name="Signup" 
          component={SignupPage} 
          options={{ title: 'Register now!' }}
        />
        <Stack.Screen 
          name="GameSelection" 
          component={GameSelection} 
          options={{ title: 'Choose a game to challenge!' }}
        />
        <Stack.Screen 
          name="TicTacToe" 
          component={TicTacToe} 
          options={{ title: 'Welcome to Tic-Tac-Toe!' }}
        />
        <Stack.Screen 
          name="MemoryGame" 
          component={MemoryGame} 
          options={{ title: 'Test Your Memory!' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}