import React, {useState} from "react";
import {
  View,
  Button,
  Platform,
  Text,
  Alert,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity, Pressable,
} from "react-native";
import splashImg from "../img/splash.png";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

function Login({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.viewTop}>
        <Image source={splashImg} style={styles.logo} />
      </View>
      <View style={styles.viewMiddle}>
        <View>
        <Text style={styles.labelText}>아이디</Text>
        <TextInput placeholder={"아이디"} style={styles.form} autoCapitalize={"none"} autoCorrect={false} returnKeyType={"next"}/>
        </View>
        <View>
          <Text style={styles.labelText}>비밀번호</Text>
          <TextInput placeholder={"비밀번호"} style={styles.form} autoCapitalize={"none"} autoCorrect={false} returnKeyType={"done"}/>
        </View>
        <Pressable
          onPress={() => navigation.navigate("Time Card")}
          style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Register")}
          style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewTop: {
    flex: 1,
    backgroundColor: "#D4ECDD",
  },
  viewMiddle: {
    flex: 2,
    backgroundColor: "#345B63",
    justifyContent: "space-evenly"
  },
  viewBottom: {
    flex: 0.5,
    backgroundColor: "#152D35",
  },
  form: {
    borderRadius: 10,
    borderWidth: 5,
    backgroundColor: "white",
    borderStyle: "solid",
    borderColor: "white",
    padding: 10,
    height: 50,
    margin: 10,
  },
  bottomText: {
    color: "white",
    alignContent: "center",
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  button: {
    backgroundColor: "#D4ECDD",
    padding: 15,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "#112031",
    textAlign: "center",
  },
  labelText: {
    color: "white",
    fontWeight: "600",
    marginLeft: 10,
    fontSize:20
  }
});

export default Login;
