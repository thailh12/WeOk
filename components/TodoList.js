import React from 'react'
import { View, Text } from 'react-native'
import { CheckBox, Divider } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'

const state = {
  list: [
    { description: 'Prepare an emergency kit', completed: false },
    { description: 'Prepare a household flood plan', completed: false },
    { description: 'Keep a list of emergency telephone numbers on display', completed: false },
    {
      description:
        'Place important personal documents, valuables and vital medical supplies into a waterproof case in an accessible location',
      completed: false,
    },
  ],
}
class TodoList extends React.Component {
  render() {
    return (
      <View>
        {state.list.map((item, index) => {
          return (
            <View key={index}>
              <TouchableOpacity
                onPress={() => {
                  state.list[index].completed = true
                  this.forceUpdate()
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <CheckBox checkedColor="green" checked={item.completed} />
                  <Text
                    style={{
                      textDecorationLine: item.completed ? 'line-through' : 'none',
                      textDecorationStyle: 'solid',
                    }}
                  >
                    {item.description}
                  </Text>
                </View>
              </TouchableOpacity>
              <Divider/>
            </View>
          )
        })}
      </View>
    )
  }
}

export default TodoList
