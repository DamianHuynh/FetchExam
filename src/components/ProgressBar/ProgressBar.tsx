import {StyleSheet, View, ViewProps} from 'react-native';
import React, {useState} from 'react';
import colors from '../../constants/colors';
import {scale} from '../../utils';

interface IProgressBar {
  progress?: number;
}

const ProgressBar = ({progress}: IProgressBar) => {
  const [width, setWidth] = useState<number>(0);

  const calculateProgress = () => ((progress ?? 0) / 100) * width;

  const _onLayout: ViewProps['onLayout'] = ({
    nativeEvent: {
      layout: {width: _width},
    },
  }) => setWidth(_width);

  return (
    <View style={styles.container} onLayout={_onLayout}>
      <View style={[styles.progress, {width: calculateProgress()}]} />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey07,
    height: scale(5),
    borderRadius: 2.5,
  },
  progress: {
    backgroundColor: colors.navyBlue,
    height: scale(5),
    borderRadius: 2.5,
  },
});
