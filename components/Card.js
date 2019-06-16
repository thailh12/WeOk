import React from 'react'
import { Card, Button, Icon, Avatar } from 'react-native-elements'
import { Text, Image, StyleSheet, View, TouchableOpacity  } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { withNavigation } from 'react-navigation'

const color = {
  danger: ['#ffff', '#ffff'],
  safe: ['#ffff', '#ffff'],
}

class CardInfo extends React.Component {
  render() {
    return (
      <TouchableOpacity 
        onPress={() => {
          if (!this.props.info.safe) this.props.navigation.navigate('ReportScreen', this.props.info)
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            borderColor: '#a0a0a0',
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
              borderColor: '#a0a0a0',
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
              <Text style={{ marginBottom: 3, fontSize: 14, fontWeight: 'bold' }}>{this.props.info.name}</Text>
              <Text style={{ marginBottom: 3, color: '#525252' }}>{this.props.info.phone}</Text>
              <Text style={{ marginBottom: 3, color: '#525252' }}>{this.props.info.relationship}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'right' }}>
            <Text style={{ margin: 10, color: !this.props.info.safe ? '#F56565' : '#68D391' }}>{!this.props.info.safe ? 'Danger' : 'Safe'} </Text>
            <View
              style={{
                margin: 10,
                height: 16,
                width: 16,
                borderRadius: '50%',
                backgroundColor: !this.props.info.safe ? '#E53E3E' : '#38A169',
              }}
            />
          </View>
        </View>
      </TouchableOpacity >
    )
  }
}

export default withNavigation(CardInfo)
