import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    imageBackground: {
        width: "100%",
        height: "70%",
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.9,
    },
    image: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: -5,
        backgroundSize: "cover",
    },
    topContainer: {
        width: "100%",
        height: "70%",
        position: "relative",
    },
    contentTop: {
        padding: 5,
        position: "absolute",
        top: -30,
    },

    containerLocationNot: {
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: 15,
    },
    location: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 5,
    },
    notificationSearch: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 15,
    },
    textTitle: {
        fontFamily: "Inter-Bold",
        fontSize: 25,
        color: Colors.textWhite,
        paddingLeft: 15,
    },
    commonTop: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    },
    commonText: {
        fontFamily: "Inter-Light",
        fontSize: 18,
        color: Colors.textWhite,
    },
    iconRight: {
        borderWidth: 1,
        borderRadius: 50,
        borderColor: Colors.white,
        padding: 5,
    },
});
