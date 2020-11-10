import React, { Component } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'
import Button from '../../components/Button'
import api from '../../services/api'
import { Colors } from '../../common'
const appId = '715e411eaaa0b8aeaf9015e0171e81eb'

class Wheater extends Component {
  constructor (props) {
    super(props)
    this.state = {
      lat: 0,
      long: 0,
      currentWheater: {}
    }
  }

  componentDidMount () {
    this.setState({
      lat: this.props.navigation.state.params.lat,
      long: this.props.navigation.state.params.long
    }, () => {
      api.get(`onecall?lat=${this.state.lat}&lon=${this.state.long}&appid=${appId}&exclude=minutely,hourly,daily&units=metric`).then(response => {
        this.setState({
          currentWheater: response.data.current
        })
      })
    })
  }

  renderWheaterInfo () {
    if (!this.state.currentWheater) {
      return (
        <View>
          <ActivityIndicator size='large' color={Colors.CRONOS_YELLOW} />
        </View>
      )
    } else {
      return (
          <View style={styles.containerData}>
            <Text style={styles.data}>Temperatura Atual: {this.state.currentWheater.temp} ºC</Text>
            <Text style={styles.data}>Sensação Térmica: {this.state.currentWheater.feels_like} ºC</Text>
            <Text style={styles.data}>Umidade do Ar: {this.state.currentWheater.feels_like} %</Text>
          </View>
      )
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Aqui estão os dados de clima da sua região</Text>
        {this.renderWheaterInfo()}
        <View style={styles.buttonContainer}>
          <Button title='Voltar' onPress={() => this.props.navigation.goBack()} />
        </View>
      </View>
    )
  }
}

Wheater.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default Wheater
