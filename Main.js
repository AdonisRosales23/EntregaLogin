import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screen/Login/Login.jsx";
import Home from "./src/screen/Home/Home.jsx"
import Screen1 from "./src/screen/screen1/Screen1.jsx";

const Stack = createStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Screen1" component={Screen1}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}