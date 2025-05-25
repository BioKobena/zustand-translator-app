import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
export const styles = StyleSheet.create({
    scrollContainer: {
        padding: 10,
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 15,
    },
    card: {
        width: "15%",
        height: 95,
        backgroundColor: Colors.primary,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: 10,
    },
    imageContainer: {},
    image: {
        width: 40,
        height: 40,
    },
    textCard: {
        fontFamily: "Inter-Medium",
        color: Colors.textWhite,
        fontSize: 16,
        padding: 1,
        textTransform: "capitalize",
        marginTop: 5,
    },
});
