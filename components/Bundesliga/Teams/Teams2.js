import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Teams2 = ({ team }) => {

    const navigation = useNavigation()
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {team.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => navigation.navigate('Team Details', { team: item.team })}>
                    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd', flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={{ uri: item.team.logos[0].href }} width={50} height={50} />
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>{item.team.name}</Text>

                    </View>
                </TouchableOpacity>
            ))}
            <View style={{ height: 100 }}></View>
        </ScrollView>
    )
}

export default Teams2