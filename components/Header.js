import React from 'react'
import { Text, View } from 'react-native'
import { EXPO_CONSTANTS } from '../utils/constants'

// Composant pour le header de l'application : le titre, etc.
export default () => (
  <View
    style={{
      marginTop: EXPO_CONSTANTS.statusBarHeight,
      height: EXPO_CONSTANTS.statusBarHeight * 3,
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <Text
      style={{
        color: "#FFFFFF",
        fontSize: 24
      }}>MasterMind</Text>
  </View>
)
