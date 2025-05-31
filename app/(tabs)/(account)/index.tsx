import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { styles } from "@/styles/account.style";
import Parametres from "@/components/Settings/Parametres";
import Logout from "@/components/Button/Logout";
const Account = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <View>
                <Text style={styles.titleProfil}>Réglages profil</Text>
            </View>
            <View style={styles.topContainer}>
                <Image
                    style={styles.image}
                    source={require("@/assets/images/photos/biopaul.jpeg")}
                />
                <Text style={styles.nameProfil}>Bio Paul KOBENA</Text>
                <Text style={styles.emailProfil}>biokobena07@gmail.com</Text>
            </View>

            <View style={styles.line} />

            <View style={styles.mainContainer}>
                <View style={styles.profilContainer}>
                    <Text style={styles.titleFirst}>Profil</Text>
                    <View style={styles.itemEl}>
                        <Parametres
                            title="Données personnelles"
                            icon="person-remove-outline"
                        />
                        <Parametres
                            title="Réglages"
                            icon="settings-outline"
                        />
                        <Parametres
                            title="Carte de crédit"
                            icon="card-outline"
                        />
                    </View>
                </View>
                <View style={[styles.profilContainer, { marginTop: 15 }]}>
                    <Text style={styles.titleFirst}>Support</Text>
                    <View style={styles.itemEl}>
                        <Parametres
                            title="Centre d'aide"
                            icon="help-circle-outline"
                        />
                        <Parametres
                            title="Supprimer votre compte"
                            icon="trash-outline"
                        />
                        <Parametres
                            title="Ajouter un autre compte"
                            icon="person-add-sharp"
                        />
                    </View>
                </View>
                <Logout />
            </View>
        </View>
    );
};

export default Account;
