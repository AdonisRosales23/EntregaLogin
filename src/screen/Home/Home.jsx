import React from 'react'
import { View,Text, StatusBar } from 'react-native'
import styles from './HomeStyle'

export default function Home({ route }) {
  const { user } = route.params; // Accede a los parámetros pasados

  return (
    <View style={styles.container}>
        <StatusBar/>
        <View style={styles.containerTxt}>
            <Text style={styles.txt}>Bienvenido {user.given_name}</Text>
        </View>
        <View style={styles.containerTxt}>
          <Text style={styles.txt}>email: {user.email}</Text>
        </View>
    </View>  
  )
}
