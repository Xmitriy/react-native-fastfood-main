import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'

const Item = ({ item, styles, index, theme }) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemWrapper}>
        <Image style={styles.itemImg} source={item.img} key={index} />
        <View style={styles.textWrapper}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemPrice}>{item.price}</Text>
          <View style={styles.buttonWrapper}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? theme.itemBackground
                    : theme.primaryColor,
                },
                styles.orderButton,
              ]}
            >
              {({ pressed }) => (
                <Text
                  style={{
                    color: pressed ? theme.primaryColor : theme.textHeaderColor,
                    fontSize: 25,
                  }}
                >
                  Order
                </Text>
              )}
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Item
