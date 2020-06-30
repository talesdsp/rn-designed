import { StyleSheet } from "react-native"

export const colors = {
  darkBg: "#222",
  lightBg: "#333",
  darkHl: "#666",
  pink: "#ea3372",
  text: "#fff",
  textSec: "#aaa",
}

export const gs = StyleSheet.create({
  sectionContainer: {
    paddingVertical: 24,
    paddingHorizontal: 32,
    marginBottom: 8,
    backgroundColor: colors.lightBg,
  },
  sectionTitle: {
    fontWeight: "400",
    color: colors.text,
    fontSize: 15,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    borderBottomColor: "#444",
    borderBottomWidth: 1,
    marginVertical: 24,
  },
  title: {
    color: colors.text,
    fontSize: 30,
  },
})
