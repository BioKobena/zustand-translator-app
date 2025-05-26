import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import BackHeader from "@/components/Header/BackHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/styles/purchase.style";
const Purchase = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <StatusBar style="dark" />

                <BackHeader />
                <View style={styles.titleAbout}>
                    <Text style={styles.textAbout}>
                        À propos de ce menu
                    </Text>
                </View>
                <View>

                </View>
                <View>
                    <Image
                    style={styles.image}
                        source={require("@/assets/images/menu/burger-2.png")}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Purchase;
