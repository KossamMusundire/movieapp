import { View, Text,StyleSheet ,ImageBackground ,Pressable} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'  

import icedCoffeeImg from "@/assets/images/iced-coffee.png"


const app = () => {
  return (
    <View style={styles.container}>
    <ImageBackground source={icedCoffeeImg}
    resizeMode='cover' style={styles.image}>
      <Text style ={styles.title}>Coffee Shop</Text>

      <Link href="/explore" style={{marginHorizontal:`auto`}} 
      asChild>
        <Pressable style={styles.button}>
          <Text styles ={styles.buttonText}>Explore</Text></Pressable>
      
        </Link>


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
    resizeMode: 'cover',

  },
  title: {
    fontSize: 42,
    color: 'white',
    fontWeight:'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 120,
  },
  link: {
    fontSize: 42,
    color: 'white',
    fontWeight:'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 4,
  },
  button:{
    height: 60,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    padding: 6,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight:'bold',
    textAlign: 'center',
   
    padding: 4,
  }


})