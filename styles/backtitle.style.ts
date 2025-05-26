import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: Colors.border,
        width: 35,
        height: 35,
        borderRadius: 50,
        position: "absolute",
        top: 30,
        left: "7%",
        justifyContent: "center",
        alignItems: "center",
        zIndex:1000
    },
});
