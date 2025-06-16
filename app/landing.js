import { useRouter } from "expo-router";
import { useRef } from "react";
import { Platform, ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Landing = () => {
  const router = useRouter();
  const scrollRef = useRef(null);

  if (Platform.OS === "web") {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={StyleSheet.container}>
          <ScrollView
            ref={scrollRef}
            contentContainerStyle={styles.scrollContent}
          >
            <Text>Welcome to Time Tracker</Text>

            <Text>This is where you show your schedule for the day (google calendar format) and any tasks that were assigned for the day above it.</Text>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  } else {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={StyleSheet.container}>
          <Text>Welcome to Time Tracker</Text>
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

export default Landing;