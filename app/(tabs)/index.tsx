import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/styles/home.style";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import FlatListCard from "@/components/Card/FlatListCard";
import MenuCard from "@/components/Card/MenuCard";
const index = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" backgroundColor="transparent" />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          {/* <View style={styles.imageBackground}> */}
          <ImageBackground
            style={styles.image}
            source={require("@/assets/images/wrapper/bg-3.png")}
          />
          {/* </View> */}

          <View style={styles.contentTop}>
            <View style={styles.containerLocationNot}>
              <View style={styles.location}>
                <View style={styles.commonTop}>
                  <Text style={styles.commonText}>Localisation</Text>
                  <Ionicons
                    name="chevron-down"
                    size={27}
                    color={Colors.background}
                  />
                </View>
                <View style={styles.commonTop}>
                  <Ionicons
                    name="location-outline"
                    size={27}
                    color={Colors.background}
                  />
                  <Text style={styles.commonText}>Strasbourg, Orbey</Text>
                </View>
              </View>

              <View style={styles.notificationSearch}>
                <Ionicons
                  style={styles.iconRight}
                  name="search"
                  size={27}
                  color={Colors.background}
                />
                <Ionicons
                  style={styles.iconRight}
                  name="notifications-outline"
                  size={27}
                  color={Colors.background}
                />
              </View>
            </View>
            <Text style={styles.textTitle}>
              Découvrez le meilleur de la gastronomie pour vous
            </Text>
          </View>
        </View>

        <View style={styles.scrollViewContainer}>
          <View style={styles.flatListContainer}>
            <View style={styles.topFlatContainer}>
              <Text style={styles.textFlatTitle}>Trouvez votre catégorie</Text>
              <Text style={[styles.textFlatTitle, { color: Colors.primary }]}>
                Voir plus
              </Text>
            </View>
            <FlatListCard />
          </View>
          <ScrollView
            horizontal
            style={{
              width: "100%",
              height: 450,
              padding: 5,
              overflowX: "scroll",
            }}
          >
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
