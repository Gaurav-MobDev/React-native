import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    AsyncStorage
} from 'react-native'
import LoginComponent from '../components/LoginComponent'
import ButtonCompoent from '../components/ButtonComponent'
import Styles from '../../utils/Styles'


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        }
    }

    _storeData = async () => {
        try {
            await AsyncStorage.setItem('username', this.state.username);
        } catch (error) {
            // Error saving data
        }
    };

    login = () => {
        if (this.state.username == 'admin' && this.state.password == 'admin') {
            this._storeData()
            this.props.navigation.navigate('Root', { username: this.state.username })
        } else {
            alert('Wrong username and password')
        }

    }

    render() {
        return (
            <View style={Styles.container}>
                <LoginComponent
                    title={'Username'}
                    placeholder={'Enter Username'}
                    value={this.state.username}
                    onChangeText={(username) => {
                        this.setState({
                            ...this.state,
                            username
                        })
                    }}
                />

                <LoginComponent
                    title={'Password'}
                    placeholder={'Enter Password'}
                    value={this.state.password}
                    onChangeText={(password) => {
                        this.setState({
                            ...this.state,
                            password
                        })
                    }}
                />

                <ButtonCompoent
                    title={'Login'}
                    onPress={() => { this.login() }}
                />

            </View>

        )
    }
}