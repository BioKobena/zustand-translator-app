import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import BackHeader from "@/components/Header/BackHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/styles/purchase.style";
import LikeHeader from "@/components/Header/LikeHeader";
const Purchase = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                <StatusBar style="dark" />

                <BackHeader />

                <View style={styles.titleAbout}>
                    <Text style={styles.textAbout}>
                        À propos de ce menu
                    </Text>
                </View>
                <LikeHeader />

                <View>
                    <Image
                        style={styles.image}
                        source={require("@/assets/images/menu/burger-2.png")}
                    />
                </View>

                <View>
                    <View style={styles.titleMenuContainer}>
                        <Text style={styles.menuTitle}>
                            Cheese Burger beacon
                        </Text>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.iconImageBurger}
                                source={require(
                                    "@/assets/images/flaticon/burger.png",
                                )}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Purchase;
