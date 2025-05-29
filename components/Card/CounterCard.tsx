import { Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { styles } from "@/styles/counter.style";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "expo-router";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

type CounterCardProps = {
    open?: boolean;
};
const CounterCard = ({ open }: CounterCardProps) => {
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
                backgroundColor: Colors.white,
                borderTopWidth: 0,
                height: 60,
                position: "absolute",
                width: "95%",
                alignSelf: "center",
                marginLeft: "2%",
                borderRadius: 50,
                marginBottom: 15,
                boxShadow: "none",
                elevation: 0.2,
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
                style={{ position: "absolute", right: 18, top: 8, zIndex: 100 }}
            >
                <Text
                    style={{
                        color: Colors.error,
                        fontFamily: "Inter-Regular",
                        fontSize: 26,
                    }}
                >
                    <Ionicons name="close" size={26} color={Colors.error} />
                </Text>
            </TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.counterContainer}>
                    <View style={styles.countButton}>
                        <Text style={styles.textButton}>-</Text>
                    </View>
                    <View
                        style={[styles.countButton, {
                            backgroundColor: "transparent",
                            borderWidth: 0,
                        }]}
                    >
                        <Text style={styles.textButton}>7</Text>
                    </View>
                    <View
                        style={[styles.countButton]}
                    >
                        <Text style={styles.textButton}>+</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.buttonCommand}>
                    <SimpleLineIcons
                        name="basket"
                        size={30}
                        color={Colors.white}
                    />
                    <Text style={styles.textCommand}>Ajouter au panier</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CounterCard;
