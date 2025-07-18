import { View, Text,StyleSheet ,ImageBackground } from 'react-native'
import React from 'react'
import icedCofee from '@./assets/iced-coffee.jpg'

const app = () => {
  return (
    <View style={styles.container}>
    <ImageBackground source={icedCofee}
    resizeMode='cover'>
      <Text style ={styles.container}>Coffee Shop</Text>
      </ImageBackground>
    </View>
  )
}

export default app
const styles = StyleSheet.create({
  container: {
    flex: 1,
  flexDirection: 'column',},
  image: {
    widthd: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 42,
    color: 'white',
    fontWeight:'bold'}


})