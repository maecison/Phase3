import React, { useState } from 'react';
import { TextInput, TouchableOpacity, StyleSheet, Text, ScrollView, Image } from 'react-native';
import logoImage from './assets/logo.png';

const LoginPage = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log(`Username: ${username}, Password: ${password}`);
        navigation.navigate('GameSelection');
    };

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.appTitle}>Tiny Play Pal</Text>
        <Text style={styles.tagline}>Unleash your gaming spirit.</Text>
        <Image source={logoImage} style={styles.gameImage} />
        <Text style={styles.loginPrompt}>Login now to enjoy the fun!</Text>
        <TextInput 
            style={styles.input} 
            value={username} 
            onChangeText={setUsername} 
            placeholder="Username" 
            placeholderTextColor="#808080"
        />
        <TextInput 
            style={styles.input} 
            value={password} 
            onChangeText={setPassword} 
            placeholder="Password" 
            placeholderTextColor="#808080"
            secureTextEntry 
        />
        <TouchableOpacity 
            style={styles.loginButton} 
            onPress={handleLogin}
        >
            <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.signupButton} 
            onPress={() => navigation.navigate('Signup')}
        >
            <Text style={styles.signupButtonText}>Create an Account</Text>
        </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 20,
        backgroundColor: '#EBF5FC',
    },
    appTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#2B4162',
        marginBottom: 10,
        textAlign: 'center',
    },
    tagline: {
        fontSize: 17,
        color: '#000000',
        marginBottom: 30,
        textAlign: 'center',
    },
    gameImage: {
        width: '100%',
        height: '15%',
        resizeMode: 'contain',
    },
    loginPrompt: {
        fontSize: 20,
        color: '#000000',
        marginTop: 30,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: '#385780',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 15,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
    },
    loginButton: {
        backgroundColor: '#2B4162',
        paddingVertical: 15,
        borderRadius: 5,
    },
    loginButtonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: '700',
    },
    signupButton: {
        marginTop: 20,
    },
    signupButtonText: {
        color: '#6A057F',
        textAlign: 'center',
        fontWeight: '700',
    },
});

export default LoginPage;