import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

type JobItem = {
    job_id: any;
};

const getContainerStyle = (selectedJob: any, item: JobItem): ViewStyle => ({
    width: 250,
    padding: SIZES.xLarge,
    backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFF",
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
});

const getLogoContainerStyle = (selectedJob: any, item: JobItem): ViewStyle => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
});

const getJobNameStyle = (selectedJob: any, item: JobItem): TextStyle => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
});

const getPublisherStyle = (selectedJob: any, item: JobItem): TextStyle => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
});

const styles = StyleSheet.create({
    container: {} as ViewStyle, // Placeholder, used only if accessed directly
    logoContainer: {} as ViewStyle, // Placeholder for TypeScript
    jobName: {} as TextStyle, // Placeholder for TypeScript
    publisher: {} as TextStyle, // Placeholder for TypeScript

    // Static styles
    logoImage: {
        width: "70%",
        height: "70%",
    } as ImageStyle,
    companyName: {
        fontSize: SIZES.medium,
        fontFamily: FONT.regular,
        color: "#B3AEC6",
        marginTop: SIZES.small / 1.5,
    } as TextStyle,
    infoContainer: {
        marginTop: SIZES.large,
    } as ViewStyle,
    infoWrapper: {
        flexDirection: "row",
        marginTop: 5,
        justifyContent: "flex-start",
        alignItems: "center",
    } as ViewStyle,
    location: {
        fontSize: SIZES.medium - 2,
        fontFamily: FONT.regular,
        color: "#B3AEC6",
    } as TextStyle,
});

// Export dynamic styles as functions
export const dynamicStyles = {
    getContainerStyle,
    getLogoContainerStyle,
    getJobNameStyle,
    getPublisherStyle,
};

export default styles;
