import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 8000
  },
  buttonContainer: {
    zIndex: 9000,
    marginBottom: 40,
    paddingHorizontal: 30
  }
})

export default styles
