import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "@/styles/like.style";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
const LikeHeader = () => {
    return (
        <View style={[styles.container]}>
            <Octicons name="heart" size={20} color={Colors.white} />
        </View>
    );
};

export default LikeHeader;
