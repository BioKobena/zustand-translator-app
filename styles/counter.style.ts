import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flexDirection: "row",
        width: "100%",
        height: 125,
        zIndex: 10,
        position: "absolute",
        bottom: 0,
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    },
    countButton: {
        width: 40,
        height: 40,
        borderRadius: 50,
        // backgroundColor: Colors.border,
        borderWidth: 0.5,
        justifyContent: "center",
        alignItems: "center",
    },
    counterContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "30%",
    },
    buttonCommand: {
        width: "60%",
        height: 60,
        flexDirection: "row",
        backgroundColor: Colors.primary,
        borderRadius: 50,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    textCommand: {
        fontFamily: "Inter-SemiBold",
        fontSize: 16,
        color: Colors.white,
    },
    textButton: {
        fontFamily: "Inter-SemiBold",
        fontSize: 20,
    },
});
