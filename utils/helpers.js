// Déclaration des fonctions global
import { DROP_AREA_MIN, DROP_AREA_MAX, CURRENT_STEP } from './constants'
import theme from './theme'

export const isInDropArea = y => y > DROP_AREA_MIN && y < DROP_AREA_MAX
export const positionInDropArea = x => parseInt(x / (CURRENT_STEP), 10)
export const positionReleased = ({ moveX, moveY }) => (isInDropArea(moveY)
  ? positionInDropArea(moveX)
  : -1)
export const genNewPassword = () => {
  let password = []
  for(let i = 0; i < 4; i++) {
    password.push(theme.balls[getRandom(0, theme.balls.length-1)])
  }
  return ['#48ADA2', '#F2982F', '#48ADA2', '#48ADA2']
}

const getRandom = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min +1)) + min
}

//['#48ADA2', '#48ADA2', '#48ADA2', '#48ADA2']