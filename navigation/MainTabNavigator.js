import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import LinksScreen from '../screens/LinksScreen'
import SettingsScreen from '../screens/SettingsScreen'
import SendMessageScreen from '../screens/SendMessage'
import ReportScreen from '../screens/ReportScreen'
import ListMembers from '../screens/ListMembers'
import MapScreen from '../screens/MapScreen'
import Settings from '../screens/Setting'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  ReportScreen,
  MapScreen,
})

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-home` : 'md-information-circle'}
    />
  ),
}

const ListReportStack = createStackNavigator({
  Links: LinksScreen,
})

ListReportStack.navigationOptions = {
  tabBarLabel: 'Reports',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-document' : 'md-link'} />
  ),
}

const ListMemberStack = createStackNavigator({
  Settings,
  ListMembers,
})

ListMemberStack.navigationOptions = {
  tabBarLabel: 'People',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contacts' : 'md-options'} />
  ),
}

export default createBottomTabNavigator({
  HomeStack,
  ListReportStack,
  ListMemberStack,
})
