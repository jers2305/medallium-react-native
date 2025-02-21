import {StyleSheet} from "react-native";
import {AppColors} from "../../themes/AppTheme";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.background,
        paddingHorizontal: 30,
        paddingTop: 30
    },
    topSection: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "80%",

    },
    icon: {
        width: 23,
        height: 23,
    },
    containerCard:{
        width: "100%",
        maxHeight: "90%"
    },
    sagaLogo: {
        width: "100%",
        height: "30%",
        flexDirection: "row",
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        resizeMode: "contain",
    },
})
