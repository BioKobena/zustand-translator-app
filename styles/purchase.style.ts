import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 15,
        width: "100%",
    },
    image: {
        width: "100%",
        height: 300,
        borderRadius: 10,
    },
    titleAbout: {
        position: "absolute",
        top: 30,
        left: "26%",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
    },
    textAbout: {
        color: Colors.white,
        fontFamily: "Inter-Regular",
        fontSize: 18,
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
        alignContent: "center",
    },
    imageContainer: {
        width: "10%",
        height: 35,
    },
    textPrice: {
        fontFamily: "Inter-Bold",
        fontSize: 25,
        color: Colors.primary,
    },
    titleText: {
        fontFamily: "Inter-Medium",
        color: Colors.textGray,
        fontSize: 16,
    },
    containerMiddle: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 22,
        marginVertical: 10,
    },
    commonDecoration: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
    },
    underContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
    },
    line: {
        borderWidth: 0.3,
        borderColor: Colors.gray,
        width: "100%",
    },
    descriptionTitle: {
        fontFamily: "Inter-SemiBold",
        fontSize: 20,
        color: Colors.textGray,
        marginVertical: 5,
    },
    descriptionContainer: {
        width: "100%",
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    contentDescription: {
        fontSize: 15,
        color: Colors.textGray,
        fontFamily: "Inter-Light",
        letterSpacing: 0.2,
    },
    recommandationContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginTop: 10,
        width: "100%",
        height: "auto",
    },
    titleContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    titleRecommandation: {
        fontFamily: "Inter-SemiBold",
        fontSize: 16,
        color: Colors.textBlack,
    },
    seemore: {
        fontFamily: "Inter-Medium",
        color: Colors.primary,
        fontSize: 16,
    },
    menuCardContainer: {
        width: "100%",
        flexDirection: "row",
        gap: 5,
        marginVertical: 5,
    },
});
