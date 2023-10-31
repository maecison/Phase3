import React, { useState } from 'react';
import { TextInput, TouchableOpacity, StyleSheet, Text, ScrollView, Image } from 'react-native';
import logoImage from './assets/logo.png';

const SignupPage = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignup = () => {
        if (!username || !password || !confirmPassword) {
            setErrorMessage('All fields are required');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }

        setErrorMessage('');
        navigation.navigate('GameSelection');
    };
  
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.appTitle}>Tiny Play Pal</Text>
            <Image source={logoImage} style={styles.gameImage} />
            <Text style={styles.tagline}>Create your new account to start gaming!</Text>
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
            <TextInput 
                style={styles.input} 
                value={confirmPassword} 
                onChangeText={setConfirmPassword} 
                placeholder="Confirm Password" 
                placeholderTextColor="#808080"
                secureTextEntry 
            />
            {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
            <TouchableOpacity 
                style={styles.signupButton} 
                onPress={handleSignup}
            >
                <Text style={styles.signupButtonText}>Create Account</Text>
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
        marginTop: 30,
        marginBottom: 30,
        textAlign: 'center',
    },
    gameImage: {
        width: '100%',
        height: '15%',
        resizeMode: 'contain',
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
    signupButton: {
        backgroundColor: '#2B4162',
        paddingVertical: 15,
        borderRadius: 5,
    },
    signupButtonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: '700',
    },
    errorText: {
        color: '#DC143C',
        marginBottom: 20,
    },
});

export default SignupPage;