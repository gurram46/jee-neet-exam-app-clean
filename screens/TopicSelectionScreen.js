import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Checkbox, Button, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import LoadingSpinner from '../components/LoadingSpinner';
import questionsData from '../data/questions.json';

export default function TopicSelectionScreen() {
  const [loading, setLoading] = useState(true);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const toggleTopic = (topic) => {
    setSelectedTopics(prev => 
      prev.includes(topic) 
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  const startTest = () => {
    if (selectedTopics.length > 0) {
      navigation.navigate('Exam', {
        selectionType: 'topics',
        selectedItems: selectedTopics,
      });
    }
  };

  if (loading) {
    return <LoadingSpinner message="Loading topics..." />;
  }

  return (
    <View style={styles.container}>
      <Text variant="headlineSmall" style={styles.title}>
        Select Topics
      </Text>
      <Text variant="bodyMedium" style={styles.subtitle}>
        Choose one or more topics for your practice test
      </Text>

      <ScrollView style={styles.topicsContainer}>
        {questionsData.topics.map((topic) => (
          <Card key={topic} style={styles.topicCard}>
            <Card.Content>
              <View style={styles.topicRow}>
                <Checkbox
                  status={selectedTopics.includes(topic) ? 'checked' : 'unchecked'}
                  onPress={() => toggleTopic(topic)}
                />
                <Text variant="titleMedium" style={styles.topicText}>
                  {topic}
                </Text>
              </View>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Text variant="bodySmall" style={styles.selectedText}>
          {selectedTopics.length} topic(s) selected
        </Text>
        <Button
          mode="contained"
          onPress={startTest}
          disabled={selectedTopics.length === 0}
          style={styles.startButton}
        >
          Start Test
        </Button>
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
    marginBottom: 24,
    opacity: 0.7,
  },
  topicsContainer: {
    flex: 1,
  },
  topicCard: {
    marginBottom: 12,
  },
  topicRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topicText: {
    marginLeft: 12,
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 16,
    alignItems: 'center',
  },
  selectedText: {
    marginBottom: 12,
    opacity: 0.7,
  },
  startButton: {
    minWidth: 150,
    paddingVertical: 4,
  },
});