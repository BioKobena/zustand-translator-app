import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import InputView from "@/components/Input/InputTheme";
import { styles } from "@/styles/login.style";
import BoutonView from "@/components/Button/Button";
import BottomContainer from "@/components/BottomContainer";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};
const index = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.titleConnect}>
            Connectez vous à votre compte.
          </Text>
          <Text style={styles.textInformation}>
            Veuillez remplir les champs ci-dessous
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <InputView placeholder="Email" />
          <InputView placeholder="Mot de passe" secureTextEntry />
          <Link style={styles.forgetPassword} href="/(login)">
            Mot de passe oublié ?
          </Link>
        </View>

        <View style={styles.buttonContainer}>
          <BoutonView title="Se connecter" />
        </View>
        <View style={styles.bottomContainer}>
          <BottomContainer />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
