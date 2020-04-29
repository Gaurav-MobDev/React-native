import React,{Component} from 'react'
import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import Styles from '../../utils/Styles'


function LoginComponent(props){
    return(
        <View style = {Styles.loginComponent}>
                <Text style = {Styles.textInputTitle}>{props.title}</Text>
                <TextInput
                    style = {Styles.textInput}
                    placeholder = {props.placeholder}
                    value = {props.value}
                    onChangeText = {props.onChangeText}
                ></TextInput>
        </View>
    )
}


export default LoginComponent;
