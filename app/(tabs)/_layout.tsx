import { Text, View } from "react-native";
import React from "react";
import { Slot, Tabs } from "expo-router";
import { Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
export default function RootLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    title: "Accueil",
                    tabBarLabel: "Accueil",
                    tabBarIcon: ({ color }) => (
                        <Octicons name="home" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="purchase"
                options={{
                    title: "Achat",
                    headerShown: false,
                    tabBarLabel: "Menu",
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            name="basket-outline"
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="chat"
                options={{
                    title: "Messagerie",
                    headerShown: false,
                    tabBarLabel: "Messagerie",
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            name="chatbubble-ellipses-sharp"
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    title: "Compte",
                    headerShown: false,
                    tabBarLabel: "Compte",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="account-outline"
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
