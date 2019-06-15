import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { Button, Avatar, Image } from 'react-native-elements'
import { Subscribe } from 'unstated'
import container from '../containers/container'
import Card from '../components/Card'

export default class ListMembers extends React.Component {

    state = {
        following: [{ name: 'Nguyen Thai Bao', phone: '1234567890', relationship: 'Brother' }, { name: 'Lam Ha Thai', phone: '1234098765', relationship: 'Mother' }, { name: 'Pham Ngoc Hoa', phone: '7209485720', relationship: 'Lover' }]
    }
    render() {
        return (
            <Subscribe to={[container]}>
                {container => {
                    return (
                        <ScrollView>
                            <View style={styles.container}>
                                <Text style={styles.title}>Closed People</Text>
                                <Button
                                    type='outline'
                                    title='Add new person'
                                    buttonStyle={{ marginHorizontal: 15, marginBottom: 15, borderColor: '#38A168' }}
                                    titleStyle={{ color: '#38A168' }}
                                />
                                {
                                    this.state.following.map((per) => {
                                        return (
                                            <View
                                                key={per.phone}
                                                style={{
                                                    flex: 1,
                                                    flexDirection: 'row',
                                                    borderColor: 'grey',
                                                    borderWidth: 0.5,
                                                    marginBottom: 10,
                                                    borderRadius: 9,
                                                    backgroundColor: '#dad7d766',
                                                    marginHorizontal: 16
                                                }}
                                            >
                                                <View
                                                    style={{
                                                        flex: 1,
                                                        marginBottom: 10,
                                                        borderRadius: 4,
                                                        flexDirection: 'row',
                                                        borderColor: 'grey',
                                                        borderRadius: 4,
                                                    }}
                                                >
                                                    <Avatar
                                                        size="medium"
                                                        rounded
                                                        style={{ width: 50, height: 50, margin: 15 }}
                                                        source={{ uri: 'https://picsum.photos/200.jpg' }}
                                                    />
                                                    <View style={{ margin: 10 }}>
                                                        <Text style={{ marginBottom: 3 }}>{per.name}</Text>
                                                        <Text style={{ marginBottom: 3 }}>{per.phone}</Text>
                                                        <Text style={{ marginBottom: 3 }}>{per.relationship}</Text>
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