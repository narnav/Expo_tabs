import { StyleSheet ,Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabWagaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>waga</Text>
      <Image
        source={{ uri: 'https://picsum.photos/200' }} style={styles.image}
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      

      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image:{
    width: '80%',
    height: '80%'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
