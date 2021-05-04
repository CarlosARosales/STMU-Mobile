//import * as React from 'react';
import { Searchbar } from "react-native-paper";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  SafeAreaView,
  Button,
  Dimensions,
  Linking,
  ImageBackground,
} from "react-native";

function Feed() {
  return (
    <SafeAreaView style={[styles.container]}>
      <View
        style={{
          backgroundColor: "#003366",
          width: "100%",
          height: "10%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              color: "white",
              fontSize: 12,
            }}
          >
            StMU Mobile
          </Text>
        </View>
      </View>
      <Image
        style={styles.stretch}
        source={require("./assets/st-marys-university-bell-tower.jpg")}
      />
      <View style={styles.dailyHealthButtonStyle}>
        <Button
          title="Take your Daily Health Check "
          color="#003366"
          onPress={() => {
            Linking.openURL(
              "https://stmarys.az1.qualtrics.com/jfe/form/SV_85DgH0fVxTq05lX"
            );
          }}
        />
      </View>
      <View //Yellow Bar for Buttons Parent
        style={{
          marginTop: 50,
          backgroundColor: "#F2BF49",
          width: "100%",
          height: "10%",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          elevation: 5,
        }}
      >
        <View //Campus Map Button View
          style={{
            width: 100,
            //height: 30,
          }}
        >
          <Button
            title="Map"
            color="#003366"
            onPress={() => {
              Linking.openURL("https://www.stmarytx.edu/map/");
            }}
          />
        </View>
        <View // Directory
          style={{
            width: 100,
            //height: 30,
          }}
        >
          <Button
            title="Directory"
            color="#003366"
            onPress={() => {
              Linking.openURL("https://www.stmarytx.edu/employees/");
            }}
          />
        </View>
        <View // Dining
          style={{
            width: 100,
          }}
        >
          <Button
            title="Dining"
            color="#003366"
            style={{ elevation: 20 }}
            onPress={() => {
              Linking.openURL("https://stmarytx.campusdish.com/");
            }}
          />
        </View>
      </View>
      <View //Parent View for News
        style={{
          marginTop: 50,
          flexDirection: "row",
          justifyContent: "center",
          height: "20%",
        }}
      >
        <View // Child Yellow Box
          style={{
            backgroundColor: "#F2BF49",
            width: "78%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            elevation: 5,
          }}
        >
          <View // Child Text
          >
            <Text
              style={{
                fontWeight: "bold",
                textAlign: "center",
                color: "white",
                fontSize: 20,
              }}
            >
              St. Mary's University appoints new Vice President for Mission and
              New...
            </Text>
          </View>

          <View // Child Learn More Button
            style={{
              marginTop: 20,
              width: "42%",
              elevation: 5,
            }}
          >
            <Button
              title="Learn More"
              color="#003366"
              onPress={() => {
                Linking.openURL("https://www.stmarytx.edu/news/");
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function Events() {
  return (
    <SafeAreaView style={[styles.container]}>
      <View
        style={{
          backgroundColor: "#003366",
          width: "100%",
          height: "10%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              color: "white",
              fontSize: 12,
            }}
          >
            Events
          </Text>
        </View>
      </View>
      <Text
        style={{
          marginTop: "10%",
          marginLeft: "10%",
          fontWeight: "bold",
          fontSize: 14,
        }}
      >
        Search for Events
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Searchbar
          style={{ marginTop: "10%", width: "80%" }}
          placeholder="Search"
        />
      </View>
      <View
        style={{
          marginTop: "10%",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 350,
            height: 200,
          }}
          source={require("./assets/RT.jpg")}
        />
      </View>
      <View style={{ marginLeft: "10%" }}>
        <Text style={{ fontWeight: "bold", marginTop: "5%" }}>
          StMU IEEE Chapter Meeting
        </Text>
        <Text style={{ fontSize: 10 }}>Tuesday, May 4 2021 at 3:30 PM CDT</Text>
      </View>
    </SafeAreaView>
  );
}

function Notifications() {
  return (
    <SafeAreaView style={[styles.container]}>
      <View
        style={{
          backgroundColor: "#003366",
          width: "100%",
          height: "10%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              color: "white",
              fontSize: 12,
            }}
          >
            Campus Alerts
          </Text>
        </View>
      </View>
      <View>
        <Text
          style={{ marginTop: "10%", marginLeft: "10%", fontWeight: "bold" }}
        >
          Campus Alerts
        </Text>
      </View>

      <View
        style={{ marginTop: "5%" }} //Container for alerts
      >
        <View //container for first alert
          style={{
            marginLeft: "5%",
            flexDirection: "row",
          }}
        >
          <View>
            <MaterialCommunityIcons
              name="alert-circle"
              color={"black"}
              size={26}
            />
          </View>
          <View style={{ marginLeft: "5%" }}>
            <View>
              <Text style={{ color: "red", fontSize: 10 }}>CAMPUS ALERT</Text>
            </View>
            <View>
              <Text style={{ fontWeight: "bold" }}>
                Community Alert: Campus Closure
              </Text>
            </View>
          </View>
        </View>
        <View //container for second alert
          style={{
            marginLeft: "5%",
            flexDirection: "row",
            marginTop: "5%",
          }}
        >
          <View>
            <MaterialCommunityIcons
              name="alert-circle"
              color={"black"}
              size={26}
            />
          </View>
          <View style={{ marginLeft: "5%" }}>
            <View>
              <Text style={{ color: "red", fontSize: 10 }}>CAMPUS ALERT</Text>
            </View>
            <View>
              <Text style={{ fontWeight: "bold" }}>
                Community Alert: Bad Weather Notice
              </Text>
            </View>
          </View>
        </View>
        <View //container for second alert
          style={{
            marginLeft: "5%",
            flexDirection: "row",
            marginTop: "5%",
          }}
        >
          <View>
            <MaterialCommunityIcons
              name="alert-circle"
              color={"black"}
              size={26}
            />
          </View>
          <View style={{ marginLeft: "5%" }}>
            <View>
              <Text style={{ color: "red", fontSize: 10 }}>CAMPUS ALERT</Text>
            </View>
            <View>
              <Text style={{ fontWeight: "bold" }}>
                Community Alert: Classes Cancelled
              </Text>
            </View>
          </View>
        </View>
        <View //container for second alert
          style={{
            marginLeft: "5%",
            flexDirection: "row",
            marginTop: "5%",
          }}
        >
          <View>
            <MaterialCommunityIcons
              name="alert-circle"
              color={"black"}
              size={26}
            />
          </View>
          <View style={{ marginLeft: "5%" }}>
            <View>
              <Text style={{ color: "red", fontSize: 10 }}>CAMPUS ALERT</Text>
            </View>
            <View>
              <Text style={{ fontWeight: "bold" }}>
                Community Alert: Classes Cancelled
              </Text>
            </View>
          </View>
        </View>
        <View //container for second alert
          style={{
            marginLeft: "5%",
            flexDirection: "row",
            marginTop: "5%",
          }}
        >
          <View>
            <MaterialCommunityIcons
              name="alert-circle"
              color={"black"}
              size={26}
            />
          </View>
          <View style={{ marginLeft: "5%" }}>
            <View>
              <Text style={{ color: "red", fontSize: 10 }}>CAMPUS ALERT</Text>
            </View>
            <View>
              <Text style={{ fontWeight: "bold" }}>
                Community Alert: Campus Closure
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const Tab = createMaterialBottomTabNavigator();

function HomePage() {
  return <View></View>;
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="gold"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: "gold" }}
      barStyle={{
        backgroundColor: "#003366",
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          tabBarLabel: "Events",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="calendar-blank-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const handlePress = () => console.log("Text Pressed");

  return (
    <SafeAreaView style={[styles.container]}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  stretch: {
    width: "100%",
    height: "30%",
  },
  dailyHealthButtonStyle: {
    flexDirection: "row",
    justifyContent: "center",
    //alignItems: "center",
    //borderRadius: 20,
    //marginLeft: "50%",
    //marginRight: 50,
    //marginTop: 40,
    width: "100%",
    marginTop: 50,
    height: "5%",
    elevation: 10,
  },
});
