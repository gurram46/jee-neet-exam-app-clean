import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import TabNavigator from './TabNavigator';
import ExamScreen from '../screens/ExamScreen';
import ResultScreen from '../screens/ResultScreen';
import DifficultySelectionScreen from '../screens/DifficultySelectionScreen';
import TopicSelectionScreen from '../screens/TopicSelectionScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen 
        name="DifficultySelection" 
        component={DifficultySelectionScreen} 
        options={{ headerShown: true, title: 'Select Difficulty' }}
      />
      <Stack.Screen 
        name="TopicSelection" 
        component={TopicSelectionScreen} 
        options={{ headerShown: true, title: 'Select Topics' }}
      />
      <Stack.Screen 
        name="Exam" 
        component={ExamScreen} 
        options={{ 
          headerShown: false,
          gestureEnabled: false
        }}
      />
      <Stack.Screen 
        name="Result" 
        component={ResultScreen} 
        options={{ headerShown: true, title: 'Test Results' }}
      />
    </Stack.Navigator>
  );
}