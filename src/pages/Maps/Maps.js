import React, { useState, useEffect } from 'react'
import Geolocation from 'react-native-geolocation-service'
import { View, PermissionsAndroid } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import PropTypes from 'prop-types'
import api from '../../services/api'
import styles from './styles'

const appId = '715e411eaaa0b8aeaf9015e0171e81eb'

const Maps = ({ navigation }) => {
  const [hasLocationPermission, setHasLocationPermission] = useState(false)
  const [userPosition, setUserPosition] = useState(false)

  async function verifyLocationPermission () {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      )

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Permissão garantida')
        setHasLocationPermission(true)
      } else {
        console.error('Permissão negada')
        setHasLocationPermission(false)
      }
    } catch (err) {
      console.warn(err)
    }
  }

  const renderMarker = () => {
    if (userPosition) {
      return (
        <Marker
          coordinate={{
            latitude: userPosition.latitude,
            longitude: userPosition.longitude
          }}
          title='Você esta aqui'
        />
      )
    }
  }

  useEffect(() => {
    verifyLocationPermission()

    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        position => {
          setUserPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
          api.get(`weather?lat=${userPosition.latitude}&lon=${userPosition.longitude}&appid=${appId}`)
        },
        error => {
          console.error(error.code, error.message)
        }
      )
    }
  }, [hasLocationPermission])

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
        {renderMarker()}
      </MapView>
    </View>
  )
}

Maps.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default Maps
