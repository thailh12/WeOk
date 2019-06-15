import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native'
import { Button } from 'react-native-elements'

export default function SendMessage() {
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
    buttonStyle: {
      borderRadius: 0,
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
      borderRadius: 5,
      backgroundColor: '#38A169',
    }
  })

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
        buttonStyle={styles.buttonStyle}
        title='SEND' />
    </View>
  )
}

