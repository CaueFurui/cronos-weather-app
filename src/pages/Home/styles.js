import { StyleSheet } from 'react-native'
import { Colors }from '../../common'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.CRONOS_PURPLE,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'RedRose Bold',
    fontSize: 45,
    color: Colors.WHITE
  },
  description: {
    fontFamily: 'Montserrat Bold',
    color: Colors.WHITE,
    marginVertical: 50
  },
  about: {
    fontFamily: 'Montserrat Bold',
    textDecorationLine: 'underline',
    color: Colors.WHITE,
    fontSize: 24,
    marginTop: 60
  },
  buttonContainer: {
    width: '70%'
  }
})

export default styles
