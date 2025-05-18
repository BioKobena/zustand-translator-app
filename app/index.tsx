import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import i18n from "@/lib/i18n";
import { useLanguageStore } from "@/lib/languageStore";

export default function App() {
  const { language, setLanguage } = useLanguageStore();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.buttonText}>
        {i18n.t("salutation")} Charlie
      </Text>
      <Text>Langue actuelle : {language}</Text>

      <View style={styles.languageContainer}>
        <Button
          title="Switch to English"
          onPress={() =>
            setLanguage("en")}
        />
        <Button title="Changer en français" onPress={() => setLanguage("fr")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#007AFF",
    borderRadius: 5,
  },
  buttonText: {
    color: "lightblue",
    fontSize: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },

  languageText: {
    fontSize: 16,
    marginTop: 10,
  },
  languageButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  languageContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    width: "100%",
    gap: 16,
  },
  languageButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#007AFF",
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
