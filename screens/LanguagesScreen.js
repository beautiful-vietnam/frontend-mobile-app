import React from 'react'
import { View } from 'react-native'
import { List, ListItem, Text, Icon } from 'react-native-elements'

const list = [
  {
    title: 'English',
    value: 'Eng',
  },
  {
    title: 'Tiếng Việt',
    value: 'VN',
  },
  {
    title: 'Laos',
    value: 'Lao',
  },
  {
    title: 'Japanese',
    value: 'Jav',
  },
]

export default class Languages extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{ margin: 20 }}>
          <Text h2>Language</Text>
          <List>
            {list.map(item => {
              if (item.value === 'Eng') {
                return (
                  <ListItem
                    title={item.title}
                    titleStyle={{ color: '#FD5739', fontStyle: 'bold' }}
                    rightIcon={<Icon name="check" color="#FD5739" />}
                  />
                )
              }
              return <ListItem title={item.title} hideChevron />
            })}
          </List>
        </View>
      </View>
    )
  }
}
