import React from 'react'
import { View, ScrollView, StyleSheet, Text, TextInput } from 'react-native'
import { Button } from 'react-native-elements'

export default class Information extends React.Component {
    
    render() {
        const { name, phone, relationship } = this.props.navigation.state.params
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Text style={{ fontSize: 26, marginVertical: 10 }}>Information</Text>
                    <Text style={styles.label}>Full name</Text>
                    <TextInput
                        style={styles.inputText}
                        value={name}
                    />
                    <Text style={styles.label}>Phone</Text>
                    <TextInput
                        style={styles.inputText}
                        value={phone + ''}
                    />
                    <Text style={styles.label}>Relationship</Text>
                    <TextInput
                        style={styles.inputText}
                        value={relationship}
                    />
                    <Button
                        title='Save'
                        buttonStyle={{ backgroundColor: '#38A168' }}
                        onPress={() => this.props.navigation.navigate('Links')}
                    />
                    <Button
                        title='Cancel'
                        type='outline'
                        buttonStyle={{ borderColor: '#38A168', marginTop: 8 }}
                        titleStyle={{ color: '#38A168' }}
                        onPress={() => this.props.navigation.navigate('Links')}

                    />
                </View>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 8
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

})