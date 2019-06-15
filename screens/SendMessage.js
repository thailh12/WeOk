import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native'
import { Button, Card } from 'react-native-elements'

export default function SendMessageScreen(props) {
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 10,
      paddingVertical: 10
    },
    textAreaContainer: {
      borderColor: '#38A169',
      borderWidth: 1,
      borderRadius: 5,
      padding: 18,
      marginBottom: 10,
    },
    textArea: {
      height: 150,
      justifyContent: "flex-start"
    },
    buttonSend: {
      borderRadius: 0,
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
      borderRadius: 5,
      backgroundColor: '#38A169',
    },
    buttonCancel: {
      borderRadius: 5,
      marginTop: 10,
      borderColor: '#38A169'
    },
  })

  const [message, setMessage] = React.useState('')

  const { name } = props.navigation.state.params

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 18,
          marginTop: 8
        }}
        >Send message</Text>

      <Card>
        <Text style={{ marginBottom: 8 }}>Message</Text>
        <Text>{name + ' is in disaster location, you can send a message to check.'}</Text>
      </Card>
      <Text style={{ marginVertical: 8 }}>Message</Text>
      <View style={styles.textAreaContainer} >
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Type your message here"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
          defaultValue={message}
          onChange={ e => setMessage(e.nativeEvent.text)}
          // onChange={ e => console.log(e)}
        />
      </View>
      <Button
        buttonStyle={styles.buttonSend}
        title='Send'
        onPress={() => {
          alert(message)
        }}
      />
      <Button
        buttonStyle={styles.buttonCancel}
        type='outline'
        title='Cancel'
        titleStyle={{ color: '#38A169' }}
        onPress={() => alert('Cancel')}
      />
    </View>
  )
}
