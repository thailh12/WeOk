
import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { Button, Avatar, Image } from 'react-native-elements'
import { Subscribe } from 'unstated'
import container from '../containers/container'
import Card from '../components/Card'

export default class ListMembers extends React.Component {
    render() {
        return (
            <Subscribe to={[container]}>
                {container => {
                    const {following} = container.state
                    return (
                        <ScrollView>
                            <View style={styles.container}>
                                <Button
                                    type='outline'
                                    title='Add new person'
                                    buttonStyle={{ marginHorizontal: 15, marginBottom: 15, borderColor: '#38A168' }}
                                    titleStyle={{ color: '#38A168' }}
                                />
                                {
                                    following.map((per) => {
                                        return (
                                            <View
                                                key={per.phone}
                                                style={{
                                                    flex: 1,
                                                    flexDirection: 'row',
                                                    borderColor: '#a0a0a0',
                                                    borderWidth: 0.5,
                                                    marginBottom: 10,
                                                    borderRadius: 5,
                                                    backgroundColor: '#dad7d766',
                                                    marginHorizontal: 16
                                                }}
                                            >
                                                <View
                                                    style={{
                                                        flex: 1,
                                                        marginBottom: 10,
                                                        borderRadius: 5,
                                                        flexDirection: 'row',
                                                        borderColor: '#a0a0a0',
                                                        borderRadius: 5,
                                                    }}
                                                >
                                                    <Avatar
                                                        size="medium"
                                                        rounded
                                                        style={{ width: 50, height: 50, margin: 15 }}
                                                        source={{ uri: 'https://picsum.photos/200.jpg' }}
                                                    />
                                                    <View style={{ margin: 10 }}>
                                                        <Text style={{ marginBottom: 3, color: '#525252' }}>{per.name}</Text>
                                                        <Text style={{ marginBottom: 3, color: '#525252' }}>{per.phone}</Text>
                                                        <Text style={{ marginBottom: 3, color: '#525252' }}>{per.relationship}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        </ScrollView>
                    )
                }
                }
            </Subscribe>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1,
        paddingHorizontal: 8
    },
    title: {
        fontSize: 18,
        marginVertical: 10,
        marginLeft: 15
    },
    member: {

    },
    text: {
        marginLeft: 10
    }
})

