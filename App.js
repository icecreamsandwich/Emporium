/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import EmployeeList from  './screens/EmployeeList';
import EmployeeDetails from  './screens/EmployeeDetails';
import EmployeeSkills from  './screens/EmployeeSkills';
import {
  createStackNavigator,
} from 'react-navigation';

const App = createStackNavigator({
  Home: { screen: EmployeeList,
    navigationOptions: {
      headerTitle: 'Employees'
    }
  },
  EmployeeDetails: { screen: EmployeeDetails,
    navigationOptions: {
      headerTitle: 'Details'
    }
   },
  EmployeeSkills: { screen: EmployeeSkills ,
    navigationOptions: {
      headerTitle: 'Skills'
    }
  },
});

export default App;
