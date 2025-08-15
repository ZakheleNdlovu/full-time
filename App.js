import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeComp from './components/PremierLeague/Home/HomeComp';
import ControlPanel from './components/Navigation/ControlPanel';
import EPLPrevious from './components/PremierLeague/PreviousGames/EPLPrevious';


export default function App() {
  return (
    <View style={styles.container}>
      <ControlPanel />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30
  },
});
