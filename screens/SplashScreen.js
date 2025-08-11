import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logo} />
        <Text variant="headlineMedium" style={styles.title}>
          ExamPrep Pro
        </Text>
        <Text variant="bodyLarge" style={styles.tagline}>
          Master JEE & NEET with confidence
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 24,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tagline: {
    color: '#fff',
    opacity: 0.9,
    textAlign: 'center',
  },
});