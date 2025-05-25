import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import { styles } from "@/styles/flatlist.style";

const images: Record<string, any> = {
  burger: require("../../assets/images/flaticon/burger.png"),
  pizza: require("../../assets/images/flaticon/pizza.png"),
  juice: require("../../assets/images/flaticon/juice.png"),
  tortilla: require("../../assets/images/flaticon/tortilla.png"),
  croissant: require("../../assets/images/flaticon/croissant.png"),
  kebab: require("../../assets/images/flaticon/kebab.png"),
};

const data = [
  { id: "1", name: "burger" },
  { id: "2", name: "pizza" },
  { id: "3", name: "juice" },
  { id: "4", name: "tortilla" },
  { id: "5", name: "croissant" },
  { id: "6", name: "kebab" },
];

const FlatListCard = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollContainer}
    >
      <View style={styles.container}>
        {data.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image
              source={images[item.name]}
              style={styles.image}
            />
            <Text style={styles.textCard}>{item.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default FlatListCard;
