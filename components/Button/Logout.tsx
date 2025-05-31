import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";

const Logout = () => {
    return (
        <View style={styles.container}>
            <AntDesign name="logout" size={25} color={Colors.error} />
            <Text style={styles.title}>Se déconnecter</Text>
        </View>
    );
};

export default Logout;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderWidth: 1,
        borderColor: Colors.gray,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        backgroundColor: Colors.background,
        gap: 15,
        marginTop: 20,
        borderRadius: 35,
    },
    title: {
        fontSize: 20,
        fontFamily: "Inter-Bold",
        color: Colors.error,
    },
});
