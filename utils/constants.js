// Déclaration des variables global
import { Dimensions } from 'react-native'
import Constants from 'expo-constants';

export const WIDTH = Dimensions.get('window').width
export const HEIGHT = Dimensions.get('window').height
export const PASSWORD_LENGTH = 4
export const BALL_SIZE = 60
export const CURRENT_HEIGHT = BALL_SIZE * 1.5
export const BALL_CONTAINER_SIZE = BALL_SIZE
export const DROP_AREA_MIN = HEIGHT - (BALL_CONTAINER_SIZE + CURRENT_HEIGHT)
export const DROP_AREA_MAX = HEIGHT - BALL_CONTAINER_SIZE
export const CURRENT_STEP = WIDTH / PASSWORD_LENGTH

export const EXPO_CONSTANTS = Constants;