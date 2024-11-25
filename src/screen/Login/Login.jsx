import React,{useState} from 'react'
import { View, Text, TextInput, StatusBar, TouchableOpacity, Alert } from 'react-native'
import styles from './LoginStyle'
import { useNavigation } from '@react-navigation/native';
import {appFirebase}from '../../../credentials.js';
import {getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const auth = getAuth(appFirebase);

export default function Login() {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginEmail= async()=>{
        try {
            await signOut(auth);

            const userCredential = await signInWithEmailAndPassword(auth, email, password);

            const user = userCredential.user;
            console.log("datos",user)
            navigation.navigate('Home', { user });    

        } catch (error) {

            Alert.alert('Correo o contraseña incorrecta')

            console.log(error)
        }
    }
  return (
    <View style={styles.container}>
        <StatusBar/>
        <View style={styles.containerTitle}>
            <Text style={styles.txtLogin}>Login</Text>
        </View>
        <View style={styles.containerTxtInput}>
            <TextInput
                placeholder='Correo electronico'
                style={styles.txtInput}
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='email-address'
                onChangeText={(text)=>{setEmail(text)}}
            />
        </View>
        <View style={styles.containerTxtInput}>
            <TextInput
                placeholder='Contraseña'
                style={styles.txtPassword}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={(text)=>{setPassword(text)}}
            />
        </View>
        <View style={styles.containerBtnLogin}>
            <TouchableOpacity style={styles.btnLogin} onPress={handleLoginEmail}>
                <Text style={styles.txtLoginBtn}>Ingresar</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}
