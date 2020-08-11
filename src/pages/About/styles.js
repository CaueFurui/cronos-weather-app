import { StyleSheet } from 'react-native'

import { Colors } from '../../common'

import { 
  heightPercentageToDP as hp, 
  widthPercentageToDP as wp 
} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
  goBack: {
    backgroundColor: Colors.CRONOS_YELLOW,
    height: 45,
    width: 45,
    borderRadius: 22.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(80)
  },  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.CRONOS_PURPLE
  },
  title: {
    fontFamily: 'RedRose Bold',
    color: Colors.WHITE,
    fontSize: 64
  },
  description: {
    fontFamily: 'Montserrat Regular',
    color: Colors.WHITE,
    fontSize: 20,
    textAlign: 'center'
  },
  picture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginVertical: hp(4)
  },
  iconsContainer: {
    flexDirection: 'row'
  },
  icon: {
    marginHorizontal: 20
  }
})

export default styles