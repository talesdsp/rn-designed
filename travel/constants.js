import { StyleSheet } from "react-native"

export const colors = {
  darkBg: "#222",
  lightBg: "#333",
  darkHl: "#bbb",
  lightHl: "#888",
  pink: "#ea3372",
  orange: "#f97878",
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
    fontWeight: "600",
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
  subTitle: {
    fontWeight: "600",
    textTransform: "uppercase",
    color: "rgba(255,255,255, 0.6)",
    fontSize: 15,
    letterSpacing: 1,
  },
  smallText: {
    fontSize: 12,
    fontWeight: "800",
    color: colors.text,
  },
  absoluteFull: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.pink,
    borderRadius: 100,
  },
})
