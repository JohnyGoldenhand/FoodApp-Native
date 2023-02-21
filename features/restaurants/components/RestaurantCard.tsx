import React from 'react';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';
import startIcon from '../../../assets/svg/star';
import openIcon from '../../../assets/svg/open';
import { Image } from 'react-native';

interface RestaurantProps {
  name: string;
  icon?: string;
  photos: Array<string>;
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily: boolean;
}

const StyledRestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  padding: ${(props) => props.theme.spaces.medium};
`;

const StyledTitle = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Adress = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.spaces.medium};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.spaces.small};
  padding-bottom: ${(props) => props.theme.spaces.small};
`;

const RatingAndInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ClosedLabel = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.caption};
  padding-right: ${(props) => props.theme.spaces.medium};
  color: ${(props) => props.theme.colors.text.error};
`;

const OpeningInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
`;

export const RestaurantCard = (restaurant: RestaurantProps) => {
  const {
    name = 'some restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <StyledRestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <Info>
          <StyledTitle>{name}</StyledTitle>
          <RatingAndInfo>
            <Rating>
              {ratingArray.map((star, id) => (
                <SvgXml xml={startIcon} width={20} height={20} key={id} />
              ))}
            </Rating>
            <OpeningInfo>
              {isClosedTemporarily && (
                <ClosedLabel>CLOSED TEMPORARILY</ClosedLabel>
              )}
              {isOpenNow && <SvgXml xml={openIcon} width={20} height={20} />}
              {icon && (
                <Image
                  source={{ uri: icon }}
                  style={{ width: 15, height: 15, marginLeft: 16 }}
                />
              )}
            </OpeningInfo>
          </RatingAndInfo>
          <Adress>{address}</Adress>
        </Info>
      </Card.Content>
    </StyledRestaurantCard>
  );
};
