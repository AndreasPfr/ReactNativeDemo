import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import HomeScreen from './screens/HomeScreen.js'
import DetailScreen from './screens/DetailScreen.js'

export default StackNavigator({
  Home: {
    screen: HomeScreen, 
    navigationOptions : {
      title: 'Dogs'
    }
  }, 
  Detail: {
    screen: DetailScreen, 
    navigationOptions: {
      title: 'Detail'
    }
  }

})
