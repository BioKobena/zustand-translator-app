import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "@/styles/settings.style";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

interface SettingProps {
    title?: string;
    icon?:
        | "image"
        | "settings-outline"
        | "person-sharp"
        | "card-outline"
        | "help-circle-outline"
        | "trash-outline"
        | "person-add-sharp"
        | "person-remove-outline";
}
const Parametres = ({ title, icon }: SettingProps) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.iconContainer}>
                <Text style={styles.titleButton}>{title}</Text>
                <View style={styles.iconStart}>
                    <Ionicons name={icon} size={22} color={Colors.white} />
                </View>
            </View>
            <View>
                <Ionicons
                    name="chevron-forward"
                    size={22}
                    color={Colors.black}
                />
            </View>
        </TouchableOpacity>
    );
};

export default Parametres;
