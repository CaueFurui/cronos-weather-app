import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 8000
  },
  card: {
    color: '#ffaaaa',
    zIndex: 9000
  }
})

export default styles
