import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, Chip } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LoadingSpinner from '../components/LoadingSpinner';

const mockCompetitions = [
  {
    id: 1,
    title: 'December JEE Mock Test',
    description: 'Full-length JEE Main simulation with 90 questions',
    prize: '₹10,000 Cash Prize',
    participants: 2847,
    timeLeft: '5 days 14 hours',
    difficulty: 'Hard',
    duration: '3 hours',
    status: 'active'
  },
  {
    id: 2,
    title: 'NEET Biology Championship',
    description: 'Specialized biology test for NEET aspirants',
    prize: '₹5,000 + Study Materials',
    participants: 1923,
    timeLeft: '12 days 8 hours',
    difficulty: 'Medium',
    duration: '2 hours',
    status: 'upcoming'
  }
];

export default function MonthlyCompetitionScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return <LoadingSpinner message="Loading competitions..." />;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineMedium">Monthly Competitions</Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Compete with thousands of students nationwide
        </Text>
      </View>

      {mockCompetitions.map((competition) => (
        <Card key={competition.id} style={styles.competitionCard}>
          <Card.Content>
            <View style={styles.cardHeader}>
              <Text variant="titleLarge" style={styles.competitionTitle}>
                {competition.title}
              </Text>
              <Chip 
                mode="outlined" 
                style={[
                  styles.statusChip,
                  competition.status === 'active' ? styles.activeChip : styles.upcomingChip
                ]}
              >
                {competition.status === 'active' ? 'Live' : 'Upcoming'}
              </Chip>
            </View>
            
            <Text variant="bodyMedium" style={styles.description}>
              {competition.description}
            </Text>
            
            <View style={styles.detailsContainer}>
              <View style={styles.detailRow}>
                <Icon name="emoji-events" size={20} color="#FF9800" />
                <Text variant="bodyMedium" style={styles.detailText}>
                  {competition.prize}
                </Text>
              </View>
              
              <View style={styles.detailRow}>
                <Icon name="people" size={20} color="#2196F3" />
                <Text variant="bodyMedium" style={styles.detailText}>
                  {competition.participants.toLocaleString()} participants
                </Text>
              </View>
              
              <View style={styles.detailRow}>
                <Icon name="schedule" size={20} color="#4CAF50" />
                <Text variant="bodyMedium" style={styles.detailText}>
                  Duration: {competition.duration}
                </Text>
              </View>
              
              <View style={styles.detailRow}>
                <Icon name="trending-up" size={20} color="#9C27B0" />
                <Text variant="bodyMedium" style={styles.detailText}>
                  Difficulty: {competition.difficulty}
                </Text>
              </View>
            </View>
            
            <View style={styles.timeContainer}>
              <Text variant="titleMedium" style={styles.timeLabel}>
                {competition.status === 'active' ? 'Ends in:' : 'Starts in:'}
              </Text>
              <Text variant="headlineSmall" style={styles.timeLeft}>
                {competition.timeLeft}
              </Text>
            </View>
            
            <Button
              mode="contained"
              onPress={() => {}}
              style={[
                styles.joinButton,
                competition.status === 'active' ? styles.activeButton : styles.upcomingButton
              ]}
              icon={competition.status === 'active' ? 'play-arrow' : 'schedule'}
            >
              {competition.status === 'active' ? 'Join Now' : 'Set Reminder'}
            </Button>
          </Card.Content>
        </Card>
      ))}
      
      <Card style={styles.infoCard}>
        <Card.Content>
          <Text variant="titleMedium" style={styles.infoTitle}>
            How Competitions Work
          </Text>
          <View style={styles.infoList}>
            <Text variant="bodyMedium" style={styles.infoItem}>
              • Register for free and compete with students nationwide
            </Text>
            <Text variant="bodyMedium" style={styles.infoItem}>
              • Complete the test within the given time limit
            </Text>
            <Text variant="bodyMedium" style={styles.infoItem}>
              • Rankings based on accuracy and time taken
            </Text>
            <Text variant="bodyMedium" style={styles.infoItem}>
              • Winners receive cash prizes and certificates
            </Text>
          </View>
        </Card.Content>
      </Card>
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
    marginBottom: 16,
  },
  subtitle: {
    marginTop: 4,
    opacity: 0.7,
  },
  competitionCard: {
    margin: 16,
    marginBottom: 8,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  competitionTitle: {
    flex: 1,
    marginRight: 12,
  },
  statusChip: {
    height: 28,
  },
  activeChip: {
    backgroundColor: '#E8F5E8',
    borderColor: '#4CAF50',
  },
  upcomingChip: {
    backgroundColor: '#E3F2FD',
    borderColor: '#2196F3',
  },
  description: {
    marginBottom: 16,
    opacity: 0.8,
  },
  detailsContainer: {
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    marginLeft: 8,
    flex: 1,
  },
  timeContainer: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  timeLabel: {
    opacity: 0.7,
    marginBottom: 4,
  },
  timeLeft: {
    color: '#f44336',
    fontWeight: 'bold',
  },
  joinButton: {
    paddingVertical: 8,
  },
  activeButton: {
    backgroundColor: '#4CAF50',
  },
  upcomingButton: {
    backgroundColor: '#2196F3',
  },
  infoCard: {
    margin: 16,
    marginTop: 8,
    backgroundColor: '#E3F2FD',
  },
  infoTitle: {
    marginBottom: 12,
    color: '#1976D2',
    fontWeight: 'bold',
  },
  infoList: {
    gap: 8,
  },
  infoItem: {
    lineHeight: 20,
  },
});