import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  BackHandler,
  Alert,
  AsyncStorage
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Style from '../../utils/Styles'
import { MonoText } from '../../utils/StyledText';
import ButtonComponent from '../Login/ButtonComponent'

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
    }
  }

  componentDidMount() {
    this.sretrieveData()
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    this.backHandler.remove()
  }


  logout = () => {
    this.props.navigation.pop();
  }

  handleBackPress = () => {
    Alert.alert(
      "Alert",
      "Do you want to exit app",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => BackHandler.exitApp() }
      ],
      { cancelable: false }
    );
    return true;
  }



  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      if (value !== null) {
        // We have data!!
        this.setState({
          username: value
        })
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };



  render() {

    return (
      <View style={Style.container}>

        <Text>{this.state.username}</Text>
        <ButtonComponent
          title={'Logout'}
          onPress={() => { this.logout() }}
        />
      </View>
    );
  }

}
