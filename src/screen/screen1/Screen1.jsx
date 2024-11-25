
  import { useEffect, useState } from "react";
  import { Text, View, TouchableOpacity, Image, StatusBar } from "react-native";
  import * as WebBrowser from "expo-web-browser";
  import * as Google from "expo-auth-session/providers/google";
  import AsyncStorage from "@react-native-async-storage/async-storage"; 
  import { useNavigation } from "@react-navigation/native";
  import styles from "./Screen1Style";
  
  WebBrowser.maybeCompleteAuthSession();
  
  export default function Screen1() {

    const [token, setToken] = useState("");
    const [userInfo, setUserInfo] = useState(null);
    const [request, response, promptAsync] = Google.useAuthRequest({
      androidClientId: "1054759754465-b627gtea1lools1ioa76sufgj1o38jsq.apps.googleusercontent.com",
      webClientId: "1054759754465-84frqstj4qc14ac6prbldbt9dki9i0i3.apps.googleusercontent.com",
      expoClientId: "1054759754465-k4sslojbcdq46beltoe7cbd71rvc0tf0.apps.googleusercontent.com",
      useProxy: true, 
    });

    const navigation = useNavigation();
  
    useEffect(() => {
      handleEffect();
    }, [response, token]);
  
    async function handleEffect() {
      await AsyncStorage.removeItem("@user");
  
      if (response?.type === "success") {
        const user = await getUserInfo(response.authentication.accessToken);
        if (user) {
          setUserInfo(user);
          await AsyncStorage.setItem("@user", JSON.stringify(user)); 
          navigation.navigate("Home", { user });
        } else {
          console.log("Error: Usuario no válido.");
        }
      }else{
        console.log("Error de autenticación de Google");
      }
    }
  
    const getUserInfo = async (token) => {
      if (!token) return;
      try {
        const response = await fetch(
          "https://www.googleapis.com/userinfo/v2/me",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
  
        const user = await response.json();
        if (!user || Object.keys(user).length === 0) {
          console.log("Error: Datos del usuario vacíos.");
          return null;
        }
        await AsyncStorage.removeItem("@user"); 
  
        await AsyncStorage.setItem("@user", JSON.stringify(user));
  
        setUserInfo(user);
        navigation.navigate("Home", { user });
      } catch (error) {
        console.log(error);
      }
    };
    
    const handleLogin = ()=>{
      navigation.navigate("Login")
    }
  return (
    <View style={styles.container}>
        <StatusBar/>
        <View style={styles.containerTitle}>
            <Text style={styles.titleLogin}>Inicia sesión con</Text>
        </View>
        <View style={styles.containerBtnGmail}>
            <TouchableOpacity style={styles.btnGmail} onPress={()=>promptAsync()}>
                <View style={styles.rowContentBtn}>
                    <Image source={require('../../../assets/IconGoogle.png')} style={styles.icon}/>
                    <Text style={styles.txtGmail}>Gmail</Text>
                </View>                
            </TouchableOpacity>
        </View>
        <View style={styles.containerBtnEmail}>
            <TouchableOpacity style={styles.btnEmail} onPress={handleLogin}>
                <View style={styles.rowContentBtn}>
                    <Image source={require('../../../assets/IconEmail.png')} style={styles.icon}/>
                    <Text style={styles.txtEmail}>Email</Text>
                </View>                
            </TouchableOpacity>  
        </View>
    </View>
  )
}