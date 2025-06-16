import { useRouter } from "expo-router";
import { useRef } from "react";
import { Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Signup = () => {
  const router = useRouter();
  const scrollRef = useRef(null);

  const handleSignup = () => {
    router.push("/landing");
  }

  const handleLogin = () => {
    router.push("/login");
  }

  if (Platform.OS === "web") {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={StyleSheet.container}>
          <ScrollView
            ref={scrollRef}
            contentContainerStyle={styles.scrollContent}
          >
            <Text>Sign Up</Text>

            <View>
              <TextInput
                placeholder="Username"
                autoCapitalize="none"
                value={user.username}
                onChangeText={(text) => handleChange("username", text)}
              />
            </View>

            <View>
              <TextInput
                placeholder="Email Address"
                keyboardType="email-address"
                autoCapitalize="none"
                value={user.email}
                onChangeText={(text) => handleChange("email", text)}
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

            <TouchableOpacity onPress={handleSignup}>Sign Up</TouchableOpacity>

            <TouchableOpacity onPress={handleLogin}>Have an account?</TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  } else {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={StyleSheet.container}>
          <Text>Sign Up</Text>
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

export default Signup;