import React, { useContext, useMemo } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import Item from './Item'

import TemplateContext from '../context/TemplateContext'

const List = ({ data }) => {
  const { theme } = useContext(TemplateContext)

  const styles = useMemo(() => createStyles(theme), [theme])

  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => (
        <Item item={item} index={index} styles={styles} theme={theme} />
      )}
      keyExtractor={(item) => item.title}
      ListHeaderComponent={<View style={{ marginTop: 20 }} />}
      ListFooterComponent={<View style={{ marginTop: 20 }} />}
      showVerticalScrollIndicator={false}
    />
  )
}

const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.bodyBackground,
    },
    itemWrapper: {
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 250,
      width: 360,
      backgroundColor: theme.itemBackground,
      flexDirection: 'row',
      borderLeftWidth: 6,
      borderLeftColor: theme.primaryColor,
      borderRadius: 30,
      marginTop: 20,
      marginBottom: 20,
      paddingLeft: 10,
      paddingRight: 20,
    },
    itemImg: {
      height: 150,
      width: 160,
    },
    orderButton: {
      height: 50,
      width: 90,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
    },
    itemTitle: {
      color: theme.textBodyColor,
      fontSize: 34,
    },
    itemPrice: {
      color: theme.textBodyColor,
      fontSize: 30,
      marginTop: 5,
    },
    buttonWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
  })

export default List
