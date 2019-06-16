import * as WebBrowser from 'expo-web-browser'
import React from 'react'
import { Button, Avatar, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import Card from '../components/Card'
import { MonoText } from '../components/StyledText'
import { LinearGradient } from 'expo-linear-gradient'

import { Subscribe } from 'unstated'
import container from '../containers/container'

const member = [
  {
    name: 'John Snow',
    phone: '0123456789',
    relationship: 'Son',
    safe: false,
  },
  {
    name: 'Tony Stark',
    phone: '0987654321',
    relationship: 'Son',
    safe: true,
  },
]

fetch('https://getstartednode-chatty-bear.au-syd.mybluemix.net/api/profile')
.then(res=>res.json())
.then(res => {
  const { latlng } = res
  latlng.latitude = latlng.latutude
  // latlng.longitude = latlng.latutude
  container.setState({me: {...res, latlng}})
})

fetch('https://getstartednode-chatty-bear.au-syd.mybluemix.net/api/follow')
.then(res=>res.json())
.then(res =>  {
  res.shift()
  res = res.map(item => {
    const { latlng } = item
    latlng.latitude = latlng.latutude
    return {...item, latlng}
  })
  container.setState({following: res})
})

export default class HomeScreen extends React.Component {
  render() {
  return (
    <Subscribe to={[container]}>
      {container => {
        const { me } = container.state
        return (
          <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MapScreen')}>
              <View
                wrapperStyle={{
                  flex: 1,
                }}
              >
                <View
                  style={{
                    borderRadius: 4,
                    flexDirection: 'row',
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    marginBottom: 10,
                    borderRadius: 9,
                  }}
                >
                  <View>
                    <Image
                      style={{ margin: 0 }}
                      resizeMode="cover"
                      source={require('../assets/images/background.png')}
                    />
                    <View style={{ margin: 10 }}>
                      <Text style={{ marginBottom: 5, fontSize: 20, fontWeight: 'bold' }}>{me.name}</Text>
                      <View style={{ flexDirection: 'row' }}>
                        <Icon name='phone' size={14}/>
                        <Text style={{ marginBottom: 5, marginLeft: 4 }}>{me.phone}</Text>
                      </View>
                      <View style={{ flexDirection: 'row' }}>
                        <Icon name='map-marker' size={14}/>
                        <Text style={{ marginBottom: 5, marginLeft: 8 }}>{me.lastLocation}</Text>
                      </View>
                    </View>
                    <Button type="clear" title="More" onPress={() => this.props.navigation.navigate('MapScreen')} />
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <ScrollView contentContainerStyle={styles.contentContainer}>
              {container.state.following && container.state.following.map((human) => {
                return <Card info={human} key={human.phone} />
              })}
            </ScrollView>
          </View>
        )
      }}
    </Subscribe>
  )
}
}

HomeScreen.navigationOptions = {
  header: null,
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 15,
    paddingVertical: 15,
    // flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 10,
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
})
