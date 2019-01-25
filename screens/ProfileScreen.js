import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { Avatar, List, ListItem } from 'react-native-elements'

export default class MyProfile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.myProfile}>
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
                <Text style={styles.address}>this is address!</Text>
                <Text style={styles.address}>this is Email! this is Email!</Text>
              </View>
            </View>
          </View>
          <List>
            <ListItem
              key="Language"
              title="Language"
              rightTitle="Eng"
              chevronColor="#FD5739"
              onPress={() => {
                this.props.navigation.navigate('languages')
              }}
            />
            <ListItem key="Currency" title="Currency" rightTitle="USD" chevronColor="#FD5739" />
            <ListItem key="Reminders" title="Reminders" switchButton hideChevron />
            <ListItem key="Units" title="Units" rightTitle="imperial" chevronColor="#FD5739" />
            <ListItem key="Privacy Policy" title="Privacy Policy" hideChevron />
          </List>

          <TouchableOpacity style={styles.SignOutBtn}>
            <Text style={styles.SignOutText}>Sign Out</Text>
          </TouchableOpacity>
          <View style={styles.bottomIcon}>
            <Image
              style={{ height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: '#FD5739' }}
              source={{ uri: 'https://i.imgur.com/DhfZkd0.png' }}
            />
            <Text style={styles.bottomText}>Travel app</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  myProfile: {
    flex: 1,
    margin: 20,
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
    fontSize: 12,
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
  bottomIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomText: {
    fontSize: 20,
    marginLeft: 6,
  },
})
