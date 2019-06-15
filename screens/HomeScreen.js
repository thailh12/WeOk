import * as WebBrowser from 'expo-web-browser'
import React from 'react'
import { Button, Avatar, Divider } from 'react-native-elements'
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

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('', {})}>
        <View
          wrapperStyle={{
            flex: 1,
          }}
        >
          <LinearGradient
            colors={['#ffff', '#FAFF00']}
            style={{
              borderRadius: 4,
              flexDirection: 'row',
            }}
            start={[0, 0]}
            end={[1, 1]}
          >
            <View>
              <Image
                style={{ margin: 0 }}
                resizeMode="cover"
                source={require('../assets/images/background.png')}
              />
              <View style={{ margin: 10 }}>
                <Text style={{ marginBottom: 3 }}>Name</Text>
                <Text style={{ marginBottom: 3 }}>08761273786</Text>
                <Text style={{ marginBottom: 3 }}>Hanoi</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      </TouchableWithoutFeedback>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {member.map((human, index) => {
          return <Card info={human} key={index} />
        })}
      </ScrollView>
    </View>
  )
}

HomeScreen.navigationOptions = {
  header: null,
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 15,
    paddingVertical: 15,
    flex: 1,
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
    paddingTop: 30,
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
