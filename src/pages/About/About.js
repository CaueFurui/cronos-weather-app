import React, { Component } from 'react'
import { Text, View, Image, Linking } from 'react-native'
import * as DATA from './About.json'
import Icon from 'react-native-vector-icons/Feather'
import styles from './styles'
import {
  PROFILE_PICTURE as PICTURE
} from '../../assets/images'
import { Colors } from '../../common'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class About extends Component {

  handleClick(link) {
    Linking.canOpenURL(link).then(supported => {
      if (supported) {
        Linking.openURL(link)
      }
    })
  }

  render() {
    return (
        <View style={styles.container}>
        <TouchableOpacity style={styles.goBack}
          onPress={() => this.props.navigation.goBack()}
        >
          <Icon name='arrow-left' size={30}/>
        </TouchableOpacity>
          <Text style={styles.title}> {DATA.title} </Text>
          <View>
            <Text style={styles.description}>
              {DATA.description}
            </Text>
          </View>
          <Image source={PICTURE} style={styles.picture}/>
          <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={() => this.handleClick('https://linkedin.com/in/cauefurui')}>
              <Icon name='linkedin' size={40} color={Colors.CRONOS_YELLOW} style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleClick('https://www.facebook.com/caue.furuimartins/')}>
              <Icon name='facebook' size={40} color={Colors.CRONOS_YELLOW} style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleClick('https://github.com/cauefurui')}>
              <Icon name='github' size={40} color={Colors.CRONOS_YELLOW} style={styles.icon}/>
            </TouchableOpacity>
          </View>
        </View>
    )
  }
}
