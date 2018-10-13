import React from 'react';
import {
  ActivityIndicator,
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  FlatList
} from 'react-native';
import randomcolor from 'randomcolor';

export default class EmployeeList extends React.Component {

  constructor(props){
    super(props);
    this.state = {isLoading: true};
  }

  setBgColor() {
    return {
      borderRadius: 12,
      backgroundColor: "green",
  }
}
  componentDidMount(){
    var customData = require('../employee_sample.json');
    this.setState({
      isLoading: false,
      dataSource: customData,
    });
  }

  render() {
   //const { navigation } = this.props.navigation;
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}> All Employees </Text>
          </View>
          {this.state.dataSource.map(function(employee, i) {
            return (
              <TouchableOpacity style={[styles.button, this.setBgColor()]} onPress={()=>this.props.navigation.navigate('EmployeeDetails',{employeeDetails:employee}) } underlayColor="#999" key={i}>
                <Text style={styles.buttonText}>{employee.name}</Text>
              </TouchableOpacity>
            );
          }, this)}
        </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    getStartedContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
    },
    getStartedText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      lineHeight: 24,
      textAlign: 'center',
    },
    welcomeContainer: {
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 20,
    },
    welcomeImage: {
      width: 100,
      height: 80,
      resizeMode: 'contain',
      marginTop: 3,
      marginLeft: -10,
    },
    getStartedText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      lineHeight: 24,
      textAlign: 'center',
    },
    button: {
      marginBottom: 15,
      padding: 15,
    },
    buttonText: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#666666',
      fontSize: 18
    }
  });
