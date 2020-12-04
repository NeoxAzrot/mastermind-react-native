import React from 'react'
import { View, Text, Button } from 'react-native'

// Composant pour l'écran de victoire
export default ({ guesses, onReset }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#1D1D1D" }}>
    <Text style={{ color: "#FFFFFF", fontSize: 50, marginBottom: 20 }}>Bravo 🎉</Text>
    <Text style={{ color: "#FFFFFF", fontSize: 20, textAlign: "center", marginBottom: 80 }}>Vous avez gagné en {guesses} tentatives !</Text>
    <View style={{ width: 200 }}>
      <Button
        onPress={onReset}
        title="Recommencer"
        color="#383636"
        accessibilityLabel="Recommencer"
      />
    </View>
  </View>
)
