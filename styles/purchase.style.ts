import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    image: {
        width: "100%",
        height: 300,
        borderRadius: 10,
    },
    titleAbout: {
        position: "absolute",
        top: 30,
        left: "25%",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
    },
    textAbout: {
        color: Colors.white,
        fontFamily: "Inter-Medium",
        fontSize: 16,
    },
});
