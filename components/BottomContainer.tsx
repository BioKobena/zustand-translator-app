import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "@/styles/bottom.style";

type BottomProps = {
    signup?: boolean;
};
const BottomContainer = ({ signup }: BottomProps) => {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.line} />
                <Text style={styles.textTitle}>Ou connectez vous avec</Text>
                <View style={styles.lineLeft} />
            </View>
            <View style={styles.logoContainer}>
                <TouchableOpacity style={styles.iconConnexion}>
                    <Image
                        style={styles.iconImage}
                        source={require("@/assets/images/icon/google.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconConnexion}>
                    <Image
                        style={styles.iconImage}
                        source={require("@/assets/images/icon/facebook.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconConnexion}>
                    <Image
                        style={styles.iconImage}
                        source={require("@/assets/images/icon/apple.png")}
                    />
                </TouchableOpacity>
            </View>
            {signup
                ? (
                    <View style={styles.textBottomContainer}>
                        <Text>Vous n'avez pas de compte ?</Text>{" "}
                        <Text>Inscrivez-vous</Text>
                    </View>
                )
                : (
                    <View style={styles.textBottomContainer}>
                        <Text style={styles.textSignup}>
                            Vous avez un compte ?
                        </Text>
                        <Text style={styles.signup}>Connectez-vous</Text>
                    </View>
                )}
        </View>
    );
};

export default BottomContainer;
