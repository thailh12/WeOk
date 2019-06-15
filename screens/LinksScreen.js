import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-elements'

export default class LinksScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title='Send Message Screen'
          onPress={() => this.props.navigation.navigate('SendMessageScreen')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10
  }
})

