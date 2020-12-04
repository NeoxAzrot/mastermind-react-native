import React from 'react'
import { View, Button } from 'react-native'
import Draggable from './Draggable'
import { CURRENT_HEIGHT } from '../utils/constants'
import theme from '../utils/theme'

// Composant pour l'endroit où l'utilisateur met ses balles pour jouer
export default ({
  guess, size, onSwap, onConfirm,
}) => (
  <>
  {/* Button pour confirmer son choix quand les 4 espaces sont pleins */}
    {!guess.items.includes(null) && <Button color="#383636" title="Confirmer la sélection" onPress={onConfirm} />}

    <View
      style={{
        flexDirection: 'row',
        height: CURRENT_HEIGHT,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderTopColor: theme.separator,
        borderTopWidth: 1
      }}
    >
      { // Crée automatiquement le nombre d'entrée possible en fonction du nombre d'item qu'on utilise
          guess.items.map((item, iI) => (
            item ? (
              <Draggable
                key={iI}
                color={item}
                size={size}
                onSelect={position => onSwap(iI, position)}
              />
            ) : (
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
                    backgroundColor: 'transparent',
                    borderColor: 'black',
                    borderWidth: 1,
                    borderRadius: size * 2,
                    zIndex: -1
                  }}
                />
              </View>
            )))
        }
    </View>
  </>
)
