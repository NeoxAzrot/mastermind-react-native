/***************************************************************************
*
*	@name: Mastermind
*	@description: Le but du jeu est de deviner la combinaison difficilement déchiffrable en un minimum de coup et de temps.
*	@author: Sami Lafrance - contact@samilafrance.com
*	@website: https://www.samilafrance.com
*	@version: 1.0.0
*
*	@copyright Copyright ©2020 - All rights reserved
*
* @design: Elise Echasseriau
***************************************************************************/

import React from 'react'
import { View, StatusBar } from 'react-native'

import CurrentGuess from './components/CurrentGuess'
import Guesses from './components/Guesses'
import Balls from './components/Balls'
import GameWon from './components/GameWon'
import Header from './components/Header'

import { BALL_SIZE, PASSWORD_LENGTH } from './utils/constants'
import { genNewPassword } from './utils/helpers'
import theme from './utils/theme'

export default class App extends React.Component {
  // Mon objet Mastermind
  state = {
    password: {
      items: genNewPassword(),
    },
    oldGuesses: [],
    currentGuess: {
      items: [null, null, null, null],
    },
    balls: theme.balls,
    won: false,
  }

  // Vérification de la réponse
  confirmGuess = () => {
    const { currentGuess, oldGuesses, password } = this.state
    currentGuess.result = {
      half: 0,
      full: 0,
    }
    let passwordChecked = [false, false, false, false] // Pour mettre le pion en false quand il est vérifié
    let currentGuessChecked = [false, false, false, false] // Pour mettre le pion en false quand il est vérifié
    // Vérification des bons résultats
    for (let i = 0; i < password.items.length; i++) {
      if(password.items[i] == currentGuess.items[i]) {
        currentGuess.result.full += 1
        passwordChecked[i] = currentGuessChecked[i] = true // Évite de vérifier plusieurs fois le même pion
      }
    }
    // Vérification des mauvais résultats
    for (let i = 0; i < currentGuess.items.length; i++) {
      for (let j = 0; j < passwordChecked.length; j++) {
        if(!currentGuessChecked[i] && !passwordChecked[j]) { // On vérifie si on a déjà trouver que c'était bien placé
          if (currentGuess.items[i] == password.items[j]) {
            currentGuess.result.half += 1
            passwordChecked[j] = currentGuessChecked[i] = true // Évite de vérifier plusieurs fois le même pion
          }
        }
      }
    }
    oldGuesses.push(currentGuess) // Permet de garder en mémoire les anciennes positions pour les affichers à l'écran
    this.setState({
      oldGuesses,
      currentGuess: {
        items: [null, null, null, null]
      },
      won: currentGuess.result.full === PASSWORD_LENGTH, // Permet par la suite de vérifier la condition de victoire
    })
  }

  // Permet de mettre une couleur dans le sélecteur
  handleSelect = (color, position) => {
    const { currentGuess } = this.state
    currentGuess.items[position] = color
    this.setState({ currentGuess })
  }
  // Permet de swap les positions quand on a déjà mis une couleur
  handleSwap = (from, to) => {
    const { currentGuess } = this.state
    const aux = currentGuess.items[from]
    currentGuess.items[from] = currentGuess.items[to]
    currentGuess.items[to] = aux
    this.setState({ currentGuess })
  }

  render() {
    const {
      balls, currentGuess, oldGuesses, won
    } = this.state
    
    // Vérification de la condition de victoire à chaque coup
    if (won) {
      return (
        <GameWon
          guesses={oldGuesses.length}
          onReset={() => {
            this.setState({
              won: false,
              oldGuesses: [],
              password: { items: genNewPassword() },
            })
          }}
        />
      )
    }

    // Return la view sur l'application
    return (
      <View style={{ flex: 1, backgroundColor: theme.background }}>
        <Header />

        <Guesses guesses={oldGuesses} />

        <CurrentGuess
          guess={currentGuess}
          size={BALL_SIZE}
          onSwap={this.handleSwap}
          onConfirm={this.confirmGuess}
        />

        <Balls balls={balls} size={BALL_SIZE * 0.7} onSelect={this.handleSelect} />
        <StatusBar barStyle="light-content"/>
      </View>
    )
  }
}