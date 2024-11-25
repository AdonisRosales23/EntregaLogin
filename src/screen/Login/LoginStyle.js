import { Dimensions, StyleSheet } from "react-native";
const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    justifyContent:'center',
  },
  containerTitle:{
    flexDirection:'row',
    justifyContent:'center',
  },
  txtLogin:{
    fontSize: 20,
  },
  containerTxtInput:{
    flexDirection:'row',
    justifyContent:'center',
    marginVertical:10
  },
  txtInput:{
    width:width*0.8,
    borderWidth:1,
    borderRadius:50
  },
  txtPassword:{
    width:width*0.8,
    borderWidth:1,
    borderRadius:50
  },
  containerBtnLogin:{
    flexDirection:'row',
    justifyContent:'center'
  },
  btnLogin:{
    width:width*0.5,
    backgroundColor:'green',
    padding:10,
    borderRadius:50,
  },
  txtLoginBtn:{
    color:'white',
    fontSize:18,
    textAlign:'center'
  }

});

export default styles;