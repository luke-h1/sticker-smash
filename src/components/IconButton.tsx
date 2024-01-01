import { Pressable, StyleSheet, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface Props {
  icon: string;
  label: string;
  onPress?: () => void;
}

const IconButton = ({ icon, label, onPress }: Props) => {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      {/* @ts-ignore */}
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
};
export default IconButton;

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonLabel: {
    color: "#fff",
    marginTop: 12,
  },
});
