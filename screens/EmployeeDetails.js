/* @flow */

import * as React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import randomcolor from 'randomcolor';
import { Table, Row, Rows } from 'react-native-table-component';
import EmployeeList from './EmployeeList';

export default class EmployeeDetails extends React.Component {

  constructor(props){
    super(props);
    filteredEmployee = [];
  }

  viewStyle() {
    return {
      flex: 1,
      backgroundColor: randomcolor(),
      justifyContent: 'center',
      alignItems: 'center',
    }
  }

  render() {
    const { navigation } = this.props;
    var employeeDetails = [];
    employeeDetails = navigation.getParam('employeeDetails', 'NO-ID');
    return (
      <Swiper
        loop={false}
        showsPagination={false}
        index={0}>

        <View style={this.viewStyle()}>
          <EmployeeD label="Right"  employeeDetails={employeeDetails} />
        </View>
        <View style={this.viewStyle()}>
          <EmployeeS label="Left" employeeDetails={employeeDetails}/>
        </View>

      </Swiper>
    );
  }
}

class EmployeeD extends React.Component {
  render() {
    const state = this.state;
    var tableHead = ['Employee', 'Details'];
    var tableData = [
        ["Address" , this.props.employeeDetails.address],
        ["Email" , this.props.employeeDetails.email],
        ["D.O.B" , this.props.employeeDetails.dob],
        ["DOJ" , this.props.employeeDetails.doj],
      ];
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <View style={styles.author}>
          <Image
            style={styles.avatar}
            source={require('../images/avatar-1.png')}
          />
          <View style={styles.meta}>
            <Text style={styles.name}>{this.props.employeeDetails.name}</Text>
            <Text style={styles.timestamp}>1st Jan 2025</Text>
          </View>
        </View>
        <Text style={styles.title}>Employee Details</Text>
        <Text style={styles.paragraph}>
          {this.props.employeeDetails.profile}
        </Text>
        <Image style={styles.image} source={require('../images/book.jpg')} />

        <View style={styles.container}>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
            <Rows data={tableData} textStyle={styles.text}/>
          </Table>
        </View>

      </ScrollView>

    )
  }
}


class EmployeeS extends React.Component {
  render() {
    var tableHead = ['Employee', 'Skills'];
    var tableData = [
        ["Skills" , this.props.employeeDetails.Skills],
      ];
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <View style={styles.author}>
          <Image
            style={styles.avatar}
            source={require('../images/avatar-1.png')}
          />
          <View style={styles.meta}>
            <Text style={styles.name}>{this.props.employeeDetails.name}</Text>
            <Text style={styles.timestamp}>1st Jan 2025</Text>
          </View>
        </View>
        <Text style={styles.title}>Employee Skills</Text>
        <Text style={styles.paragraph}>
          {this.props.employeeDetails.profile}
        </Text>
        <Image style={styles.image} source={require('../images/book.jpg')} />

        <View style={styles.container}>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
            <Rows data={tableData} textStyle={styles.text}/>
          </Table>
        </View>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff'
  },
  text: {
    margin: 6
  },
  content: {
    paddingVertical: 16,
  },
  author: {
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  meta: {
    marginHorizontal: 8,
    justifyContent: 'center',
  },
  name: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
  },
  timestamp: {
    color: '#999',
    fontSize: 14,
    lineHeight: 21,
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 36,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  paragraph: {
    color: '#000',
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginVertical: 8,
  },
});
