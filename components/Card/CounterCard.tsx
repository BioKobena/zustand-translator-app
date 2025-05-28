import { Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { styles } from "@/styles/counter.style";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "expo-router";
const CounterCard = () => {
    const naviation = useNavigation();
    useEffect(() => {
        naviation.setOptions({
            headerShown: false,
            tabBarStyle: {
                display: "none",
            },
            gestureEnabled: true,
            animationEnabled: true,
        });
    }, []);

    const [displayPaidMenu, setDisplayPaidMenu] = React.useState(false);
    const closeCard = () => {
        naviation.setOptions({
            tabBarStyle: {
                display: "flex",
            },
        });
        setDisplayPaidMenu(true);
    };
    return (
        <View
            style={[styles.container, displayPaidMenu && { display: "none" }]}
        >
            <TouchableOpacity
                onPress={closeCard}
                style={{ position: "absolute", right: 18, top: 18 }}
            >
                <Text
                    style={{
                        color: Colors.error,
                        fontFamily: "Inter-Regular",
                        fontSize: 16,
                    }}
                >
                    Fermer
                </Text>
            </TouchableOpacity>
            <View>
                <View></View>
            </View>
        </View>
    );
};

export default CounterCard;
