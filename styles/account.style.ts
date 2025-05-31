import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        padding: 20,
        justifyContent: "flex-start",
        // alignItems: "center",
    },
    line: {
        width: "100%",
        height: 1.5,
        backgroundColor: Colors.gray,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 90,
    },
    titleProfil: {
        fontFamily: "Inter-SemiBold",
        fontSize: 22,
        marginBottom: 25,
        textAlign: "center",
    },
    topContainer: {
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        marginBottom: 15,
    },
    nameProfil: {
        fontFamily: "Inter-SemiBold",
        fontSize: 18,
    },
    emailProfil: {
        fontFamily: "Inter-Regular",
        fontSize: 16,
    },
    mainContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 0,
        marginVertical: 10,
    },
    profilContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    titleFirst: {
        fontFamily: "Inter-Medium",
        color: Colors.textGray,
        fontSize: 18,
        marginBottom: 10,
    },
    itemEl: {
        flexDirection: "column",
        gap: 10,
    },
});
