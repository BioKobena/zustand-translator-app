import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
export const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    input: {
        borderWidth: 1,
        backgroundColor: Colors.background,
        borderColor: Colors.border,
        borderRadius: 5,
        height: 55,
        width: "100%",
        padding: 10,
        color: "black",
        fontSize: 16,
        fontFamily: "Inter-Regular",
    },
    errorText: {
        color: Colors.error,
        fontSize: 12,
        marginTop: 4,
    },
});
