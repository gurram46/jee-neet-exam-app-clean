import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, Snackbar, List } from 'react-native-paper';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import LoadingSpinner from '../components/LoadingSpinner';

const screenWidth = Dimensions.get('window').width;

export default function ResultScreen() {
  const [loading, setLoading] = useState(true);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [expandedQuestions, setExpandedQuestions] = useState({});
  const navigation = useNavigation();
  const route = useRoute();
  const { questions = [], answers = [] } = route.params || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setSnackbarVisible(true);
    }, 2000);
  }, []);

  if (loading) {
    return <LoadingSpinner message="Calculating results..." />;
  }

  // Calculate results
  const totalQuestions = questions.length;
  const attempted = answers.filter(answer => answer !== null).length;
  const correct = answers.filter((answer, index) => 
    answer !== null && answer === questions[index]?.answerIndex
  ).length;
  const wrong = attempted - correct;
  const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

  // Topic-wise analysis
  const topicStats = {};
  questions.forEach((question, index) => {
    const topic = question.topic;
    if (!topicStats[topic]) {
      topicStats[topic] = { total: 0, correct: 0 };
    }
    topicStats[topic].total++;
    if (answers[index] === question.answerIndex) {
      topicStats[topic].correct++;
    }
  });

  const chartData = {
    labels: Object.keys(topicStats),
    datasets: [{
      data: Object.values(topicStats).map(stat => 
        stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0
      )
    }]
  };

  const toggleQuestion = (index) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const getOptionLetter = (index) => String.fromCharCode(65 + index);

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.summaryCard}>
        <Card.Content>
          <Text variant="headlineSmall" style={styles.title}>
            Test Results
          </Text>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text variant="headlineMedium" style={styles.statNumber}>
                {totalQuestions}
              </Text>
              <Text variant="bodyMedium">Total</Text>
            </View>
            <View style={styles.statItem}>
              <Text variant="headlineMedium" style={[styles.statNumber, styles.attempted]}>
                {attempted}
              </Text>
              <Text variant="bodyMedium">Attempted</Text>
            </View>
            <View style={styles.statItem}>
              <Text variant="headlineMedium" style={[styles.statNumber, styles.correct]}>
                {correct}
              </Text>
              <Text variant="bodyMedium">Correct</Text>
            </View>
            <View style={styles.statItem}>
              <Text variant="headlineMedium" style={[styles.statNumber, styles.wrong]}>
                {wrong}
              </Text>
              <Text variant="bodyMedium">Wrong</Text>
            </View>
          </View>
          <Text variant="headlineLarge" style={styles.accuracy}>
            {accuracy}% Accuracy
          </Text>
        </Card.Content>
      </Card>

      {Object.keys(topicStats).length > 0 && (
        <Card style={styles.chartCard}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.chartTitle}>
              Topic-wise Performance
            </Text>
            <BarChart
              data={chartData}
              width={screenWidth - 64}
              height={220}
              chartConfig={{
                backgroundColor: '#ffffff',
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16
                },
                propsForLabels: {
                  fontSize: 12
                }
              }}
              style={styles.chart}
            />
          </Card.Content>
        </Card>
      )}

      <Card style={styles.reviewCard}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.reviewTitle}>
            Question Review
          </Text>
          {questions.map((question, index) => {
            const userAnswer = answers[index];
            const isCorrect = userAnswer === question.answerIndex;
            const isAttempted = userAnswer !== null;
            
            return (
              <List.Accordion
                key={index}
                title={`Q${index + 1}. ${question.question.substring(0, 50)}...`}
                description={isAttempted ? (isCorrect ? 'Correct' : 'Wrong') : 'Not Attempted'}
                left={props => (
                  <List.Icon 
                    {...props} 
                    icon={isAttempted ? (isCorrect ? 'check-circle' : 'close-circle') : 'help-circle'}
                    color={isAttempted ? (isCorrect ? '#4CAF50' : '#f44336') : '#9E9E9E'}
                  />
                )}
                expanded={expandedQuestions[index]}
                onPress={() => toggleQuestion(index)}
                style={styles.questionAccordion}
              >
                <View style={styles.questionDetail}>
                  <Text variant="bodyMedium" style={styles.questionText}>
                    {question.question}
                  </Text>
                  
                  <View style={styles.optionsContainer}>
                    {question.options.map((option, optionIndex) => {
                      const isUserAnswer = userAnswer === optionIndex;
                      const isCorrectAnswer = question.answerIndex === optionIndex;
                      
                      return (
                        <View 
                          key={optionIndex} 
                          style={[
                            styles.optionItem,
                            isCorrectAnswer && styles.correctOption,
                            isUserAnswer && !isCorrectAnswer && styles.wrongOption
                          ]}
                        >
                          <Text style={[
                            styles.optionText,
                            isCorrectAnswer && styles.correctOptionText,
                            isUserAnswer && !isCorrectAnswer && styles.wrongOptionText
                          ]}>
                            {getOptionLetter(optionIndex)}. {option}
                            {isCorrectAnswer && ' ✓'}
                            {isUserAnswer && !isCorrectAnswer && ' ✗'}
                          </Text>
                        </View>
                      );
                    })}
                  </View>
                  
                  <View style={styles.explanationContainer}>
                    <Text variant="titleSmall" style={styles.explanationTitle}>
                      Explanation:
                    </Text>
                    <Text variant="bodyMedium" style={styles.explanationText}>
                      {question.explanation}
                    </Text>
                  </View>
                </View>
              </List.Accordion>
            );
          })}
        </Card.Content>
      </Card>

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Dashboard')}
          style={styles.homeButton}
        >
          Back to Dashboard
        </Button>
      </View>

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
        action={{
          label: 'OK',
          onPress: () => setSnackbarVisible(false),
        }}
      >
        Test completed successfully!
      </Snackbar>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  summaryCard: {
    margin: 16,
    marginBottom: 8,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontWeight: 'bold',
  },
  attempted: {
    color: '#2196F3',
  },
  correct: {
    color: '#4CAF50',
  },
  wrong: {
    color: '#f44336',
  },
  accuracy: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#2196F3',
  },
  chartCard: {
    margin: 16,
    marginVertical: 8,
  },
  chartTitle: {
    textAlign: 'center',
    marginBottom: 16,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  reviewCard: {
    margin: 16,
    marginVertical: 8,
  },
  reviewTitle: {
    marginBottom: 16,
  },
  questionAccordion: {
    backgroundColor: '#fff',
    marginBottom: 8,
    borderRadius: 8,
  },
  questionDetail: {
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  questionText: {
    marginBottom: 16,
    fontWeight: '500',
  },
  optionsContainer: {
    marginBottom: 16,
  },
  optionItem: {
    padding: 8,
    marginVertical: 2,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  correctOption: {
    backgroundColor: '#E8F5E8',
    borderColor: '#4CAF50',
    borderWidth: 1,
  },
  wrongOption: {
    backgroundColor: '#FFEBEE',
    borderColor: '#f44336',
    borderWidth: 1,
  },
  optionText: {
    fontSize: 14,
  },
  correctOptionText: {
    color: '#2E7D32',
    fontWeight: '500',
  },
  wrongOptionText: {
    color: '#C62828',
    fontWeight: '500',
  },
  explanationContainer: {
    backgroundColor: '#E3F2FD',
    padding: 12,
    borderRadius: 8,
  },
  explanationTitle: {
    marginBottom: 8,
    fontWeight: 'bold',
    color: '#1976D2',
  },
  explanationText: {
    lineHeight: 20,
  },
  buttonContainer: {
    padding: 16,
    alignItems: 'center',
  },
  homeButton: {
    minWidth: 200,
    paddingVertical: 4,
  },
});