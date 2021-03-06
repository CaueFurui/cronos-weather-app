import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import styles from './styles'
import {
  CRONOS_LOGO as LOGO
} from '../../assets/images'
import PropTypes from 'prop-types'
import Button from '../../components/Button'
import * as DATA from './Home.json'

class Home extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Image source={LOGO} style={styles.logo}/>
        <Text style={styles.title}>{DATA.title}</Text>
        <Text style={styles.description}>{DATA.description}</Text>
        <View style={styles.buttonContainer}>
          <Button title='Entrar' onPress={() => this.props.navigation.navigate('Maps')} />
        </View>
      </View>
    )
  }
}

Home.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default Home
