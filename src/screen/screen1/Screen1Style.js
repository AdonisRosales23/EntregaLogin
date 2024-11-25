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
    marginVertical:20
  },
  titleLogin:{
    fontSize: 20,
    fontWeight:'bold'
  },
  containerBtnGmail:{
    flexDirection:'row',
    justifyContent:'center',
    marginVertical:10
  },
  btnGmail:{
    width:width/2,
    justifyContent:'center',
    padding:10,
    borderRadius:50,
    borderColor:'red',
    borderWidth:1
  },
  rowContentBtn:{
    flexDirection:'row',
    justifyContent:'center',
  },
  icon:{
    width: 20, 
    height: 20, 
    marginRight: 10, 
    resizeMode: 'contain', 
  },
  txtGmail:{
    fontSize: 18,
    textAlign:'center',
    paddingHorizontal:20
  },
  containerBtnEmail:{
    flexDirection:'row',
    justifyContent:'center',
    marginVertical:10
  },
  btnEmail:{
    width:width/2,
    justifyContent:'center',
    padding:10,
    borderRadius:50,
    borderColor:'gray',
    borderWidth:1
  },
  txtEmail:{
    fontSize: 18,
    textAlign:'center',
    paddingHorizontal:20
  }
});

export default styles;