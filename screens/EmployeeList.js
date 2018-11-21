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
  TouchableNativeFeedback,
  View,
  FlatList,
} from 'react-native';

export default class EmployeeList extends React.Component<*> {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  setBgColor() {
    return {
      borderRadius: 12,
      backgroundColor: '#3B5998',
    };
  }
  componentDidMount() {
    var customData = require('../employee_sample.json');
    this.setState({
      isLoading: false,
      dataSource: customData,
    });
  }

  goToEmplyeeDetails(item) {
    this.props.navigation.navigate('EmployeeDetails', { employeeDetails: item });
  }

  _renderItem = ({ item }) => {
    return (
      <TouchableHighlight
        style={[styles.button, this.setBgColor()]}
        onPress={() => this.goToEmplyeeDetails(item)}
      >
        <View style={styles.item}>
          <View style={styles.avatar}>
            <Text style={styles.letter}>{item.name.slice(0, 1).toUpperCase()}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.number}>{item.mob}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  _ItemSeparator = () => <View style={styles.separator} />;

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.getStartedContainer}>
           <Text style={styles.getStartedText}> All Employees </Text>
        </View>

        <FlatList
          data={this.state.dataSource}
          keyExtractor={(item, i) => String(i)}
          renderItem={this._renderItem}
          ItemSeparatorComponent={this._ItemSeparator}
        />
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
    fontSize: 18,
  },
  item: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  avatar: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: '#e91e63',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letter: {
    color: 'white',
    fontWeight: 'bold',
  },
  details: {
    margin: 8,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
  },
  number: {
    fontSize: 12,
    color: '#999',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'rgba(0, 0, 0, .08)',
  },
});
