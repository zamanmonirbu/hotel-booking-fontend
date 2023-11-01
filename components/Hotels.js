import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import hotels from "../data/hotels";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SimpleLineIcons } from "@expo/vector-icons";
const Hotels = (props) => {
  const restaurent = props.restaurent;
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("HotelRoom", {
          id: restaurent.id,
          name: restaurent.name,
          adress: restaurent.adress,
          smalladress: restaurent.smalladress,
          cuisines: restaurent.cuisines,
          aggregate_rating: restaurent.aggregate_rating,
          no_of_Delivery: restaurent.no_of_Delivery,
          menu: restaurent.menu,
          latitude: restaurent.latitude,
          longitude: restaurent.longitude,
        })
      }
      style={styles.container}
    >
      <Image style={styles.image} source={{ uri: restaurent.featured_image }} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.leftContainer}>
          <Text style={styles.text}>{restaurent.name}</Text>
          <Text style={styles.cuisinestext}>{restaurent.cuisines}</Text>
        </View>

        <View style={styles.rightContainer}>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            {restaurent.aggregate_rating}
          </Text>
          <Ionicons name="star" size={15} color="white" />
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 140,
          fontSize: 18,
          color: "white",
          fontWeight: "bold",
          backgroundColor: "#318CE7",
          paddingHorizontal: 10,
          padding: 3,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        }}
      >
        <Text style={{color: "white", fontWeight:"bold"}}>{restaurent.offer}</Text>
        <Text style={{paddingTop:2,fontWeight:"bold"}}>Up to $40</Text>
      </View>
      <View style={styles.lineStyle} />
      <View style={styles.delivery}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Feather
            style={{
              backgroundColor: "#4B9CD3",
              borderRadius: 30,
              marginRight: 7,
              padding: 3,
            }}
            name="chevrons-right"
            size={24}
            color="white"
          />
          <Text style={{ color: "#404040", fontWeight: "600" }}>
            {restaurent.no_of_Delivery} + Total room here
          </Text>
        </View>
        <Image
          style={{
            width: "20%",
            height: 30,
            marginLeft: 30,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://st2.depositphotos.com/12124814/44069/v/450/depositphotos_440696988-stock-illustration-book-now-button-book-now.jpg",
          }}
        />
      </View>
    </Pressable>
  );
};

export default Hotels;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderRadius: 20,
    backgroundColor: "white",
  },
  image: {
    // resizeMode: "contain",
    width: "100%",
    aspectRatio: 6 / 4,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  text: {
    paddingHorizontal: 10,
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
  },
  cuisinestext: {
    marginTop: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    fontSize: 14,
    color: "#989898",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3CB371",
    padding: 5,
    borderRadius: 7,
    marginBottom: 8,
    marginRight: 10,
  },
  leftContainer: {},
  offer: {},
  time: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    bottom: 140,
    backgroundColor: "white",
    paddingHorizontal: 10,
    borderRadius: 6,
    padding: 2,
    right: 10,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: "#C8C8C8",
    marginHorizontal: 15,
    marginVertical: 4,
  },
  delivery: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 6,
  },
});
