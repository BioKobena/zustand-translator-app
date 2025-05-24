import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "95%",
        padding: 15,
    },
    topContainer: {
        width: "90%",
        height: 200,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    titleConnect: {
        fontFamily: "Inter-Bold",
        fontSize: 28,
        color: Colors.textBlack,
        marginBottom: 5,
    },
    textInformation: {
        fontFamily: "Inter-Light",
        fontSize: 16,
        color: Colors.textGray,
    },
    inputContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 25,
    },
    forgetPassword: {
        color: Colors.primary,
        position: "absolute",
        bottom: -35,
        right: 5,
        fontFamily: "Inter-Medium",
        fontSize: 14,
    },
    buttonContainer: {
        width: "100%",
        marginTop: 20,
    },
    bottomContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
});
