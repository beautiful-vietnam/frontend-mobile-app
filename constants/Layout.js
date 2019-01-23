import { Dimensions } from 'react-native'

// eslint-disable-next-line prefer-destructuring
const width = Dimensions.get('window').width
// eslint-disable-next-line prefer-destructuring
const height = Dimensions.get('window').height

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
}
