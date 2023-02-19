import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import BackDrop from '../assets/BackDrop';
import Chevron from '../assets/svg/Chevron';
import PetrolBanner from '../assets/svg/PetrolBanner';
import {Button, Card, ProgressBar, Text} from '../components';
import colors from '../constants/colors';
import {DATA} from '../constants/data';
import {scale} from '../utils';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.topContainer}>
            <View style={styles.header}>
              <TouchableOpacity style={styles.back}>
                <Chevron />
              </TouchableOpacity>
            </View>
            <View>
              <Text headLineText style={styles.tierText}>
                Silver Tier
              </Text>
              <Text infoText>
                In Silver Tier, every $1 in rental fee paid, you get 2 coins to
                redeem exclusive rewards.
              </Text>
            </View>
          </View>

          <View style={styles.bodyContainer}>
            <Text headLineText>Petrol</Text>
            <FlatList
              contentContainerStyle={{paddingRight: scale(24)}}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={DATA.petrol}
              ItemSeparatorComponent={() => <View style={{width: scale(24)}} />}
              renderItem={({item}) => (
                <Card
                  Banner={PetrolBanner}
                  backdrop={item.backdrop}
                  priceText={item.priceText}
                  infoText={item.infoText}
                />
              )}
            />
            <Text headLineText>Rental Rebate</Text>
            <FlatList
              contentContainerStyle={{paddingRight: scale(24)}}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={DATA.rental}
              ItemSeparatorComponent={() => <View style={{width: scale(24)}} />}
              renderItem={({item}) => (
                <Card
                  Banner={PetrolBanner}
                  backdrop={item.backdrop}
                  priceText={item.priceText}
                  infoText={item.infoText}
                />
              )}
            />
            <Text headLineText>Food and Beverage</Text>

            <FlatList
              contentContainerStyle={{paddingRight: scale(24)}}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={DATA.food}
              ItemSeparatorComponent={() => <View style={{width: scale(24)}} />}
              renderItem={({item}) => (
                <Card
                  Banner={PetrolBanner}
                  backdrop={item.backdrop}
                  priceText={item.priceText}
                  infoText={item.infoText}
                />
              )}
            />
          </View>
          <View style={styles.balanceContainer}>
            <BackDrop style={{justifyContent: 'space-evenly'}}>
              <Text infoText>Available Coin balance</Text>
              <Text headLineText style={styles.balance}>
                340
              </Text>
              <ProgressBar progress={50} />
              <Text infoText>
                You have paid rental fee for $1,200. Pay more $800 to achieve
                Gold Tier.
              </Text>
              <Text priceText style={{fontWeight: '400'}}>
                View tier benefits
                <View
                  style={{
                    paddingBottom: scale(27),
                    transform: [{rotate: '180deg'}],
                  }}>
                  <Chevron stroke={colors.navyBlue} />
                </View>
              </Text>
              <Button title="My Coupons" />
              <Text infoText style={{alignSelf: 'center'}}>
                Updated : 02/11/2021
              </Text>
            </BackDrop>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
  back: {
    backgroundColor: colors.white,
    height: scale(40),
    width: scale(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(20),
  },
  topContainer: {
    height: scale(428),
    padding: scale(24),
  },
  header: {
    height: scale(40),
    marginBottom: scale(30),
  },
  tierText: {
    color: colors.white,
    fontSize: scale(32),
    lineHeight: scale(40),
    paddingBottom: scale(8),
  },
  balanceContainer: {
    position: 'absolute',
    paddingHorizontal: scale(16),
    top: scale(252),
    height: scale(416),
  },
  bodyContainer: {
    backgroundColor: colors.grey,
    padding: scale(24),
    paddingTop: scale(252),
    paddingRight: 0,
  },
  balance: {
    fontWeight: '400',
    fontSize: scale(45),
    lineHeight: scale(56),
    letterSpacing: scale(-0.5),
  },
});

export default HomeScreen;
