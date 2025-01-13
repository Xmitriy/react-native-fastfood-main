import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useMemo, useState } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

import Header from './src/components/Header'
import TemplateContext from './src/context/TemplateContext'
import themeData from './src/configs/theme.json'
import templateData from './src/configs/templateData.json'
import localData from './src/utils/localData'
import Navigator from './src/Navigator/Navigator'

const App = () => {
  const [theme, setTheme] = useState({})
  const [themeMode, setThemeMode] = useState('dark')

  const styles = useMemo(() => createStyles(theme), [theme])

  useEffect(() => {
    if (themeMode === 'dark') {
      setTheme(themeData.dark)
    } else {
      setTheme(themeData.light)
    }
  }, [themeMode])

  const changeThemeMode = () => {
    if (themeMode === 'dark') {
      setThemeMode('light')
    } else {
      setThemeMode('dark')
    }
  }

  return (
    <TemplateContext.Provider
      value={{
        theme,
        themeMode,
        templateData,
        localData,
        funcs: { changeThemeMode },
      }}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={theme.headerBackground} />
        <Header />
        <Navigator />
      </SafeAreaView>
    </TemplateContext.Provider>
  )
}

const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.bodyBackground,
      justifyContent: 'center',
      alignContent: 'center',
    },
  })

export default App
