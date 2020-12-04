import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { BALL_SIZE } from '../utils/constants'
import Guess from './Guess'

// Composant pour la view général de tous les anciens coup de l'utilisateur
export default class extends React.Component {
  render() {
    const { guesses } = this.props

    return (
      // On utilise une ScrollView pour pouvoir scroll si on doit faire énormément de coup
      <ScrollView
        style={{ flex: 1 }}
        ref={(ref) => {
          this.scrollView = ref
        }}
        onContentSizeChange={() => {
          this.scrollView.scrollToEnd({ animated: true })
        }}
      >
        { // Permet d'afficher tous les coups automatiquement
          guesses.map((guess, iG) => (
            <View
              key={iG}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly'
              }}
            >
              {/* Affiche les balles */}
              <Guess guess={guess} size={BALL_SIZE} />

              <View
                style={{
                  backgroundColor: 'none',
                  height: BALL_SIZE,
                  width: BALL_SIZE,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* Affiche les bons et mauvais placés */}
                <Text style={{ color: '#F0F3F6' }}>{guess.result.full}</Text>
                <Text style={{ color: '#C63838' }}>{guess.result.half}</Text>
              </View>
            </View>
          ))
        }
      </ScrollView>
    )
  }
}
