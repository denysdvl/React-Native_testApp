import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import {
    fetchContent
  } from './../actions'
import  Loader from './loader'
import moment from "moment";
import {Image, FlatList, StyleSheet, Text, View } from 'react-native';


const ContentList = ({ item}) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.name}>{item.author}</Text>
                <Text style={styles.date}>{moment(`${item.publishedDate}`, "YYYYMMDD").fromNow()}</Text>
            </View>
            <View style={styles.body}>
            <Text style={styles.title}>{item.title}</Text>
            <Image source={{uri: `${item.urlImage}`}}
             style={{width: 350, height: 200}} />
             <Text style={styles.content}>{item.description}</Text>
            </View>
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
     flex: 1,
     padding: 13
    },
    header: {
        flex: 1,
      flexDirection: 'row',
      justifyContent: "space-between"
    },
    name: {
        flex: 4,
        fontSize: 12,
        color: '#000',
    },
    date: {
        flex: 2,
        fontSize: 10, 
        color: '#909d96',
        textAlign: "right"
    },
    body: {
        flex: 11,
    },
    title: {
        fontSize: 15, 
        color: '#000'
    },
    content: {
        fontSize: 12,
        color: '#909d96'
    }

  })

class Body extends Component{
componentDidMount(){
    const urlStart = this.props.urlList[0]
    this.props.fetchContent(urlStart.url, urlStart.id)
}


    render(){
        const { content, loading} = this.props
        if(loading){
            return (
                <Loader/>
            )
        }
        return(
               <View>
                <FlatList
          data={content}
          renderItem={({item}) =><ContentList item={item}/>}
        />
            </View> 
            
        )
    }
}

const mapStateToProps = (state) => {
    const {contentList: {content, loading}, listUrl: {urlList}} = state
     return {
        content,
        loading,
        urlList
      };
 };
 
 const mapDispatchToProps = (dispatch) => {
  return {
    fetchContent:(url, id)=> fetchContent(dispatch)(url, id),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);