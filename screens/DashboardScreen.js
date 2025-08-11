import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import LoadingSpinner from '../components/LoadingSpinner';

export default function DashboardScreen() {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return <LoadingSpinner message="Loading dashboard..." />;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineMedium">Welcome back!</Text>
        <Text variant="bodyLarge" style={styles.subtitle}>
          Ready for your next practice session?
        </Text>
      </View>

      <Card style={styles.subscriptionCard}>
        <Card.Content>
          <Text variant="titleMedium">Premium Subscription</Text>
          <Text variant="bodyMedium" style={styles.subscriptionText}>
            Active until Dec 31, 2024 • 25 days left
          </Text>
        </Card.Content>
      </Card>

      <View style={styles.buttonsContainer}>
        <Card style={styles.actionCard}>
          <Card.Content style={styles.cardContent}>
            <MaterialIcons name="quiz" size={40} color="#4CAF50" />
            <Text variant="titleMedium" style={styles.cardTitle}>
              Practice by Difficulty
            </Text>
            <Text variant="bodySmall" style={styles.cardDescription}>
              Choose Easy, Medium, or Hard
            </Text>
            <Button
              mode="contained"
              onPress={() => navigation.navigate('DifficultySelection')}
              style={styles.cardButton}
            >
              Start Practice
            </Button>
          </Card.Content>
        </Card>

        <Card style={styles.actionCard}>
          <Card.Content style={styles.cardContent}>
            <MaterialIcons name="topic" size={40} color="#FF9800" />
            <Text variant="titleMedium" style={styles.cardTitle}>
              Practice by Topic
            </Text>
            <Text variant="bodySmall" style={styles.cardDescription}>
              Select specific subjects
            </Text>
            <Button
              mode="contained"
              onPress={() => navigation.navigate('TopicSelection')}
              style={styles.cardButton}
            >
              Choose Topics
            </Button>
          </Card.Content>
        </Card>

        <Card style={styles.actionCard}>
          <Card.Content style={styles.cardContent}>
            <MaterialIcons name="emoji-events" size={40} color="#E91E63" />
            <Text variant="titleMedium" style={styles.cardTitle}>
              Monthly Competition
            </Text>
            <Text variant="bodySmall" style={styles.cardDescription}>
              Compete with others
            </Text>
            <Button
              mode="contained"
              onPress={() => navigation.navigate('Competition')}
              style={styles.cardButton}
            >
              Join Now
            </Button>
          </Card.Content>
        </Card>

        <Card style={styles.actionCard}>
          <Card.Content style={styles.cardContent}>
            <MaterialIcons name="analytics" size={40} color="#9C27B0" />
            <Text variant="titleMedium" style={styles.cardTitle}>
              My Analytics
            </Text>
            <Text variant="bodySmall" style={styles.cardDescription}>
              Track your progress
            </Text>
            <Button
              mode="contained"
              onPress={() => navigation.navigate('Analytics')}
              style={styles.cardButton}
            >
              View Stats
            </Button>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
  },
  subtitle: {
    marginTop: 4,
    opacity: 0.7,
  },
  subscriptionCard: {
    margin: 16,
    backgroundColor: '#E3F2FD',
  },
  subscriptionText: {
    marginTop: 8,
    color: '#1976D2',
  },
  buttonsContainer: {
    padding: 16,
    gap: 16,
  },
  actionCard: {
    marginBottom: 16,
  },
  cardContent: {
    alignItems: 'center',
    padding: 20,
  },
  cardTitle: {
    marginTop: 12,
    marginBottom: 8,
    textAlign: 'center',
  },
  cardDescription: {
    textAlign: 'center',
    opacity: 0.7,
    marginBottom: 16,
  },
  cardButton: {
    minWidth: 150,
  },
});