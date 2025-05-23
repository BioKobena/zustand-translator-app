import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'

const Login = () => {
    const navigation = useNavigation()

    useEffect(() => {
    navigation.setOptions({options: { headerShown: false }})
    //   return () => {
    //     second
    //   }
    }, [])
    
  return (
    <View>
      <Text>Login</Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})