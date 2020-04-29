import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import HomeScreen from './screens/Home/HomeScreen'
import Login from './screens/Login/Login'
import styles from './utils/Styles'


const Stack = createStackNavigator();

export default class App extends React.Component {



  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer>
          <Stack.Navigator initialRouteName={'Login'}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Root" component={BottomTabNavigator}
              options={({ navigation, route }) => ({

                headerTitle: () => {
                  const routeName = route.state ?.routes[route.state.index] ?.name ?? 'Home';
                  return (
                    <Text style={{ fontSize: 16, fontWeight: '800' }}>{routeName}</Text>
                  )

                },
                headerLeft: null,
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}


