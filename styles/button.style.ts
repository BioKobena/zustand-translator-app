import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 10,
    },
    button: {
        backgroundColor: Colors.primary,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 55,
        borderRadius: 50,
        marginTop: 20,
    },
    textButton: {
        fontFamily: "Inter-Regular",
        fontSize: 20,
        color: Colors.textWhite,
    },
});
