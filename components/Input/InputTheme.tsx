import { Text, TextInput, View } from "react-native";
import React from "react";
import { styles } from "@/styles/input.style";

type InputViewProps = {
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    secureTextEntry?: boolean;
    // text: string;
};
const InputView = (
    { placeholder, value, onChangeText, secureTextEntry }: InputViewProps,
) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input]}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
            {/* <Text style={styles.errorText}>Error message</Text> */}
        </View>
    );
};

export default InputView;
