
import React, {
  Component
} from 'react';
import Tabs from './component/tabs'
import Body from './component/body'
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'

import store from './store'


class App extends Component{

  render(){
    return(
      <Provider store={store}>
  <View style={styles.container}>
<View style={styles.haeder}>
  <Text style={styles.textHaeder}>My Discoveries</Text>
</View>
<View style={styles.tabs}> 
  <Tabs/>
</View>
<View style={styles.body}>
  <Body/>
</View>
  </View>
      </Provider>

); 
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  haeder: {
    flex:1,
    justifyContent: "flex-end",
    alignItems:'center',
    backgroundColor: '#2C73D2',
  },
  textHaeder:{
    fontSize: 21,
    color: '#fff'
  },
  tabs: {
    flex:1,
    backgroundColor: '#2C73D2',
    paddingTop: 20

  },
  body:{
    flex: 10,
  }
});
export default App;