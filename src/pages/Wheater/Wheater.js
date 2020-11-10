import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'
import Button from '../../components/Button'
import * as DATA from './Home.json'

class Home extends Component {
  componentDidMount () {
    console.log(this.props.navigation.state.params)
  }

  render () {
    return (
      <View style={styles.container}>
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
