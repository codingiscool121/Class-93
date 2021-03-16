import React ,{Component} from 'react'
import {View, Text,TouchableOpacity,ScrollView,FlatList,StyleSheet, Input, Icon, TextInput, Alert} from 'react-native';
import firebase from 'firebase';
import db from '../config.js'
import {SafeAreaView} from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe'
export default class Entertain extends React.Component{
    constructor(props){
        super(props)
    
    }
    render(){
        return(
     <SafeAreaView  
     style={{flex:1}}
     >
         <YoutubePlayer 
         height={50}
         videoId="KVZ-P-ZI6W4"
         />
     </SafeAreaView>
            )
    }
}