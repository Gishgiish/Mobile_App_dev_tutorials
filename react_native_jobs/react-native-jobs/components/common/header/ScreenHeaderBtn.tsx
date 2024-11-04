import { Image, TouchableOpacity } from "react-native";

import { styles, btnImg } from "./screenheader.style";
import React from "react";


const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
    return (
        <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
            <Image
                source={iconUrl}
                resizeMode='cover'
                style={btnImg(dimension)}
            />
        </TouchableOpacity>
    );
};

export default ScreenHeaderBtn;