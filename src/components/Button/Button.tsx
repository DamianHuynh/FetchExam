import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import Text from '../Text';
import colors from '../../constants/colors';
import {scale} from '../../utils';

interface IButton extends TouchableOpacityProps {
  title: string;
}

const Button = ({title, style, ...props}: IButton) => {
  return (
    <TouchableOpacity
      {...props}
      style={StyleSheet.flatten([styles.container, style])}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkBlue,
    height: scale(60),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(4),
  },
  textButton: {
    fontWeight: '400',
    fontSize: scale(16),
    lineHeight: scale(24),
    //-0.005em => 0.08px
    letterSpacing: scale(-0.08),
    color: colors.white,
  },
});
