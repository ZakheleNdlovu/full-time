import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import HomeComp from '../PremierLeague/Home/HomeComp'
import { NavigationContainer } from '@react-navigation/native'
import LaLIGAHome from '../LaLIGA/Home/LaLIGAHome'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SerieAHome from '../SerieA/Home/SerieAHome'
import BundesligaHome from '../Bundesliga/Home/BundesligaHome'
import League1Home from '../League1/Home/League1Home'
import PSLHome from '../PSL/Home/PSLHome'
import MLSHome from '../MLS/Home/MLSHome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AllTeams from '../PremierLeague/Teams/AllTeams'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TeamDetails from '../PremierLeague/Teams/TeamDetails'
import AllTeams1 from '../LaLIGA/Teams/AllTeams'
import TeamDetails1 from '../LaLIGA/Teams/TeamDetails'
import AllTeams2 from '../Bundesliga/Teams/AllTeams2'
import TeamDetails2 from '../Bundesliga/Teams/TeamDetails2'
import AllTeams3 from '../PSL/Teams/AllTeams3'
import TeamDetails3 from '../PSL/Teams/TeamDetails3'
import AllTeams4 from '../MLS/Teams/AllTeams4'
import TeamDetails4 from '../MLS/Teams/TeamDetails4'
import AllTeams5 from '../League1/Teams/AllTeams5'
import TeamDetails5 from '../League1/Teams/TeamDetails5'
import TeamStats from '../PremierLeague/Teams/TeamStats'
import TeamStats4 from '../MLS/Teams/TeamStats4'
import TeamStats5 from '../League1/Teams/TeamStats5'
import TeamStats3 from '../PSL/Teams/TeamStats3'
import TeamStats1 from '../LaLIGA/Teams/TeamStats'
import TeamStats2 from '../Bundesliga/Teams/TeamStats'
import AllTeams6 from '../SerieA/Teams/AllTeams6'
import TeamDetails6 from '../SerieA/Teams/TeamDetails6'
import TeamStats6 from '../SerieA/Teams/TeamStats6'
import EPLStandings from '../PremierLeague/Standings/EPLStandings'
import MLSStandings from '../MLS/Standings/MLSStandings'
import PSLStandings from '../PSL/Standings/PSLStandings'
import League1Standings from '../League1/Standings/League1Standings'
import LaLIGAStandings from '../LaLIGA/Standings/LaLIGAStandings'
import BundesligaStandings from '../Bundesliga/Standings/BundesligaStandings'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import EPLGameDetails from '../PSL/Home/GameDetails/PSLGameDetails'
import PSLGameDetails from '../PSL/Home/GameDetails/PSLGameDetails'
import MLSGameDetails from '../MLS/Home/MLSGameDetails/MLSGameDetails'
import LLGameDetails from '../LaLIGA/Home/LLGameDetails/LLGameStats'
import BGameDetails from '../Bundesliga/Home/BGameDetails/BgameDetails'
import L1GameDetails from '../League1/Home/L1GameDetails/L1GameDetails'
import SAGameDetails from '../SerieA/Home/SAGameDetails/SAGameDetails'
import SerieAStandings from '../SerieA/Standings/SeriaStandings'
import EPLPrevious from '../PremierLeague/PreviousGames/EPLPrevious'
import EPLPGameDetails from '../PremierLeague/PreviousGames/EPLPreviousDetails/EPLPGameStats'
import PSLPrevious from '../PSL/PSLPrevious/PSLPHome'
import PSLPGameDetails from '../PSL/PSLPrevious/PSLPDetails/PSLPGameDetails'
import SAPrevious from '../SerieA/SAPrevious/SAPHome'
import SAPGameDetails from '../SerieA/SAPrevious/SAPGameDetails/SAPGameDetails'
import LLPrevious from '../LaLIGA/LLPrevious/LLPrevious'
import LLPGameDetails from '../LaLIGA/LLPrevious/LLGameDetais/LLPGameDetails'
import BPrevious from '../Bundesliga/BPrevious/BPPrevious'
import BPGameDetails from '../Bundesliga/BPrevious/BPGameDetails/BPGameDetails'
import L1Previous from '../League1/L1PreviousG/L1Previous'
import L1PGameDetails from '../League1/L1PreviousG/L1GameDetails/L1PGameDetails'
import MLSPrevious from '../MLS/MLSPrevious/MLSPrevious'
import MLSPGameDetails from '../MLS/MLSPrevious/MSLPGameDetails/MLSPGameDetails'


const Drawer = createDrawerNavigator()
const BottomTab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
const Top = createMaterialTopTabNavigator()

function PremierLeagueBottomTab() {
    return (
        <BottomTab.Navigator screenOptions={{ headerShown: false }}>
            <BottomTab.Screen name='EPL Events' component={EPLGameStack} />
            <BottomTab.Screen name='EPL Previous Games' component={PrevPremStack} />
            <BottomTab.Screen name='Standings' component={EPLStandings} />
            <BottomTab.Screen name='Teams' component={EPLTeamStack} />
        </BottomTab.Navigator>
    )
}

function PrevPremStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='EPLPrev' component={EPLPrevious} />
            <Stack.Screen name='EPLPGameDetails' component={EPLPGameDetails} />
        </Stack.Navigator>
    )
}

function EPLTeamStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='EPL Teams' component={AllTeams} />
            <Stack.Screen name='Team Details' component={TeamDetails} />
            <Stack.Screen name='Team Stats' component={TeamStats} />
        </Stack.Navigator>
    )
}

function EPLGameStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='EPL Games' component={HomeComp} />
            <Stack.Screen name='EPLGameDetails' component={EPLGameDetails} />
        </Stack.Navigator>
    )
}

function LaLIGABottomTab() {
    return (
        <BottomTab.Navigator screenOptions={{ headerShown: false }}>
            <BottomTab.Screen name='Games' component={LaLIGAGameStack} />
            <BottomTab.Screen name='Previous Games' component={LaLIGAPrevStack} />
            <BottomTab.Screen name='Standings' component={LaLIGAStandings} />
            <BottomTab.Screen name='Teams' component={LaLIGATeamStack} />
        </BottomTab.Navigator>
    )
}

function LaLIGATeamStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='LaLiga Teams' component={AllTeams1} />
            <Stack.Screen name='Team Details' component={TeamDetails1} />
            <Stack.Screen name='Team Stats' component={TeamStats1} />
        </Stack.Navigator>
    )
}

function LaLIGAGameStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='LLGames' component={LaLIGAHome} />
            <Stack.Screen name='LLGameDetails' component={LLGameDetails} />
        </Stack.Navigator>
    )
}

function LaLIGAPrevStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='LLGames' component={LLPrevious} />
            <Stack.Screen name='LLPGameDetails' component={LLPGameDetails} />
        </Stack.Navigator>
    )
}

function SerieABottomTab() {
    return (
        <BottomTab.Navigator screenOptions={{ headerShown: false }}>
            <BottomTab.Screen name='Games' component={SerieAGameStack} />
            <BottomTab.Screen name='Previous Games' component={SerieAPrevStack} />
            <BottomTab.Screen name='Standings' component={SerieAStandings} />
            <BottomTab.Screen name='Teams' component={SerieATeamStack} />
        </BottomTab.Navigator>
    )
}

function SerieATeamStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Serie A Team' component={AllTeams6} />
            <Stack.Screen name='Team Details' component={TeamDetails6} />
            <Stack.Screen name='Team Stats' component={TeamStats6} />
        </Stack.Navigator>

    )
}

function SerieAPrevStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Games' component={SAPrevious} />
            <Stack.Screen name='SAPGameDetails' component={SAPGameDetails} />
        </Stack.Navigator>
    )
}

function SerieAGameStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='SAGames' component={SerieAHome} />
            <Stack.Screen name='SAGameDetails' component={SAGameDetails} />
        </Stack.Navigator>
    )
}

function BundesligaBottomTab() {
    return (
        <BottomTab.Navigator screenOptions={{ headerShown: false }}>
            <BottomTab.Screen name='Bames' component={BundesligaGameStack} />
            <BottomTab.Screen name='Previous Games' component={BundesligaPrevStack} />
            <BottomTab.Screen name='Standings' component={BundesligaStandings} />
            <BottomTab.Screen name='Teams' component={BundesligaTeamStack} />
        </BottomTab.Navigator>
    )
}

function BundesligaTeamStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Bundesliga Teams' component={AllTeams2} />
            <Stack.Screen name='Team Details' component={TeamDetails2} />
            <Stack.Screen name='Team Stats' component={TeamStats2} />

        </Stack.Navigator>
    )
}

function BundesligaGameStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='BGames' component={BundesligaHome} />
            <Stack.Screen name='BGameDetails' component={BGameDetails} />
        </Stack.Navigator>
    )
}

function BundesligaPrevStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='PrevGames' component={BPrevious} />
            <Stack.Screen name='BPGameDetails' component={BPGameDetails} />
        </Stack.Navigator>
    )
}

function League1BottomTab() {
    return (
        <BottomTab.Navigator screenOptions={{ headerShown: false }}>
            <BottomTab.Screen name='Games' component={League1GameStack} />
            <BottomTab.Screen name='Previous Games' component={League1PrevStack} />
            <BottomTab.Screen name='Standings' component={League1Standings} />
            <BottomTab.Screen name='Teams' component={League1TeamStack} />
        </BottomTab.Navigator>
    )
}

function League1TeamStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='League 1 Teams' component={AllTeams5} />
            <Stack.Screen name='Team Details' component={TeamDetails5} />
            <Stack.Screen name='Team Stats' component={TeamStats5} />
        </Stack.Navigator>
    )
}

function League1GameStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='L1Games' component={League1Home} />
            <Stack.Screen name='L1GameDetails' component={L1GameDetails} />
        </Stack.Navigator>
    )
}

function League1PrevStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='L1PGames' component={L1Previous} />
            <Stack.Screen name='L1PGameDetails' component={L1PGameDetails} />
        </Stack.Navigator>
    )
}

function PSLBottomTab() {
    return (
        <BottomTab.Navigator screenOptions={{ headerShown: false }}>
            <BottomTab.Screen name='Games' component={PSLGameStack} />
            <BottomTab.Screen name='Previous Games' component={PSLPrevStack} />
            <BottomTab.Screen name='Standings' component={PSLStandings} />
            <BottomTab.Screen name='Teams' component={PSLTeamStack} />
        </BottomTab.Navigator>
    )
}

function PSLGameStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='EPLGames' component={PSLHome} />
            <Stack.Screen name='EPLGameDetails' component={PSLGameDetails} />
        </Stack.Navigator>
    )
}

function PSLPrevStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Games' component={PSLPrevious} />
            <Stack.Screen name='PSLPGameDetails' component={PSLPGameDetails} />
        </Stack.Navigator>
    )
}

function PSLTeamStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='PSL Teams' component={AllTeams3} />
            <Stack.Screen name='Team Details' component={TeamDetails3} />
            <Stack.Screen name='Team Stats' component={TeamStats3} />
        </Stack.Navigator>
    )
}

function MLSBottomTab() {
    return (
        <BottomTab.Navigator screenOptions={{ headerShown: false }}>
            <BottomTab.Screen name='MLS Events' component={MLSGameStack} />
            <BottomTab.Screen name='Previous Games' component={MLSPrevStack} />
            <BottomTab.Screen name='Standings' component={MLSStandings} />
            <BottomTab.Screen name='Teams' component={MLSTeamStack} />
        </BottomTab.Navigator>
    )
}

function MLSTeamStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='MLS Teams' component={AllTeams4} />
            <Stack.Screen name='Team Details' component={TeamDetails4} />
            <Stack.Screen name='Team Stats' component={TeamStats4} />
        </Stack.Navigator>
    )
}

function MLSGameStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='MLS Games' component={MLSHome} />
            <Stack.Screen name='MLSGameDetails' component={MLSGameDetails} />
        </Stack.Navigator>
    )
}

function MLSPrevStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='MLSPGames' component={MLSPrevious} />
            <Stack.Screen name='MLSPGameDetails' component={MLSPGameDetails} />
        </Stack.Navigator>
    )
}

function DrawerNavigator() {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}
            drawerContent={(props) => (
                <DrawerContentScrollView {...props}>
                    <View style={{ height: '30%' }}>
                        <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center', }}>
                            <Ionicons name="football" size={50} color="black" />
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333' }}>Full-time</Text>
                        </View>

                    </View>

                    <DrawerItemList {...props} />


                </DrawerContentScrollView>
            )}>

            <Drawer.Screen name='Premier League' component={PremierLeagueBottomTab} />
            <Drawer.Screen name='La Liga' component={LaLIGABottomTab} />
            <Drawer.Screen name='Serie A' component={SerieABottomTab} />
            <Drawer.Screen name='Bundesliga' component={BundesligaBottomTab} />
            <Drawer.Screen name='League 1' component={League1BottomTab} />
            <Drawer.Screen name='PSL' component={PSLBottomTab} />
            <Drawer.Screen name='MLS' component={MLSBottomTab} />
        </Drawer.Navigator>
    )
}

const ControlPanel = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    )
}

export default ControlPanel