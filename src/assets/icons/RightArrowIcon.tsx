import React from "react";
import { StyleSheet, View } from "react-native";

import Svg, { Path } from "react-native-svg";

const RightArrowIcon: React.FC<{ color: string; customStyle?: any }> = ({
  color,
  customStyle,
}) => {
  return (
    <View style={customStyle}>
      <Svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        //xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M5.93994 13.28L10.2866 8.9333C10.7999 8.41997 10.7999 7.57997 10.2866 7.06664L5.93994 2.71997"
          stroke={color}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};

export default RightArrowIcon;
