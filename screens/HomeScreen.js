import React from 'react'
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Swiper from 'react-native-swiper'


const Slide = props => {
  return (<View style={styles.slide}>
    <Image onLoad={props.loadHandle.bind(null, props.i)} style={styles.image} source={{uri: props.uri}} />
    {
      !props.loaded && <View style={styles.loadingView}>
      </View>
    }
  </View>)
}
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }
  constructor (props) {
    super(props)
    this.state = {
      imgList: [
        'https://facebook.github.io/react-native/docs/assets/favicon.png',
        'https://facebook.github.io/react-native/docs/assets/favicon.png',
      ],
      loadQueue: [0, 0, 0, 0]
    }
    this.loadHandle = this.loadHandle.bind(this)
  }
  loadHandle (i) {
    let loadQueue = this.state.loadQueue
    loadQueue[i] = 1
    this.setState({
      loadQueue
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleH}>Travel</Text>
        <Swiper loadMinimal loadMinimalSize={1} style={styles.wrapper} loop={false}>
          {
            this.state.imgList.map((item, i) => <Slide
              loadHandle={this.loadHandle}
              loaded={!!this.state.loadQueue[i]}
              uri={item}
              i={i}
              key={i} />)
          }
        </Swiper>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 8,
    // justifyContent: 'center',
    // alignItems: 'stretch',
    // backgroundColor: '#fff',
  },
  wrapper: {
    flex: 8,
  },
  titleH:{
    fontWeight: 'bold',
    lineHeight: 37,
    fontSize: 28,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  image: {
    width: 1,
    flex: 1,
    backgroundColor: 'transparent'
  },

  loadingView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.5)'
  },
})
