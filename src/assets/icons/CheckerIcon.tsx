import React from "react";
import { StyleSheet, View } from "react-native";

import Svg, { Path } from "react-native-svg";

const CheckerIcon: React.FC<{ color: string; customStyle?: any }> = ({
  color,
  customStyle,
}) => {
  return (
    <View style={customStyle}>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        //xmlns="http://www.w3.org/2000/Svg"
      >
        <Path
          d="M9.31006 14.7L10.8101 16.2L14.8101 12.2"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z"
          stroke={color}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V16C21 20 20 22 15 22H9C4 22 3 20 3 16V10C3 5.44002 4.67 4.20002 8 4.02002"
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

const styles = StyleSheet.create({});
export default CheckerIcon;
