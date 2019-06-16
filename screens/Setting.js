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
import { Avatar, ListItem, Button } from 'react-native-elements'

import container from '../containers/container'

class Setting extends React.Component {
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
            <Image style={styles.image} source={{ uri: 'https://picsum.photos/200.jpg' }} />
            <Text>{name}</Text>
          </TouchableOpacity>
          <ListItem style={styles.item} title="Language" rightTitle="English" />
          <ListItem style={styles.item} title="Change Password" />
          <ListItem style={styles.item} title="Family Members"
            onPress={() => this.props.navigation.navigate('ListMembers')}
          />
          <ListItem style={styles.item} title="Help" />
          <ListItem style={styles.item} title="Term and Policies" />
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
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'rgba(210,210,210,1)',
  },
})
export default Setting
