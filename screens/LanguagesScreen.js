import React from 'react'
import { View, StyleSheet } from 'react-native'
import { List, ListItem, Text, Icon } from 'react-native-elements'

const list = [
  {
    title: 'English',
    value: 'en',
  },
  {
    title: 'Tiếng Việt',
    value: 'vi',
  },
  {
    title: 'Laos',
    value: 'la',
  },
  {
    title: 'Japanese',
    value: 'jp',
  },
]

export default class Languages extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // eslint-disable-next-line react/no-unused-state
      langCurrent: 'en',
    }
  }

  changLanguage = language => {
    this.setState({
      langCurrent: language,
    })
  }

  render() {
    return (
      <View style={styles.wrapContent}>
        <Text h2>Language</Text>
        <List>
          {list.map(item => {
            if (this.state.langCurrent === item.value) {
              return (
                <ListItem
                  key={item.value}
                  title={item.title}
                  titleStyle={styles.langCurrent}
                  onPress={() => this.changLanguage(item.value)}
                  rightIcon={<Icon name="check" color="#FD5739" />}
                />
              )
            } else
              return (
                <ListItem
                  key={item.value}
                  title={item.title}
                  hideChevron
                  onPress={() => this.changLanguage(item.value)}
                />
              )
          })}
        </List>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapContent: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  langCurrent: {
    color: '#FD5739',
    fontWeight: 'bold',
  },
})
