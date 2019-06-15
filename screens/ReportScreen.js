import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'

export default class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  _onPressButton = () => {
    alert(`${this.state.email}-${this.state.password}`)
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={{ margin: 20 }}>
          <Text style={styles.title}>Report</Text>
          <View>
            <Text style={styles.label}>Family Member</Text>
            <TextInput
              style={styles.inputText}
              value="Family member"
              editable={false}
            />
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.inputText}
              value="phone number"
              editable={false}
            />
            <Text style={styles.label}>Last location</Text>
            <TextInput
              style={styles.inputText}
              value="location"
              editable={false}
            />
            <Text style={styles.label}>Note</Text>
            <TextInput
              style={styles.inputText}
              placeholder="location"
              numberOfLines={10}
              multiline={true}
            />
          </View>
          <TouchableOpacity style={styles.loginBtn} onPress={this._onPressButton}>
            <Text style={styles.loginText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    marginTop: 20,
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
  forgotBtn: {
    flex: 1,
    alignItems: 'center',
  },
})
