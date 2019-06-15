import React from 'react';
import { View, StyleSheet, TextInput, Alert } from 'react-native'
import { Button } from 'react-native-elements'

export default function SendMessageScreen() {
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 10,
      paddingVertical: 10
    },
    textAreaContainer: {
      borderColor: '#38A169',
      borderWidth: 1,
      borderRadius: 5,
      padding: 5,
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
      marginTop: 10
    },
  })

  const alert = () => {
    Alert.alert(
      'Warning',
      'Do you want to continue?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.textAreaContainer} >
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Type something..."
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
        />
      </View>
      <Button
        buttonStyle={styles.buttonSend}
        title='SEND'
      />
      <Button
        buttonStyle={styles.buttonCancel}
        type='outline'
        title='Cancel'
        onPress={alert}
      />
    </View>
  )
}
