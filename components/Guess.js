import React from 'react'
import { View } from 'react-native'

// Composant pour affichers les balles des anciens coup que l'utilisateur a fait qui en génère automatiquement en fonction du nombre d'item qu'on utilise
export default ({ guess, size }) => guess.items.map((item, iI) => (
  <View
    key={iI}
    style={{
      height: size,
      width: size,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <View
      style={{
        height: size * 0.8,
        width: size * 0.8,
        backgroundColor: item || 'transparent',
        borderColor: item || 'red',
        borderWidth: 1,
        borderRadius: size * 2
      }}
    />
  </View>
))
