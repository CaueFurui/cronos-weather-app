import React, { Component } from 'react'
import { Button as ButtonElements } from 'react-native-elements'
import PropTypes from 'prop-types'

import styles from './styles'

class Button extends Component {
  render () {
    return (
      <ButtonElements
        title={this.props.title}
        titleStyle={styles.title}
        buttonStyle={this.props.buttonStyle ? this.props.buttonStyle : styles.button}
        onPress={() => this.props.onPress()}
      />
    )
  }
}
Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  buttonStyle: PropTypes.object
}
export default Button
