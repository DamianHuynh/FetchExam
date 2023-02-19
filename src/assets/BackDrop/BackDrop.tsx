import {
  Dimensions,
  ImageBackground,
  ImageBackgroundProps,
  StyleSheet,
} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import {scale} from '../../utils';
const backDrop = require('./backdrop.png');

const BackDrop = ({style, ...props}: ImageBackgroundProps) => {
  return (
    <ImageBackground
      {...props}
      source={backDrop}
      style={StyleSheet.flatten([styles.container, style])}>
      {props.children}
    </ImageBackground>
  );
};

export default BackDrop;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: Dimensions.get('window').width - scale(32),
    height: scale(416),
    borderRadius: scale(8),
    padding: scale(24),
  },
});
