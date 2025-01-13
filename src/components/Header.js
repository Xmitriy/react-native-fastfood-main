import React, { useContext, useMemo } from 'react'
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  Platform,
  Image,
} from 'react-native'

import TemplateContext from '../context/TemplateContext'
import NdMode from './NdMode'

const Header = () => {
  const { theme, templateData } = useContext(TemplateContext)

  const styles = useMemo(() => createStyles(theme), [theme])

  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image
          source={require('../../assets/adaptive-icon.png')}
          style={styles.logoImg}
        />
      </View>
      <Text style={styles.headerText}>{templateData.headerTitle}</Text>
      <NdMode />
    </View>
  )
}

const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      height: 80,
      marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      backgroundColor: theme.headerBackground,
    },
    headerText: {
      fontSize: 35,
      textAlign: 'center',
      color: theme.textHeaderColor,
      width: '40%',
    },
    imgWrapper: {
      width: '30%',
      paddingHorizontal: 20,
    },
    logoImg: {
      height: 80,
      width: 80,
    },
  })

export default Header
