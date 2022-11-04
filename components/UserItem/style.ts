import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
      flexDirection: 'row',
      padding: 10,
    },
    Image: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10
    },
  
    badgeContainer: {
      backgroundColor: '#3872E9',
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      left: 45,
      top: 10
    },
    badgeText: {
      color: 'white',
      fontSize: 12
    },
    rightcontainer: {
      flex: 1,
      justifyContent: 'center'
    },
    row: {
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 3
    },
    status: {
      fontSize: 13,
      marginBottom: 3
    },
    txt: {
      color: 'grey'
    }
  });

export default styles  