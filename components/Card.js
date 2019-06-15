import React from 'react'
import { Card, Button, Icon, Avatar } from 'react-native-elements'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Text, Image, StyleSheet, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { withNavigation } from 'react-navigation'

const color = {
  danger: ['#ffff', '#FA7D09'],
  safe: ['#ffff', '#39FA09'],
}

class CardInfo extends React.Component {
  render() {
    return (
      <TouchableWithoutFeedback
        key={this.props.info.name}
        onPress={() => {
          if (!this.props.info.safe) this.props.navigation.navigate('SendMessageScreen', {})
        }}
      >
        <View wrapperStyle={{ flex: 1 }}>
          <LinearGradient
            colors={this.props.info.safe ? color.safe : color.danger}
            style={{ marginBottom: 10, borderRadius: 4, flexDirection: 'row' }}
            start={[0, 0]}
            end={[1, 1]}
          >
            <Avatar
              size="medium"
              rounded
              style={{ width: 50, height: 50, margin: 15 }}
              source={{ uri: 'https://picsum.photos/200.jpg' }}
            />
            <View style={{ margin: 10 }}>
              <Text style={{ marginBottom: 3 }}>{this.props.info.name}</Text>
              <Text style={{ marginBottom: 3 }}>{this.props.info.phone}</Text>
              <Text style={{ marginBottom: 3 }}>{this.props.info.relationship}</Text>
            </View>
          </LinearGradient>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default withNavigation(CardInfo)
