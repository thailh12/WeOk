import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { Button, Avatar, Card, Image } from 'react-native-elements'

export default class ListMembers extends React.Component {

    state = {
        people: [{ name: 'Nguyen Thai Bao', phone: '1234567890', relation: 'Brother' }, { name: 'Lam Ha Thai', phone: '1234098765', relation: 'Mother' }, { name: 'Pham Ngoc Hoa', phone: '7209485720', relation: 'Lover' }]
    }
    // const [people, setPeople] = React.useState([{name: 'Nguyen Thai Bao', phone: '1234567890', relation: 'Brother'}, {name: 'Lam Ha Thai', phone: '1234098765', relation: 'Mother'}, {name: 'Pham Ngoc Hoa', phone: '7209485720', relation: 'Lover'}])
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Close People</Text>
                    <Button
                        type='outline'
                        title='Add new person'
                        style={{ marginHorizontal: 15 }}
                    />
                    {
                        this.state.people.map((per, index) => {
                            return <Card
                                style={styles.member}
                                key={index}
                                containerStyle={{ flexDirection: 'row', }}
                            >
                                {/* <Avatar
                                    rounded
                                    size='medium'
                                    source={{
                                        uri: 'https://picsum.photos/100.jpg'
                                    }}
                                /> */}
                                <Image
                                    style={styles.image}
                                    resizeMode="cover"
                                    source={{ uri: 'https://picsum.photos/100.jpg' }}
                                />
                                {/* <Text style={styles.name}>{u.name}</Text> */}
                                <View style={styles.text}>
                                    <Text>{per.name}</Text>
                                    <Text>{per.phone}</Text>
                                    <Text>{per.relation}</Text>
                                </View>
                            </Card>
                        })
                    }
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