import React, {
    Component
} from 'react';
import {
  connect
} from 'react-redux';
import {
  fetchContent
} from './../actions'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';


class Tabs extends Component {
    render(){
      const { urlList} = this.props
        return(
            <View style={styles.container}>
              {urlList.map((item)=>{
                return(
                <TouchableOpacity
                onPress={() =>this.props.fetchContent(item.url, item.id)}
                style={styles.btn}>
                  
                  <Text style={styles.btnText}>{item.name}
                 </Text>
                 <View style={item.active ? styles.childView: null}> 
                  </View>
                </TouchableOpacity>
                )
              })}
            </View>
        )
    }
}
const mapStateToProps = (state) => {
  const {urlList} = state.listUrl
  return {
    urlList
   };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContent:(url, id)=> fetchContent(dispatch)(url, id),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: "space-around",
    },
    btn: {
      flex:1,
      backgroundColor: "none",
      alignItems: 'center',
    },
    btnText: {
      textTransform: "uppercase",
      fontSize: 15,
      color: '#fff',
    },
    childView: {
      marginTop: 10,
      width: 100,
      borderBottomWidth :4,
      borderBottomColor: '#ff0000', 
   }
  });
