import React, { useContext, useMemo } from 'react'
import {
  View,
  StyleSheet,
  Pressable,
} from 'react-native'
import { Feather } from '@expo/vector-icons'

import TemplateContext from '../context/TemplateContext'

const NdMode = () => {
  const { theme, themeMode, funcs } = useContext(TemplateContext)

  const styles = useMemo(() => createStyles(theme), [theme])

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Pressable
          onPress={funcs.changeThemeMode}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#666' : theme.headerBackground,
            },
            styles.dayButton,
          ]}
        >
          {() => {
            if (themeMode === 'light') {
              return (
                <Feather name="sun" size={30} color={theme.textHeaderColor} />
              )
            } else {
              return (
                <Feather name="moon" size={30} color={theme.textHeaderColor} />
              )
            }
          }}
        </Pressable>
      </View>
    </View>
  )
}

const createStyles = () =>
  StyleSheet.create({
    container: {
      width: '30%',
      alignItems: 'flex-end',
    },
    wrapper: {
      paddingHorizontal: 20,
    },
    dayButton: {
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
    },
  })

export default NdMode
