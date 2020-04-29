import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import Styles from '../../utils/Styles'


function ButtonComponent(props){
    return(
        <View style = {Styles.buttonComponent}>
               <TouchableOpacity
                     style = {Styles.touchableOpacity}
                     onPress = {props.onPress}
               >
                <Text
                style = {Styles.buttonTitle}
                >{props.title}</Text>
               </TouchableOpacity>
        </View>
    )
}


export default ButtonComponent;
