import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flexDirection: "row",
        width: "100%",
        height: 150,
        zIndex: 10,
        position: "absolute",
        bottom: 0,
    },
    countButton: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: Colors.border,
        borderWidth: 0.5,
        justifyContent: "center",
        alignItems: "center",
    },
    counterContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
    },
    buttonCommand: {
        width: "40%",
        height: 50,
        backgroundColor: Colors.primary,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    textCommand:{
        fontFamily: "Inter-SemiBold",
        fontSize: 16,
        color: Colors.white,
    }
});
