import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import BackHeader from "@/components/Header/BackHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/styles/purchase.style";
import LikeHeader from "@/components/Header/LikeHeader";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import MenuCard from "@/components/Card/MenuCard";
import CounterCard from "@/components/Card/CounterCard";
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

                <View style={styles.underContainer}>
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
                    <View>
                        <Text style={styles.textPrice}>$ 12.3</Text>
                    </View>
                    <View style={styles.containerMiddle}>
                        <View style={styles.commonDecoration}>
                            <MaterialIcons
                                name="attach-money"
                                size={25}
                                color={Colors.primary}
                            />
                            <Text style={styles.titleText}>
                                Livraison gratuite
                            </Text>
                        </View>
                        <View style={styles.commonDecoration}>
                            <Ionicons
                                name="time"
                                size={25}
                                color={Colors.primary}
                            />
                            <Text style={styles.titleText}>20-30</Text>
                        </View>
                        <View style={styles.commonDecoration}>
                            <Ionicons
                                name="star"
                                size={25}
                                color={Colors.primary}
                            />
                            <Text style={styles.titleText}>4.5</Text>
                        </View>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionTitle}>Description</Text>
                        <Text style={styles.contentDescription}>
                            Le Burger à la Viande est un plat typique de notre
                            restaurant qui est très demandé par de nombreuses
                            personnes, il vous est fortement recommandé.
                        </Text>
                    </View>
                </View>
                <View style={styles.recommandationContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleRecommandation}>
                            Recommandations
                        </Text>
                        <Text style={styles.seemore}>Voir plus</Text>
                    </View>
                    <View style={styles.menuCardContainer}>
                        <MenuCard />
                        <MenuCard />
                    </View>
                    <View style={styles.menuCardContainer}>
                        <MenuCard />
                        <MenuCard />
                    </View>
                    <View style={styles.menuCardContainer}>
                        <MenuCard />
                        <MenuCard />
                    </View>
                </View>
            </ScrollView>

            <CounterCard />
        </SafeAreaView>
    );
};

export default Purchase;
