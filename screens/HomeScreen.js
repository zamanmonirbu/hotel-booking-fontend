import React, { useState ,useEffect} from "react";
import { Image, KeyboardAvoidingView, Pressable,ScrollView , SafeAreaView, StyleSheet, Text, View,FlatList } from 'react-native'
import { TextInput } from 'react-native';
import { EvilIcons } from "@expo/vector-icons";
import Hotels from '../components/Hotels';
import hotels from "../data/hotels";
import { useNavigation } from "@react-navigation/native";
import Categories from "../components/Categories";

 const restaurent = hotels[0];
const HomeScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [data, setData] = useState([]);
  const navigation = useNavigation();

    return (
      <KeyboardAvoidingView style={{ flex: 1, marginTop: 25 }}>
        <ScrollView style={{ flex: 1 }}>
          <SafeAreaView>          
            <View style={styles.container}>
              <EvilIcons
                style={{ marginRight: 10 }}
                name="search"
                size={28}
                color="#cb202d"
              />
              <TextInput
                style={{ fontSize: 18 }}
                placeholder="Name, Location"
              />
            </View>
            <Categories/>
            <Pressable style={{ marginLeft: 5 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/136144268_3952594544805757_3819170963345376969_n.png?_nc_cat=104&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=4qUs7qS5Iq0AX_LVswx&_nc_ht=scontent-sin6-3.xx&oh=00_AfC_aUwhSOoZj16tMaFsVdx6PqGRWj6rjx5c7MgEywiVfw&oe=656913D2",
                  }}
                />
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://5.imimg.com/data5/GLADMIN/Default/2022/9/BH/GH/IV/15510203/hotels-booking-service-500x500.jpg",
                  }}
                />
              </View>
            </Pressable>
            <Text
              style={{
                margin: 10,
                fontSize: 20,
                fontWeight: "700",
                paddingLeft: 6,
              }}
            >
              Book now for your happiness.
            </Text>
            <Pressable>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 11,
                }}
              >
                <View style={{ margin: 6 }}>
                  <Image
                    style={styles.MiddleImage}
                    source={{
                      uri: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/498667890.jpg?k=3bdaf135c238760c466fe6b2d577436997329e56d41f7f199536857c530748d8&o=&hp=1",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      color: "gray",
                      margin: 10,
                      textAlign: "center",
                    }}
                  >
                    Dhaka
                  </Text>
                </View>

                <View style={{ margin: 8 }}>
                  <Image
                    style={styles.MiddleImage}
                    source={{
                      uri: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/498422921.jpg?k=0ef8073c9f658eb1286095f6b75b654bf67db2a5c29fa7c87f8cd953134e4476&o=&hp=1",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      color: "gray",
                      margin: 10,
                      textAlign: "center",
                    }}
                  >
                    Khulna
                  </Text>
                </View>

                <View style={{ margin: 8 }}>
                  <Image
                    style={styles.MiddleImage}
                    source={{
                      uri: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/498457977.jpg?k=8de82ec92f4fbc7554d8a607f9903a473b159a21aabc3bb2183920e360c19844&o=&hp=1",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      color: "gray",
                      margin: 10,
                      textAlign: "center",
                    }}
                  >
                    Barishal
                  </Text>
                </View>

                <View style={{ margin: 8 }}>
                  <Image
                    style={styles.MiddleImage}
                    source={{
                      uri: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/498667893.jpg?k=2715c0a8658e803de581d69033d01e6aa7aa1265ca6d2857e5a6e2b3060dcad8&o=&hp=1",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      color: "gray",
                      margin: 10,
                      textAlign: "center",
                    }}
                  >
                    Bhula
                  </Text>
                </View>
              </View>
            </Pressable>
            <FlatList
              data={hotels}
              renderItem={({ item }) => <Hotels restaurent={item} />}
            />
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 7,
    marginLeft: 9,
    marginTop: 10,
    marginRight: 9,
    backgroundColor: "#e7e7e7",
    borderColor: "#A0A0A0",
  },
  swipeable: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  swipeableText: {
    backgroundColor: "#F5F5F5",
    borderWidth: 1,
    borderColor: "#DCDCDC",
    borderRadius: 7,
    padding: 7,
    margin: 5,
  },
  image: {
    margin: 10,
    borderRadius: 10,
    width: 158,
    height: 158,
    aspectRatio: 5 / 3,
    resizeMode: "cover",
  },
  MiddleImage:{
    width:70,
    height:70,
    borderRadius:35,
    resizeMode:"cover",
  }
});