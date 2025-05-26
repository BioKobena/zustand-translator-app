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
        left: "33%",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
    },
    textAbout: {
        color: Colors.white,
        fontFamily: "Inter-Medium",
        fontSize: 16,
    },
    menuTitle: {
        fontFamily: "Inter-SemiBold",
        fontSize: 20,
        color: Colors.gray,
        marginTop: 10,
    },
    iconImageBurger: {
        width: "100%",
        height: "100%",
    },
    titleMenuContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        width: "100%",
        margin: 5,
        alignContent:"center",
    },
    imageContainer: {
        width: "10%",
        height: 35,
    },
});
