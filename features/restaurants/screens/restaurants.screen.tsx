import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native';

import { RestaurantCard } from '../components/RestaurantCard';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const SearchBarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;

const RestaurantsFeed = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};

  background-color: ${(props) => props.theme.colors.ui.tertiary};
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <SafeArea>
      <SearchBarContainer>
        <Searchbar
          onChangeText={onChangeSearch}
          value={searchQuery}
          placeholder="search"
        />
      </SearchBarContainer>
      <RestaurantsFeed>
        <RestaurantCard />
      </RestaurantsFeed>
    </SafeArea>
  );
};
