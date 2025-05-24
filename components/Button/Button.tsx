import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "@/styles/button.style";
import { useRouter } from "expo-router";
type ButtonProps = {
    onPress?: () => void;
    title?: string;
    // disabled?: boolean;
    // style?: object;
    // textStyle?: object;
};

const BoutonView = ({ onPress, title }: ButtonProps) => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push("/(tabs)")}
            >
                <Text style={styles.textButton}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BoutonView;
