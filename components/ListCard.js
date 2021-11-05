import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class ListCard extends React.Component {
  constructor(){
    super()
    this.state={
      list:null
    }
  }
  componentDidMount(){
    
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>{this.props.list.item}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#1b5c74',
    flex:1
  },
  text:{
    color:'white',
    size:15,
  }
})