import React, { useContext, useMemo } from 'react'
import { View, StyleSheet } from 'react-native'

import TemplateContext from '../context/TemplateContext'
import List from '../components/List'

const SandwichesScreen = () => {
  const { theme, localData } = useContext(TemplateContext)

  const styles = useMemo(() => createStyles(theme), [theme])

  return (
    <View style={styles.container}>
      <List data={localData.burgers} />
    </View>
  )
}

const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: theme.bodyBackground,
    },
  })

export default SandwichesScreen
