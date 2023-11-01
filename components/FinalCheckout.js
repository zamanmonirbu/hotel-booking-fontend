import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FinalCheckout = ({item}) => {
    const {name,price} = item
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
          backgroundColor: "white",
        }}
      >
        <Text style={{ fontWeight: "700", color: "red" }}>{name}</Text>
        <Text style={{ fontWeight: "600", color: "red" }}>{price}</Text>
      </View>
    );
}

export default FinalCheckout

const styles = StyleSheet.create({})