import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Avatar, List, ListItem } from 'react-native-elements'

export default class MyProfile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <View style={styles.info}>
          <Avatar
            large
            rounded
            source={{
              uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            }}
            activeOpacity={0.7}
          />
          <View style={styles.infoText}>
            <Text style={styles.name}>Robert Anitei</Text>
            <View style={styles.infoDescription}>
              <Text style={styles.address}>travelapp@gmail.com</Text>
              <Text style={styles.address}>FPT University</Text>
            </View>
          </View>
        </View>
        <List>
          <ListItem
            key="Language"
            title="Language"
            rightTitle="English"
            chevronColor="#FD5739"
            onPress={() => {
              this.props.navigation.navigate('languages')
            }}
          />
          <ListItem key="Privacy Policy" title="Privacy Policy" hideChevron />
        </List>
        <TouchableOpacity style={styles.SignOutBtn}>
          <Text style={styles.SignOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    lineHeight: 37,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  info: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 17,
    marginBottom: 13,
  },
  infoText: {
    marginLeft: 11,
    justifyContent: 'space-around',
  },
  address: {
    fontSize: 13,
  },
  SignOutBtn: {
    height: 56,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  SignOutText: {
    color: '#FD5739',
  },
})
