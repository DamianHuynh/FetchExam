import {StyleSheet, Text as RNText, TextProps} from 'react-native';
import React from 'react';
import {scale} from '../../utils';
import colors from '../../constants/colors';

interface ITextProps extends TextProps {
  infoText?: boolean;
  priceText?: boolean;
  headLineText?: boolean;
}

const Text = ({
  infoText,
  priceText,
  headLineText,
  style,
  ...props
}: ITextProps) => {
  const _style = StyleSheet.flatten([
    headLineText && styles.headLineText,
    priceText && styles.priceText,
    infoText && styles.descriptionText,
    style,
  ]);
  return <RNText {...props} style={_style} />;
};

const styles = StyleSheet.create({
  headLineText: {
    fontWeight: '600',
    color: colors.darkBlue,
    fontSize: scale(18),
    lineHeight: scale(24),
  },
  priceText: {
    fontWeight: '600',
    color: colors.navyBlue,
    fontSize: scale(16),
    lineHeight: scale(24),
    //-0.005em => 0.08px
    letterSpacing: scale(-0.08),
  },
  descriptionText: {
    fontWeight: '400',
    fontSize: scale(16),
    lineHeight: scale(24),
    //-0.005em => 0.08px
    letterSpacing: scale(-0.08),
    color: colors.grey04,
  },
});

export default Text;
