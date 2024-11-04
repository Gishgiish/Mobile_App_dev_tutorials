import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../../constants";

type ButtonStyleProps = {
    name: string;
    activeTab: string;
};

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.small,
        marginBottom: SIZES.small / 2,
    } as ViewStyle,

    btn: ({ name, activeTab }: ButtonStyleProps): ViewStyle => ({
        paddingVertical: SIZES.medium,
        paddingHorizontal: SIZES.xLarge,
        backgroundColor: name === activeTab ? COLORS.primary : "#F3F4F8",
        borderRadius: SIZES.medium,
        marginLeft: 2,
        ...SHADOWS.medium,
        shadowColor: COLORS.white,
    }),

    btnText: ({ name, activeTab }: ButtonStyleProps): TextStyle => ({
        fontFamily: "DMMedium",
        fontSize: SIZES.small,
        color: name === activeTab ? "#C3BFCC" : "#AAA9B8",
    }),
});

export default styles;
