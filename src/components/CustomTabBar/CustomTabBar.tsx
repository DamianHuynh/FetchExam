import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale} from '../../utils';
import colors from '../../constants/colors';
import Home from '../../assets/svg/Home';
import Bell from '../../assets/svg/Bell';
import Card from '../../assets/svg/Card';
import Profile from '../../assets/svg/Profile';

const CustomTabBar = ({state, descriptors, navigation}: any) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const Icon = () => {
          switch (route.name) {
            case 'Home':
              return <Home />;
            case 'Notification':
              return <Bell />;
            case 'Card':
              return <Card />;

            default:
              return <Profile />;
          }
        };

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            key={route.name}
            onLongPress={onLongPress}
            style={styles.buttonContainer}>
            <Icon />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  container: {
    height: scale(96),
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
