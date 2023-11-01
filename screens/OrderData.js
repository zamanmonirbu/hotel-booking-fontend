import React, { useEffect, useRef, useState, useContext } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import moment from "moment";
import { CartItems } from '../Context';
import { useNavigation } from '@react-navigation/native';


const OrderData = () => {
  const navigation = useNavigation();
    const { cart, setCart } = useContext(CartItems);
    const [modal, setModal] = useState(false);
    const total = cart
        .map((item) => Number(item.price.replace("₹", "")))
        .reduce((prev, curr) => prev + curr, 0);
    const route = useRoute();
    const restaurentName = route.params.restaurentName;
    const [tip, setTip] = useState(0);
    const date = moment().format("MMM Do YY");
    const time = moment().format("LT");
    const [seconds, setSeconds] = useState(10);

    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
            setSeconds("BOOOOM!");
        }
    }, []);

    return (
        <ScrollView
            showVerticalScrollbar={false}
            style={{ backgroundColor: "white", flex: 1, marginTop: 36 }}
        >
            <Text
                style={{
                    color: "black",
                    fontSize: 19,
                    fontWeight: "bold",
                    padding: 15,
                    backgroundColor: "#FDEDEC",
                    color: "#283747",
                }}
            >
                {restaurentName} has accepted your Booking {time}
            </Text>

            <View
                style={{
                    borderBottomColor: "#D0D0D0",
                    borderBottomWidth: 1,
                }}
            />
            <View
                style={{
                    borderBottomColor: "#D0D0D0",
                    borderBottomWidth: 3,
                }}
            />
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 10,
                        backgroundColor: "#ff0090",
                        padding: 5,
                        borderRadius: 7,
                    }}
                >
                    <MaterialIcons style={{}} name="apartment" size={26} color="#f0fff0" />
                    <Text
                        style={{
                            fontSize: 19,
                            fontWeight: "700",
                            paddingLeft: 7,
                            color: "white",
                        }}
                    >
                        Ready for your arrival
                    </Text>
                </View>


                <Image
                    style={{
                        width: 200,
                        height: 200,
                        backgroundColor: "white",
                        marginVertical: 16,
                    }}
                    source={{
                        uri: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/330272492.jpg?k=e0bfecf9a306ade96b417fc31a968a9ae412bdabf4e744eb19eab1b007be2082&o=&hp=1",
                    }}
                />
            </View>
            <View
                style={{
                    borderBottomColor: "#D0D0D0",
                    borderBottomWidth: 3,
                }}
            />
            <View style={{ padding: 20, flexDirection: "row", alignItems: "center" }}>
                <Image
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        borderColor: "#fff0f5",
                        borderWidth: 1,
                    }}
                    source={{
                        uri: "https://media3.giphy.com/media/icksDwXFM85NTfbmIr/giphy.gif?cid=ecf05e47r6x832wnt9y9j76z8jju68qvbs5yh8am47k8apu8&ep=v1_gifs_search&rid=giphy.gif&ct=g",
                    }}
                />
                <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: "700", color: "green" }}>
                        Your booking is successful
                    </Text>
                    <Text style={{ fontSize: 17, fontWeight: "600", color: "#696969" }}>
                        Thank you very much
                    </Text>
                </View>
            </View>


            <Image
                style={{
                    width: 190,
                    height: 70,
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: 10,
                }}
                source={{
                    uri: "https://as1.ftcdn.net/v2/jpg/03/68/02/92/1000_F_368029287_66zcIt3PEZq7oaFAGwwEDrT5assPV7oS.jpg",
                }}
            />

            {/* Add the colorful "Go to Home" button here */}
            <TouchableOpacity
                style={{
                    backgroundColor: "green", // Change the background color as desired
                    padding: 15,
                    borderRadius: 10,
                    alignItems: "center",
                    marginTop: 100,
                    width:100,
                    alignSelf: "center"
                }}
                onPress={() => {
                  navigation.navigate('Home');
                }}
            >
                <Text style={{ color: "white", fontWeight: "bold" }}>Go to Home</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

export default OrderData;

const styles = StyleSheet.create({
    tbn: {
        color: "red",
    },
    btn: {
        borderWidth: 2,
    }
});
