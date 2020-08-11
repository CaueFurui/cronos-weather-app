import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import {
  CRONOS_LOGO as LOGO
} from '../../assets/images'
import Button from '../../components/Button'
import * as DATA from './Home.json'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={LOGO} style={styles.logo}/>
        <Text style={styles.title}>{DATA.title}</Text>
        <Text style={styles.description}>{DATA.description}</Text>
        <View style={styles.buttonContainer}>
          <Button title='Entrar' onPress={() => console.log('click')}></Button>
        </View>

        <TouchableOpacity onPress={() => console.log('Click')}>
          <Text style={styles.about}>
            Sobre o autor
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
