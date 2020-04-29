import {
StyleSheet
 }
 from 'react-native'
 import Constants  from '../constants/Layout'
export default StyleSheet.create ({
    container : {
        flex : 1,
        justifyContent : 'center',
        backgroundColor : '#fff',
        alignItems : 'center'
    },
    textInputTitle : {
        fontSize : 14,
        textAlign : 'left',
        fontWeight : '500',
        marginLeft : 16,
    },
    textInput : {
        padding : 4,
        height : 50,
        marginLeft : 16,
        marginRight: 16,
        borderRadius : 4,
        borderWidth: 1,
        borderColor : 'grey'
    },
    loginComponent : {
        height : 'auto',
        width : Constants.window.width,
        marginTop : 16,
    },
    buttonComponent : {
        height : 'auto',
        width : Constants.window.width - 50,
        alignSelf : 'center',
        marginTop : 32,
    },
touchableOpacity  :{
    backgroundColor : '#a6f5d3',
    borderRadius : 8,
    height : 50,
    justifyContent : 'center',
    alignItems : 'center',
},
buttonTitle : {
    fontWeight : '700',
    fontSize : 18
}

})