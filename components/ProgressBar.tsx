import React from "react";
import { StyleSheet, Text, View } from "react-native";

type ProgressBarProps = {
  title: string;
  percentage: number;
  label: string;
};

const ProgressBar = ({title, label, percentage}:ProgressBarProps) => {

//const formattedPercentage = Math.round(percentage * 10) / 10;
const formattedPercentage = percentage.toFixed(1);    // pads with trailing 0

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.rowTitle}> {title}</Text>
        <Text style={styles.rowPercent}> {formattedPercentage}%</Text>
      </View>

      <View style={styles.track}>
        <View style={[ {width: `${percentage}%`}, styles.progress]}></View>
      </View>

      <Text> {label}</Text>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
    container : {
        display: "flex",
        // flex:1,
        padding: 8,
        justifyContent: "flex-start",
        alignItems: "stretch"
    },
  row: {
    flexDirection: "row",
    justifyContent:'space-between',
    width: "100%",
  },
  rowTitle: {
    fontSize: 24,
    padding: 4
  },
  rowPercent: {
    fontSize: 24,
    fontWeight: 800
  },
  track: {
    backgroundColor: "#ccc",
    height: 16,
    overflow: "hidden",
    borderRadius: 8,
    marginBlock:4,
    flexDirection: "row"
  },
  progress: {
    backgroundColor: "#004568",
    borderRadius: 8
  }
});
