import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const router = useRouter();
  const scrollRef = useRef(null);

  const [user, setUser] = useState({
    identifier: "",
    password: "",
  })

  const handleChange = (field, value) => {
    setUser((prev) => ({...prev, [field]:value }));
  }

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/users/login`,
        user
      );

      if (response.data) {
        router.push("/landing");
      } else {
        alert("ERROR: Invalid credentials.");
      }
    } catch (error) {
      console.log("Login Error:", error);
      alert("ERROR: Failed to log in.");
    }
  };

  const handleSignup = () => {
    router.push("/signup");
  }

  if (Platform.OS === "web") {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={StyleSheet.container}>
          <ScrollView
            ref={scrollRef}
            contentContainerStyle={styles.scrollContent}
          >
            <Text>Log In</Text>

            <View>
              <TextInput
                placeholder="Username/Email Address"
                autoCapitalize="none"
                value={user.identifier}
                onChangeText={(text) => handleChange("identifier", text)}
              />
            </View>

            <View>
              <TextInput
                placeholder="Password"
                secureTextEntry
                value={user.password}
                onChangeText={(text) => handleChange("password", text)}
              />
            </View>

            <TouchableOpacity onPress={handleLogin}>Log In</TouchableOpacity>

            <TouchableOpacity onPress={handleSignup}>Don't have an account?</TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  } else {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={StyleSheet.container}>
          <Text>Log In</Text>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: "100%",
  },
  scrollContent: {
    flexGrow: 1,
  },
});

export default Login;