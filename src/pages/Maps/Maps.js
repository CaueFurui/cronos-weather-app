import React, { Component } from 'react'
import Geolocation from 'react-native-geolocation-service'
import { View, PermissionsAndroid } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import PropTypes from 'prop-types'
import styles from './styles'
import Button from '../../components/Button'

class Maps extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hasLocationPermission: false,
      userPosition: {
        latitude: 0,
        longitude: 0
      }
    }
  }

  componentDidMount () {
    this.verifyLocationPermission()
  }

  async verifyLocationPermission () {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      )

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Permissão garantida')
        this.setState({ hasLocationPermission: true })
      } else {
        console.error('Permissão negada')
        this.setState({ hasLocationPermission: false })
      }
    } catch (err) {
      console.warn(err)
    }
  }

  renderMarker () {
    if (this.state.hasLocationPermission) {
      Geolocation.getCurrentPosition(
        position => {
          this.setState({
            userPosition: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }
          })
        },
        error => {
          console.error(error.code, error.message)
        }
      )
    }
    if (this.state.userPosition) {
      return (
        <Marker
          coordinate={{
            latitude: this.state.userPosition.latitude,
            longitude: this.state.userPosition.longitude
          }}
          title='Você esta aqui'
        />
      )
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          loadingEnabled={true}
          initialRegion={{
            latitude: -22.3245715,
            longitude: -50.3114746,
            latitudeDelta: 10,
            longitudeDelta: 10
          }}
        >
          {this.renderMarker()}
        </MapView>
        <View style={ styles.buttonContainer }>
          <Button
            title='Ver previsão para seu local'
            onPress={() => this.props.navigation.navigate('Wheater', {
              lat: this.state.userPosition.latitude,
              long: this.state.userPosition.longitude
            })}
            />
        </View>
      </View>
    )
  }
}

Maps.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default Maps
