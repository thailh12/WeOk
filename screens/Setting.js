import React from 'react'
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Platform,
  StatusBar,
  AsyncStorage,
  TouchableOpacity,
  Image,
} from 'react-native'
import { Avatar, ListItem, Button, Divider } from 'react-native-elements'

import container from '../containers/container'

class Setting extends React.Component {
  static navigationOptions = () => ({
    title: 'Settings',
  });

  render() {
    const { name } = container.state.me
    return (
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              marginBottom: 30,
            }}
          >
            <Image style={styles.image} source={require('../assets/images/logofull.png')} />
            <Text>Undifined Team</Text>
          </TouchableOpacity>
          <ListItem style={styles.item} title="Language" rightTitle="English" />
          <Divider />
          <ListItem style={styles.item} title="Change Password" />
          <Divider />
          <ListItem style={styles.item} title="Family Members"
            onPress={() => this.props.navigation.navigate('ListMembers')}
          />
          <Divider />
          <ListItem style={styles.item} title="Help" />
          <Divider />
          <ListItem style={styles.item} title="Term and Policies" />
          <Divider />
          <ListItem style={styles.item} title="About" />
        </View>
        <Button title="Logout" type="clear" />
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  item: {
    marginBottom: 3,
    borderWidth: 0.2,
    // padding: 6,
  },
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },

  infoText: {
    fontSize: 20,
    fontWeight: '500',
  },

  image: {
    marginTop: 10,
    marginBottom: 10,
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'rgba(210,210,210,1)',
  },
})
export default Setting
