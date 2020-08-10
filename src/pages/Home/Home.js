import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import styles from './styles'
import {
  CRONOS_LOGO as LOGO
} from '../../assets/images'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={LOGO} style={styles.logo}/>
        <Text style={styles.text}>Teste</Text>
      </View>
    )
  }
}
