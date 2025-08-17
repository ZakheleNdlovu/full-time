import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

const LLEventDetails = ({ game }) => {

    if (game.competitions[0].details[0])
        return (
            <ScrollView style={{ marginVertical: 20 }}>
                <View style={{ padding: 10, width: '95%', alignSelf: 'center', borderWidth: 1, borderColor: 'black', borderRadius: 5 }}>
                    <Text style={{ alignSelf: 'center', fontSize: 17, fontWeight: 'bold' }}>Game Events</Text>
                </View>
                <View style={{ borderRadius: 10, width: '95%', alignSelf: 'center', height: '100%', borderColor: 'lightgray', borderWidth: 1 }} >
                    {
                        game.competitions[0].details.map((detail, i) => {

                            return (
                                <View key={i} style={{ height: 35, margin: 5, padding: 5 }}>
                                    <Text style={{ fontSize: 15 }}> - {detail.athletesInvolved ? detail.athletesInvolved[0].fullName : null}
                                        ({detail.team.id == game.competitions[0].competitors[0].team.id ? game.competitions[0].competitors[0].team.name : game.competitions[0].competitors[1].team.name})
                                        - {detail.type.text} - {detail.clock.displayValue} min </Text>
                                </View>
                            )
                        })
                    }
                </View>
            </ScrollView>
        )



}

export default LLEventDetails