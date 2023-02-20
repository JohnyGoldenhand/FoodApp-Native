import React from 'react';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
interface RestaurantProps {
  name: string;
  icon?: string;
  photos: Array<string>;
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosed: boolean;
}

const StyledRestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  padding: ${(props) => props.theme.space[3]};
`;

const StyledTitle = styled.Text`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.text.primary};
`;

export const RestaurantCard = (restaurant: RestaurantProps) => {
  const {
    name = 'some restaurant',
    icon,
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosed,
  } = restaurant;
  return (
    <StyledRestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <StyledTitle>{name}</StyledTitle>
      </Card.Content>
    </StyledRestaurantCard>
  );
};
