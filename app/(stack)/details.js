import { View, Text, Button } from "react-native";
import { Link } from "expo-router";

export default function Details({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>

      <Link href="/home">Go to Home</Link>

      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("details")}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}