import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
const index = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <Text>index</Text>
      <Button title="Go to Login" onPress={() => router.push("/(tabs)")} />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
