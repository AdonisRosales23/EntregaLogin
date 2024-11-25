import { Dimensions, StyleSheet } from "react-native";
const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    justifyContent:'center',
  },
  containerTxt:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  txt:{
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default styles;