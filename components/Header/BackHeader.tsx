import { Text, View } from "react-native";
import React from "react";
import { styles } from "@/styles/backtitle.style";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
const BackHeader = () => {
    return (
        <View style={styles.container}>
            <Ionicons name="chevron-back" size={28} color={Colors.white} />
        </View>
    );
};

export default BackHeader;
