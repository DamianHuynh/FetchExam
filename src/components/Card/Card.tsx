import {StyleSheet, View} from 'react-native';
import React from 'react';
import Text from '../Text';
import {scale} from '../../utils';
import colors from '../../constants/colors';

interface ICardProps {
  priceText: string;
  infoText: string;
  Banner: (props: any) => JSX.Element;
  backdrop: string;
}

const Card = ({priceText, infoText, Banner, backdrop}: ICardProps) => {
  return (
    <View style={styles.cardContainer}>
      <Banner backdrop={backdrop} />
      <View style={styles.cardBodyContainer}>
        <Text priceText>{priceText}</Text>
        <Text infoText>{infoText}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    width: scale(200),
    height: scale(240),
    backgroundColor: colors.white,
    borderRadius: scale(4),
    marginVertical: scale(24),
  },
  cardBodyContainer: {
    padding: scale(16),
  },
});
