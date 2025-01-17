import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ITheme } from "../../utils/contexts/interfaces";
import { ThemeContext } from "../../utils/contexts";

import Svg, { Path } from "react-native-svg";
import { regionalThemes } from "../../utils/theme";

function getStyles(theme: ITheme): any {
  return StyleSheet.create({
    bar: {
      backgroundColor: theme.colors.regionalColor,
      position: "absolute",
      bottom: 0,
      width: 36,
      height: 5,
      borderTopLeftRadius: 2,
      borderTopRightRadius: 2,
    },
  });
}

const SavedIcon: React.FC<{
  color?: any;
  opacity?: any;
  colorFill?: any;
  touchableOpacity?: number;
  width?: any;
  customOnPress?: any;
}> = ({
  color,
  opacity,
  colorFill,
  touchableOpacity = 1,
  customOnPress,
  width = "24",
}) => {
  const { theme, currentRegion } = useContext(ThemeContext);
  return (
    <>
      {/* <Svg
        width={width}
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        //xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M16.82 2H7.18C5.05 2 3.32 3.74 3.32 5.86V19.95C3.32 21.75 4.61 22.51 6.19 21.64L11.07 18.93C11.59 18.64 12.43 18.64 12.94 18.93L17.82 21.64C19.4 22.52 20.69 21.76 20.69 19.95V5.86C20.68 3.74 18.95 2 16.82 2Z"
          stroke={
            color === regionalThemes[currentRegion].color
              ? regionalThemes[currentRegion].color
              : theme.colors.g1
          }
          fill={colorFill}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg> */}
      <Svg
        width={width}
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        //xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M0 20H16.4706V17.6471H0M16.4706 7.05882H11.7647V0H4.70588V7.05882H0L8.23529 15.2941L16.4706 7.05882Z"
          fill={
            color === regionalThemes[currentRegion].color
              ? regionalThemes[currentRegion].color
              : theme.colors.g1
          }
        />
      </Svg>
      <View
        style={{
          ...getStyles(theme).bar,
          opacity: opacity,
          backgroundColor: regionalThemes[currentRegion].color,
        }}
      />
    </>
  );
};

export default SavedIcon;
