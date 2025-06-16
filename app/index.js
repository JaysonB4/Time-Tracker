import { useRouter } from "expo-router";
import { useRef } from "react";
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const router = useRouter();
  const scrollRef = useRef(null);

  const handleLogin = () => {
    router.push("/login");
  }

  const handleSignup = () => {
    router.push("/signup");
  }

  const handleLanding = () => {
    router.push("/landing");
  }


  if (Platform.OS === "web") {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={StyleSheet.container}>
          <ScrollView
            ref={scrollRef}
            contentContainerStyle={styles.scrollContent}
          >
            <Text>Welcome to Time Tracker</Text>
            <TouchableOpacity onPress={handleLogin}>Log In</TouchableOpacity>
            <TouchableOpacity onPress={handleSignup}>Sign Up</TouchableOpacity>
            <TouchableOpacity onPress={handleLanding}>Temporary Landing Page</TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  } else {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={StyleSheet.container}>
          <Text>Welcome to Time Tracker</Text>
          <TouchableOpacity onPress={handleLogin}>Log In</TouchableOpacity>
          <TouchableOpacity onPress={handleSignup}>Sign Up</TouchableOpacity>
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

export default Index;