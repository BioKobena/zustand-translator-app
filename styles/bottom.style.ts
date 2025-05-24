import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10%",
    },
    textTitle: {
        fontFamily: "Inter-Regular",
        fontSize: 16,
        color: Colors.textGray,
        // borderLeftColor: Colors.border,
        // borderLeftWidth: 1,
        width: "100%",
    },
    logoContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        gap: 20,
    },
    iconConnexion: {
        width: 45,
        height: 45,
        borderWidth: 0.5,
        borderColor: Colors.border,
        padding: 5,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
        borderRadius: 5,
    },
    textBottomContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        gap: 5,
    },
    textSignup: {
        fontFamily: "Inter-Regular",
        color: Colors.textGray,
    },
    signup: {
        fontFamily: "Inter-SemiBold",
        color: Colors.primary,
    },
    line: {
        width: "25%",
        height: 0.5,
        backgroundColor: Colors.gray,
        position: "absolute",
        right: "53%",
        top: 12,
    },
    lineLeft: {
        width: "25%",
        height: 0.5,
        backgroundColor: Colors.gray,
        position: "absolute",
        left: "53%",
        top: 12,
    },
});
