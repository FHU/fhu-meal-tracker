import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import ProgressBar from "@/components/ProgressBar";
import { Text, View } from "@/components/Themed";

export default function DashboardScreen() {
  const getData = async () => {
    const response = await fetch("data.json");
    const data = await response.json();

    setMealsRemaining(data.meals.remaining);
  };

  useEffect(() => {
    getData();
  }, []);

  const [mealsRemaining, setMealsRemaining] = useState(0);

  // use the data as js object
  // some state = data.meals.remaining

  const stepsToday = 8642;
  const stepsGoal = 10000;

  const stepsCurrentYesterday = 6843;
  const stepsCurrentTomorrow = 0;

  const savingsBalance = 97;
  const savingsGoal = 1100;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>

      <ProgressBar
        title="Steps Yesterday"
        label={`${stepsCurrentYesterday} / ${stepsGoal}`}
        percentage={(stepsCurrentYesterday / stepsGoal) * 100}
      />

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <ProgressBar
        title="Steps Today"
        label={`${stepsToday} / ${stepsGoal}`}
        percentage={(stepsToday / stepsGoal) * 100}
      />

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <ProgressBar
        title="Steps Tomorrow"
        label={`${stepsCurrentTomorrow} / ${stepsGoal}`}
        percentage={(stepsCurrentTomorrow / stepsGoal) * 100}
      />

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <ProgressBar
        title={`Savings Account`}
        label={`$${savingsBalance} / ${savingsGoal} as of ${new Date().toLocaleDateString(
          "en-US",
          {
            weekday: "short", // "Monday"
            year: "numeric", // "2025"
            month: "short", // "September"
            day: "numeric", // "29"
          }
        )}`}
        percentage={(savingsBalance / savingsGoal) * 100}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 16,
    height: 1,
    width: "80%",
  },
});
