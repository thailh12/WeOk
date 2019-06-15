import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-elements'

export default class LinksScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          style={styles.button}
          title='Send Message Screen'
          onPress={() => this.props.navigation.navigate('SendMessageScreen', {name: 'Lam Ha Thai'})}
        />
        <Button
          style={styles.button}
          title='Send Report Screen'
          onPress={() => this.props.navigation.navigate('ReportScreen', {name: 'Nguyen Thai Bao', phone: '1234567890', lastLocation: 'Thanh Cong, Ba Dinh, Ha Noi'})}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  button: {
    marginTop: 10
  }
})

