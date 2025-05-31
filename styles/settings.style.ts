import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
    },
    iconContainer: {
        flexDirection: "row-reverse",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    titleButton: {
        fontFamily: "Inter-Medium",
        fontSize: 16,
    },
    iconStart: {
        backgroundColor: Colors.primary,
        padding: 5,
        borderRadius: 5,
        marginRight: 10,
    },
});
