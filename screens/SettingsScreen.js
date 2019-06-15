import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class SettingsScreen extends React.Component {

  // const [person, setPerson] = React.useState([{name: 'John Smith', phone: '1234567890'}])
render() {
  return (
    <View style={styles.container}>
    <Button
      title='Go to List member'
      onPress={() => this.props.navigation.navigate('ListMembers')}
    >
    
    </Button>
    
    </View>
  )
}
}

SettingsScreen.navigationOptions = {
  title: 'Settings',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    marginLeft: 8
  },
  phone: {
    marginTop: 15,
    marginBottom: 10
  },
  describle: {
    color: '#D1D5DB'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  allButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})