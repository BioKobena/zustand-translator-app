import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "45%",
        height: "100%",
        padding: 15,
        backgroundColor: Colors.white,
        margin: 5,
        borderRadius: 10,
    },
    imageContainer: {
        width: "100%",
        height: 125,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
    },
    loveButton: {},
    bottomCardContainer: {
        flexDirection: "column",
    },
    textTitle: {
        fontSize: 17,
        fontFamily: "Inter-SemiBold",
        margin: 3,
    },
    textUnderBottom: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    textMiddle: {
        fontFamily: "Inter-Medium",
        fontSize: 14,
        color: Colors.textPrimary,
        marginLeft: 5,
    },
    textPrice: {
        fontFamily: "Inter-SemiBold",
        fontSize: 18,
        color: Colors.primary,
        marginTop: 10,
    },
});
