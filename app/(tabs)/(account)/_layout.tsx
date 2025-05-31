import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export const unstable_settings = {
    initialRouteName: "index",
};

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <StatusBar style="dark" />

            <SafeAreaView style={{ flex: 1 }}>
                <Stack>
                    <Stack.Screen
                        name="index"
                        options={{ headerShown: false }}
                    />
                </Stack>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
