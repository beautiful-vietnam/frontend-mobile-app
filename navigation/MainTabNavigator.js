import React from 'react'
import { Platform } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
} from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import LinksScreen from '../screens/LinksScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import DemoApi from '../screens/DemoApi'
import ProfileScreen from '../screens/ProfileScreen'
import RePassScreen from '../screens/ResetPassScreen'
import LanguagesSceen from '../screens/LanguagesScreen'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
})

HomeStack.navigationOptions = {
  tabBarLabel: 'Travel',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-briefcase" />,
  tabBarOptions: {
    activeTintColor: '#FD5739',
    style: {
      backgroundColor: '#F5F5F5',
    },
  },
}

const LinksStack = createStackNavigator({
  Links: LinksScreen,
})

LinksStack.navigationOptions = {
  tabBarLabel: 'Test',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
  tabBarOptions: {
    activeTintColor: '#FD5739',
    style: {
      backgroundColor: '#F5F5F5',
    },
  },
}

const MyStackNavigator = createStackNavigator({
  Test: {
    screen: LinksScreen,
  },
  SignUp: {
    screen: SignUpScreen,
  },
  SignIn: {
    screen: SignInScreen,
  },
  DemoApi: {
    screen: DemoApi,
  },
  Repass: {
    screen: RePassScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
  languages: {
    screen: LanguagesSceen,
  },
})

const MyTabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
})

export default createDrawerNavigator({
  MyTabNavigator,
  MyStackNavigator,
})
