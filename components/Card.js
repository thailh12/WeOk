import React from 'react'
import { Card, Button, Icon, Avatar } from 'react-native-elements'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Text, Image, StyleSheet, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { withNavigation } from 'react-navigation'

const color = {
  danger: ['#ffff', '#ffff'],
  safe: ['#ffff', '#ffff'],
}

class CardInfo extends React.Component {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          if (!this.props.info.safe) this.props.navigation.navigate('SendMessageScreen', {})
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            borderColor: 'grey',
            borderWidth: 0.5,
            marginBottom: 10,
            borderRadius: 9,
            backgroundColor: '#dad7d766',
          }}
        >
          <View
            style={{
              flex: 1,
              marginBottom: 10,
              borderRadius: 4,
              flexDirection: 'row',
              borderColor: 'grey',
              borderRadius: 4,
            }}
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
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'right' }}>
            <Text style={{ margin: 10 }}>{!this.props.info.safe ? 'Danger' : 'Safe'} </Text>
            <View
              style={{
                margin: 10,
                height: 16,
                width: 16,
                borderRadius: '50%',
                backgroundColor: !this.props.info.safe ? 'red' : 'green',
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default withNavigation(CardInfo)
