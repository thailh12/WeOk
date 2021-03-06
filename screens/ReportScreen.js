import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Linking } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements'
import container from '../containers/container'
import call from 'react-native-phone-call'

export default class SignIn extends React.Component {

  static navigationOptions = () => ({
    title: 'Report',
  });

  constructor(props) {
    super(props)

    this.state = {
      note: ''
    }
  }

  _onPressButton = () => {
    alert('Reported to server')
    this.props.navigation.navigate('Home')
  }

  _onCancel = () => {
    this.props.navigation.navigate('Home')
  }

  _call = phone => {
      Linking.openURL(`tel:${phone}`)
  }

  render() {
    const { name, phone, lastLocation, safe } = this.props.navigation.state.params
    
    return (
      <ScrollView>
      <View style={styles.container}>
        <View style={{ margin: 20 }}>
          <View>
            <Text style={styles.label}>Family Member</Text>
            <TextInput
              style={styles.inputText}
              value={name}
              editable={false}
            />
            <Text style={styles.label}>Phone Number</Text>
            <View
              style={{
                flexDirection: 'row',
                
              }}
            >
              <TextInput
                style={styles.inputText}
                value={phone + ''}
                editable={false}
              />
              <Button
                icon={
                  <Icon
                    name='phone'
                    size={38}
                    color='white'
                  />
                }
                onPress={() => this._call(phone)}
              />
            </View>
            <Text style={styles.label}>Last location</Text>
            <TextInput
              style={styles.inputText}
              value={lastLocation}
              editable={false}
            />
            <Text style={styles.label}>Note</Text>
            <TextInput
              style={styles.inputText}
              placeholder="Write your note here"
              numberOfLines={30}
              multiline={true}
              onChange={e => this.setState({note: e.nativeEvent.text})}
            />
          </View>
          <TouchableOpacity style={styles.loginBtn} onPress={this._onPressButton}>
            <Text style={styles.loginText}>Done</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelBtn} onPress={this._onCancel}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    marginBottom: 13,
  },
  label: {
    color: '#4A5568',
    marginBottom: 5,
    marginLeft: 5
  },
  inputText: {
    color: '#A0AEC0',
    height: 56,
    borderRadius: 8,
    padding: 8,
    marginBottom: 20,
    backgroundColor: '#F5F5F5',
    fontSize: 15,
    flex: 1
  },
  loginBtn: {
    height: 56,
    borderRadius: 8,
    backgroundColor: '#38A168',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 17,
  },
  cancelBtn: {
    height: 56,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#38A168',
    marginTop: 8
  },
  cancelText: {
    color: '#38A168',
    fontSize: 17,
  },
  forgotBtn: {
    flex: 1,
    alignItems: 'center',
  },
})
