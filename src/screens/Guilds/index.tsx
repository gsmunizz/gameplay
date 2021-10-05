import React from 'react';

import {
  View,
  FlatList
} from 'react-native';

import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './style';

type Props = {
  handleGuildSelect: (guild: GuildProps) => void
}

export function Guilds({ handleGuildSelect}: Props){
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true
    },
    {
      id: '2',
      name: 'Zé da feira',
      icon: 'image.png',
      owner: true
    },
    {
      id: '3',
      name: 'Tonin do açougue',
      icon: 'image.png',
      owner: true
    },
    {
      id: '4',
      name: 'Nheca de pitibiribas',
      icon: 'image.png',
      owner: true
    },
    {
      id: '5',
      name: 'Lendários',
      icon: 'image.png',
      owner: true
    },
    {
      id: '6',
      name: 'Lendários',
      icon: 'image.png',
      owner: true
    },
  ]
  return (
    <View style={styles.container}>
      <FlatList 
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild 
            data={item} 
            onPress={() => handleGuildSelect(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        contentContainerStyle={{paddingBottom: 69, paddingTop: 103}}
        ListHeaderComponent={() => <ListDivider isCentered />}
        style={styles.guilds}
      />
    </View>
  );
}