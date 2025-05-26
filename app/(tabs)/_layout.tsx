import { Text, View } from "react-native";
import React from "react";
import { Slot, Tabs } from "expo-router";
import { Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";


export const unstable_settings = {
    initialRouteName: "index",
};

export default function RootLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: Colors.lightGray,
                tabBarStyle: {
                    backgroundColor: Colors.white,
                    borderTopWidth: 0,
                    height: 60,
                    position: "absolute",
                    width: "95%",
                    alignSelf: "center",
                    marginLeft: "2%",
                    borderRadius: 50,
                    marginBottom: 15,
                    boxShadow: "none",
                    elevation: 0.2,
                },
            }}
        >
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
                    tabBarLabel: "Panier",
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
