import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MainLayout from "../layouts/MainLayout";
import { ThemeContext } from "../utils/contexts";
import { ITheme } from "../utils/contexts/interfaces";
import {
  FacebookIcon,
  InstagramIcon,
  PeopleIcon,
  PhoneIcon,
  TwitterIcon,
  BackArrowIcon,
  InfoIcon,
  DrawerIcon,
} from "../assets/icons";

function getStyle(theme: ITheme): any {
  return StyleSheet.create({
    container: {
      flex: 1,
      ...theme.default,

      backgroundColor: theme.colors.background,
    },
    section: {
      marginVertical: 12,
      justifyContent: "flex-start",
      width: "100%",
    },
    subHeader: {
      flexDirection: "row",
      alignItems: "center",
    },
    description: {
      ...theme.default,
      marginTop: 8,
      fontSize: 13,
      lineHeight: 20,
      color: theme.colors.g5,
    },
    title: {
      ...theme.default,
      fontWeight: "600",
      marginLeft: 8,
      fontSize: 15,
    },
    icons: {
      marginTop: 12,
      flexDirection: "row",
    },
    horizontalLine: {
      width: "200%",
      marginLeft: "-50%",
      height: 1,
      marginVertical: 10,
      backgroundColor: theme.colors.g4,
    },
    header: {
      flexDirection: "row",
      marginTop: 24,
    },
  });
}

const About: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <MainLayout customStyles={getStyle(theme).container}>
      <View style={getStyle(theme).header}>
        <BackArrowIcon
          customOnPress={() => navigation.navigate("Home")}
          color={theme.colors.primary}
        />
        <View style={{ marginStart: "auto" }}>
          <DrawerIcon customOnPress={() => navigation.openDrawer()} />
        </View>
      </View>
      <View style={getStyle(theme).horizontalLine}></View>
      <View style={getStyle(theme).section}>
        <View style={getStyle(theme).subHeader}>
          <InfoIcon color={theme.colors.primary} width={16} />
          <Text style={getStyle(theme).title}>ABOUT PIB</Text>
        </View>
        <Text style={getStyle(theme).fullLine}>
          The Press Information Bureau (PIB) is the nodal agency of the
          Government of India to disseminate information to the print and
          electronic media on government policies, programmes, interface between
          the Government and the media and also serves to provide feedback to
          the Government on people’s reaction as reflected in the media.
        </Text>
      </View>
      <View style={getStyle(theme).horizontalLine}></View>
      <View style={getStyle(theme).section}>
        <View style={getStyle(theme).subHeader}>
          <PhoneIcon />
          <Text style={getStyle(theme).title}>CONTACT US</Text>
        </View>
        <View style={getStyle(theme).description}>
          <Text style={getStyle(theme).fullLine}>Press Information Bureau</Text>
          <Text style={getStyle(theme).fullLine}>
            {"’A’"}- Wing Shastri Bhawan
          </Text>
          <Text style={getStyle(theme).fullLine}>
            Dr. Rajendra Prasad Road,
          </Text>
          <Text style={getStyle(theme).fullLine}>New Delhi - 110 001,</Text>
          <Text style={getStyle(theme).fullLine}>Phone- 011-23389338</Text>
        </View>
      </View>
      <View style={getStyle(theme).horizontalLine}></View>
      <View style={getStyle(theme).section}>
        <View style={getStyle(theme).subHeader}>
          <PeopleIcon />
          <Text style={getStyle(theme).title}>SOCIAL MEDIA</Text>
        </View>
        <View style={getStyle(theme).icons}>
          <TwitterIcon style={{ marginRight: "10%" }} />
          <FacebookIcon style={{ marginRight: "10%" }} />
          <InstagramIcon />
        </View>
      </View>
      <View style={getStyle(theme).horizontalLine}></View>
    </MainLayout>
  );
};

export default About;
