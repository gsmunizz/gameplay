import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

import { 
  ImageBackground, 
  Text, 
  View, 
  FlatList 
} from "react-native";

import { styles } from "./style";
import { theme } from "../../global/styles/theme";

import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Members } from "../../components/Members";
import { Header } from "../../components/Header";

export function AppointmentDetails() {
  const bannerImg = "../../assets/banner.png";

  const members = [
    {
      id: "1",
      username: "Gabriel Muniz",
      avatar_url: "https://github.com/gsmunizz.png",
      status: "online",
    },
    {
      id: "2",
      username: "Rodrigo",
      avatar_url: "https://github.com/rodrigorgtic.png",
      status: "offline",
    },
    {
      id: "3",
      username: "Rodrigo",
      avatar_url: "https://github.com/rodrigorgtic.png",
      status: "offline",
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      
      <ImageBackground source={require(bannerImg)} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Members data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na Partida" />
      </View>
    </Background>
  );
}
