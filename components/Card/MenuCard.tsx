import { Image, Text, View } from "react-native";
import React from "react";
import { styles } from "@/styles/menucard.style";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
const MenuCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require("@/assets/images/menu/burger-2.png")}
                />
            </View>
            <View style={styles.bottomCardContainer}>
                <Text style={styles.textTitle}>Cheese Burger</Text>
                <View style={styles.textUnderBottom}>
                    <View style={{ width: "50%", flexDirection: "row" }}>
                        <AntDesign
                            name="star"
                            size={20}
                            color={Colors.primary}
                        />
                        <Text style={styles.textMiddle}>4.9</Text>
                    </View>
                    <View style={{ width: "50%", flexDirection: "row" }}>
                        <Ionicons
                            name="location-outline"
                            size={20}
                            color={Colors.primary}
                        />
                        <Text style={styles.textMiddle}>190 m</Text>
                    </View>
                </View>
                <Text style={styles.textPrice}>$ 17.5</Text>
            </View>
        </View>
    );
};

export default MenuCard;
