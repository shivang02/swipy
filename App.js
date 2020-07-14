import React, {Component} from 'react'
import {Text, View, StyleSheet } from 'react-native'

const App = ()=> {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Hello my World</Text>
    </View>
  )
}
export default App

const styles= StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  text :{
    color:"red",
    fontSize:20
  }
})