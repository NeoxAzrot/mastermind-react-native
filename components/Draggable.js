import React, { Component } from 'react'
import { View, PanResponder, Animated } from 'react-native'

import { positionReleased } from '../utils/helpers'

// Composant pour le drag & drop - voir la documentation : https://reactnative.dev/docs/panresponder et https://reactnative.dev/docs/animated 
export default class Draggable extends Component {
  state = {
    opacity: new Animated.Value(1),
    pan: new Animated.ValueXY({ x: 0, y: 0 }),
  };

  componentWillMount() {
    const { pan } = this.state

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {useNativeDriver: false}),
      onPanResponderRelease: this.handleRelease
    })
  }

  handleRelease = (_, gesture) => {
    const { onSelect } = this.props
    const { opacity, pan } = this.state
    const position = positionReleased(gesture)

    if (position >= 0) {
      onSelect(position)
      opacity.setValue(0)
      pan.setValue({ x: 0, y: 0 })
      Animated.timing(
        opacity,
        {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }
      ).start()
    } else {
      Animated.timing(
        pan,
        {
          toValue: {
            x: 0,
            y: 0,
          },
          duration: 300,
          useNativeDriver: true,
        }
      ).start()
    }
  }

  render() {
    const { size, color } = this.props
    const { opacity, pan } = this.state

    return (
      <View style={{ width: size, alignItems: 'center' }}>
        <Animated.View
          {...this.panResponder.panHandlers}
          style={{
            height: size,
            width: size,
            borderRadius: size,
            backgroundColor: color,
            opacity,
            transform: pan.getTranslateTransform()
          }}
        />
      </View>
    )
  }
}
