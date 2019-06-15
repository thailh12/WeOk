import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function SettingsScreen() {

  const [person, setPerson] = React.useState([{name: 'John Smith', phone: '1234567890'}])

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 8
        }}
      >
        <Icon 
          name='users'
          size={24}
          color='#4388d6'
        />
        <Text style={styles.title}>Family Numbers</Text>
      </View>
        <Text style={styles.describle}>You can add your family numbers, so that we can notify them in case you are in dangerous.</Text>
        {
          person.map((per, index) => {
            return <React.Fragment key={index}>
              <View style={styles.phone}>
              <Text style={{ fontSize: 18 }}>Person {index+1}</Text>
              <Input 
                placeholder='Contact name'
                leftIcon={
                  <Icon
                    name='user'
                    color='#4388d6'
                    size={24}
                  />
                }
                defaultValue={per.name}
                leftIconContainerStyle= {{ marginRight: 4 }}
                onChange={(e) => {
                  person[index].name = e.value
                  setPerson(person)
                }}
              />
              <Input 
                placeholder="Phone number"
                leftIcon={
                  <Icon
                    name='phone'
                    color='#4388d6'
                    size={24}
                  />
                }
                defaultValue={per.phone}
                leftIconContainerStyle= {{ marginRight: 4 }}
                onChange={e => {
                  person[index].phone = e.value
                  setPerson(person)
                }}
              />
            </View>
            </React.Fragment>
            
          })
        }
        <View style={styles.allButtons}>
          <Button
            title='Add more'
            style={{ marginRight: 8, width: 80 }}
            onPress={() => {
              setPerson([...person, {name: '' , phone : ''}])
            }}            
          />
          <View
            style={ styles.buttons }
          >
            <Button
              title='Save'
              style={{ marginRight: 8, width: 80 }}
              onPress={() => alert('Saved')}
            >
            </Button>
            <Button
              title='Cancel'
              type={'outline'}
              style={{ marginRight: 8, width: 80 }}
            />
          </View>
        </View>
    </View>
  )
}

SettingsScreen.navigationOptions = {
  title: 'Settings',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    marginLeft: 8
  },
  phone: {
    marginTop: 15,
    marginBottom: 10
  },
  describle: {
    color: '#D1D5DB'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  allButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})