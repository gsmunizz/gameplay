import React from "react";
import { Image } from "react-native";

import { styles } from "./style";

export function GuildIcon() {
  const uri = 'https://w7.pngwing.com/pngs/705/535/png-transparent-computer-icons-discord-logo-discord-icon-rectangle-logo-smiley.png'

  return (
    <Image 
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />
  );
}
