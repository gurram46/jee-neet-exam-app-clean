import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import LoadingSpinner from '../components/LoadingSpinner';

export default function DifficultySelectionScreen() {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const startExam = (difficulty) => {
    navigation.navigate('Exam', {
      selectionType: 'difficulty',
      selectedItems: [difficulty],
    });
  };

  if (loading) {
    return <LoadingSpinner message="Loading difficulties..." />;
  }

  return (
    <View style={styles.container}>
      <Text variant="headlineSmall" style={styles.title}>
        Choose Difficulty Level
      </Text>
      <Text variant="bodyMedium" style={styles.subtitle}>
        Select the difficulty level for your practice test
      </Text>

      <View style={styles.cardsContainer}>
        <Card style={[styles.card, styles.easyCard]}>
          <Card.Content style={styles.cardContent}>
            <Text variant="titleLarge" style={styles.cardTitle}>
              Easy
            </Text>
            <Text variant="bodyMedium" style={styles.cardDescription}>
              Basic concepts and fundamental questions
            </Text>
            <Button
              mode="contained"
              onPress={() => startExam('Easy')}
              style={styles.button}
            >
              Start Easy Test
            </Button>
          </Card.Content>
        </Card>

        <Card style={[styles.card, styles.mediumCard]}>
          <Card.Content style={styles.cardContent}>
            <Text variant="titleLarge" style={styles.cardTitle}>
              Medium
            </Text>
            <Text variant="bodyMedium" style={styles.cardDescription}>
              Intermediate level with moderate complexity
            </Text>
            <Button
              mode="contained"
              onPress={() => startExam('Medium')}
              style={styles.button}
            >
              Start Medium Test
            </Button>
          </Card.Content>
        </Card>

        <Card style={[styles.card, styles.hardCard]}>
          <Card.Content style={styles.cardContent}>
            <Text variant="titleLarge" style={styles.cardTitle}>
              Hard
            </Text>
            <Text variant="bodyMedium" style={styles.cardDescription}>
              Advanced questions for expert preparation
            </Text>
            <Button
              mode="contained"
              onPress={() => startExam('Hard')}
              style={styles.button}
            >
              Start Hard Test
            </Button>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 32,
    opacity: 0.7,
  },
  cardsContainer: {
    gap: 16,
  },
  card: {
    elevation: 4,
  },
  easyCard: {
    backgroundColor: '#E8F5E8',
  },
  mediumCard: {
    backgroundColor: '#FFF3E0',
  },
  hardCard: {
    backgroundColor: '#FFEBEE',
  },
  cardContent: {
    alignItems: 'center',
    padding: 24,
  },
  cardTitle: {
    marginBottom: 12,
    fontWeight: 'bold',
  },
  cardDescription: {
    textAlign: 'center',
    marginBottom: 20,
    opacity: 0.8,
  },
  button: {
    minWidth: 150,
  },
});