import { StatusBar } from "expo-status-bar";

import React from "react";
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

export default function App() {
  const handlePress = () => console.log("Text Pressed");
  let x = 1;
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
  },
});
