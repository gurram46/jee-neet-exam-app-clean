import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, BackHandler } from 'react-native';
import { Text, Button, Card, ProgressBar } from 'react-native-paper';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import OptionButton from '../components/OptionButton';
import LoadingSpinner from '../components/LoadingSpinner';
import questionsData from '../data/questions.json';

export default function ExamScreen() {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const [answers, setAnswers] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  const { selectionType, selectedItems } = route.params;

  // Disable hardware back button - FIXED VERSION
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => true; // Prevent going back
      const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => subscription?.remove(); // Use remove() instead of removeEventListener
    }, [])
  );

  useEffect(() => {
    // Simulate loading and filter questions
    setTimeout(() => {
      let filteredQuestions = [];
      
      if (selectionType === 'difficulty') {
        filteredQuestions = questionsData.questions.filter(
          q => selectedItems.includes(q.difficulty)
        );
      } else if (selectionType === 'topics') {
        filteredQuestions = questionsData.questions.filter(
          q => selectedItems.includes(q.topic)
        );
      }
      
      // Shuffle and take up to 10 questions
      const shuffled = filteredQuestions.sort(() => 0.5 - Math.random());
      const selectedQuestions = shuffled.slice(0, 10);
      
      setQuestions(selectedQuestions);
      setAnswers(new Array(selectedQuestions.length).fill(null));
      setLoading(false);
    }, 2000);
  }, [selectionType, selectedItems]);

  // Timer effect
  useEffect(() => {
    if (loading || questions.length === 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleNextQuestion();
          return 60;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestionIndex, loading, questions.length]);

  const handleAnswerSelect = (optionIndex) => {
    setSelectedAnswer(optionIndex);
  };

  const handleNextQuestion = () => {
    // Record answer
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = selectedAnswer;
    setAnswers(newAnswers);
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setTimeLeft(60);
    } else {
      // Exam finished
      navigation.replace('Result', {
        questions,
        answers: newAnswers,
      });
    }
  };

  if (loading) {
    return <LoadingSpinner message="Preparing your exam..." />;
  }

  if (questions.length === 0) {
    return (
      <View style={styles.container}>
        <Text variant="headlineSmall">No questions found</Text>
        <Button onPress={() => navigation.goBack()}>Go Back</Button>
      </View>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = (currentQuestionIndex + 1) / questions.length;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="titleMedium">
          Question {currentQuestionIndex + 1} of {questions.length}
        </Text>
        <Text variant="titleLarge" style={styles.timer}>
          {timeLeft}s
        </Text>
      </View>
      
      <ProgressBar progress={progress} style={styles.progressBar} />
      
      <Card style={styles.questionCard}>
        <Card.Content>
          <Text variant="bodySmall" style={styles.topicText}>
            {currentQuestion.topic} • {currentQuestion.difficulty}
          </Text>
          <Text variant="titleMedium" style={styles.questionText}>
            {currentQuestion.question}
          </Text>
        </Card.Content>
      </Card>
      
      <View style={styles.optionsContainer}>
        {currentQuestion.options.map((option, index) => (
          <OptionButton
            key={index}
            option={`${String.fromCharCode(65 + index)}. ${option}`}
            selected={selectedAnswer === index}
            onPress={() => handleAnswerSelect(index)}
          />
        ))}
      </View>
      
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={handleNextQuestion}
          style={styles.nextButton}
        >
          {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  timer: {
    color: '#f44336',
    fontWeight: 'bold',
  },
  progressBar: {
    marginBottom: 16,
    height: 8,
  },
  questionCard: {
    marginBottom: 24,
  },
  topicText: {
    opacity: 0.7,
    marginBottom: 8,
  },
  questionText: {
    lineHeight: 24,
  },
  optionsContainer: {
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 16,
    alignItems: 'center',
  },
  nextButton: {
    minWidth: 120,
    paddingVertical: 4,
  },
});