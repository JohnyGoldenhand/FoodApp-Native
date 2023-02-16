import React from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-paper';
import { StyleSheet } from 'react-native';
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
    <Card style={styles.card} elevation={5}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Card.Content>
        <Text style={styles.title}>{name}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: 'white' },
  cover: { backgroundColor: 'white', padding: 20 },
  title: { padding: 16 },
});
