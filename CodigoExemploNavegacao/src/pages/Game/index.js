
import { StyleSheet, Text, View } from 'react-native';
import Historia from '../../components/Historia';
import Jogar from '../../components/Jogar';
import Card from '../../components/Card';
export default function Games() {
  return (
    <View style={styles.container}>
       <Text> LISTAR GAMES </Text>
        <Card></Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#231f20',
    alignItems: 'center',
    
  },
});
