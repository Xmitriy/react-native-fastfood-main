import React, { useContext, useMemo } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome6 } from '@expo/vector-icons'
import { View, Text, StyleSheet } from 'react-native'

import SandwichesScreen from '../screens/SandwichesScreen'
import PizzasScreen from '../screens/PizzasScreen'
import DrinksScreen from '../screens/DrinksScreen'
import TemplateContext from '../context/TemplateContext'

const Navigator = () => {
  const { theme, templateData, themeMode } = useContext(TemplateContext)
  const labels = templateData.tabLabels

  const styles = useMemo(() => createStyles(theme, themeMode), [theme])

  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={labels[1]}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName
            let rn = route.name

            if (rn === labels[0]) {
              iconName = 'burger'
            } else if (rn === labels[1]) {
              iconName = 'pizza-slice'
            } else if (rn === labels[2]) {
              iconName = 'beer-mug-empty'
            }

            if (focused) {
              return (
                <View style={styles.activeIconWrapper}>
                  <FontAwesome6
                    name={iconName}
                    size={40}
                    color={theme.textHeaderColor}
                  />
                </View>
              )
            } else {
              return (
                <View style={styles.inactiveIconWrapper}>
                  <FontAwesome6
                    name={iconName}
                    size={35}
                    color={
                      themeMode === 'light' ? 'grey' : theme.textHeaderColor
                    }
                  />
                  <Text style={styles.iconText}>{route.name}</Text>
                </View>
              )
            }
          },
          tabBarStyle: {
            height: 95,
            paddingBottom: 10,
            paddingTop: 10,
            paddingLeft: 30,
            paddingRight: 30,
            borderTopWidth: 3,
            borderTopColor: theme.primaryColor,
            borderTopStyle: 'solid',
            backgroundColor: theme.bodyBackground,
          },
          tabBarActiveTintColor: theme.primaryColor,
          tabBarInactiveTintColor: 'grey',
          tabBarShowLabel: false,
          headerStyle: {
            backgroundColor: theme.bodyBackground,
            height: 70,
            borderBottomWidth: 3,
            borderBottomColor: theme.primaryColor,
          },
          headerTitleStyle: {
            fontSize: 30,
            color: theme.primaryColor,
          },
          headerTitleAlign: 'center',
        })}
      >
        <Tab.Screen name={labels[0]} component={SandwichesScreen} />
        <Tab.Screen name={labels[1]} component={PizzasScreen} />
        <Tab.Screen name={labels[2]} component={DrinksScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const createStyles = (theme, themeMode) =>
  StyleSheet.create({
    activeIconWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.primaryColor,
      width: 90,
      height: 90,
      borderRadius: 50,
      transform: [{ translateY: -45 }],
    },
    inactiveIconWrapper: {
      justifyContent: 'centrer',
      alignItems: 'center',
    },
    iconText: {
      fontSize: 18,
      color: themeMode === 'light' ? 'grey' : theme.textBodyColor,
      paddingTop: 5,
    },
  })

export default Navigator
