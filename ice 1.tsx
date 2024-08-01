import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
const ToDoWork =[
{id:1,task:"Playing video games"},
{id:2,task:"playing soccer"},
{id:3,task:"reading novels"},
{id:4,task:"wacthing soccer"},
{id:5,task:"spending times with friends and family"},

]
  


  return (
    <View style={styles.container}>
    <Text style={styles.headingText}>To Do list:</Text>
    <FlatList
    style={styles.listView}
    data={ToDoWork}
    keyExtractor={(item, index) => index.toString()}
    renderItem={({item})=>(
      <View style={styles.itemContainer}>
        <Text>task {item.id} </Text>
        <Text>task {item.task} </Text>

         </View>
         
    )}     
    ItemSeparatorComponent={()=> <View style={ styles.container}/>}



/>
  </View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headingText:{flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',},
  listView:{flex: 1,
    backgroundColor: '#fff',
   },
  itemContainer:{flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',},
  



  });

    
  
