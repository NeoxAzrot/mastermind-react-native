import React from 'react'
import { View } from 'react-native'
import Draggable from './Draggable'
import { BALL_CONTAINER_SIZE } from '../utils/constants'
import theme from '../utils/theme'

// Composant pour l'outil avec toutes les balles de l'utilisateur
export default ({ balls, size, onSelect }) => (
  <View
    style={{
      flexDirection: 'row',
      height: BALL_CONTAINER_SIZE,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      borderTopColor: theme.separator,
      borderTopWidth: 1,
      backgroundColor: "#383636"
    }}
  >
    {
      balls.map(ball => ( // Génère une palette de balle automatiquement en fonction du nombre de couleurs
        <Draggable
          key={ball}
          color={ball}
          size={size}
          onSelect={position => onSelect(ball, position)}
        />
      ))
    }
  </View>
)
