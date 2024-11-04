import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    btnContainer: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.small / 1.25,
        justifyContent: "center",
        alignItems: "center",
    },
});

// Define btnImg as a separate function for dynamic styling
const btnImg = (dimension: number) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
});

export { styles, btnImg };
