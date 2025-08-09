import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, Avatar, Divider, List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LoadingSpinner from '../components/LoadingSpinner';

const mockUserData = {
  name: 'Sai Kumar',
  email: 'sai.kumar@email.com',
  phone: '+91 98765 43210',
  joinDate: 'January 2024',
  testsCompleted: 47,
  averageScore: 78,
  subscription: {
    plan: 'Premium',
    expiryDate: 'December 31, 2024',
    daysLeft: 25
  }
};

export default function ProfileScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return <LoadingSpinner message="Loading profile..." />;
  }

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.profileCard}>
        <Card.Content style={styles.profileContent}>
          <Avatar.Text 
            size={80} 
            label={mockUserData.name.split(' ').map(n => n[0]).join('')}
            style={styles.avatar}
          />
          <Text variant="headlineSmall" style={styles.name}>
            {mockUserData.name}
          </Text>
          <Text variant="bodyMedium" style={styles.email}>
            {mockUserData.email}
          </Text>
          <Text variant="bodySmall" style={styles.joinDate}>
            Member since {mockUserData.joinDate}
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.subscriptionCard}>
        <Card.Content>
          <View style={styles.subscriptionHeader}>
            <Text variant="titleLarge">Subscription Details</Text>
            <Text variant="labelLarge" style={styles.planBadge}>
              {mockUserData.subscription.plan}
            </Text>
          </View>
          
          <View style={styles.subscriptionDetails}>
            <View style={styles.detailRow}>
              <Icon name="event" size={20} color="#2196F3" />
              <Text variant="bodyMedium" style={styles.detailText}>
                Expires on {mockUserData.subscription.expiryDate}
              </Text>
            </View>
            
            <View style={styles.detailRow}>
              <Icon name="schedule" size={20} color="#FF9800" />
              <Text variant="bodyMedium" style={styles.detailText}>
                {mockUserData.subscription.daysLeft} days remaining
              </Text>
            </View>
          </View>
          
          <Button
            mode="contained"
            onPress={() => {}}
            style={styles.renewButton}
            icon="refresh"
          >
            Renew Subscription
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.statsCard}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.statsTitle}>
            Your Statistics
          </Text>
          
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text variant="headlineMedium" style={styles.statNumber}>
                {mockUserData.testsCompleted}
              </Text>
              <Text variant="bodyMedium" style={styles.statLabel}>
                Tests Completed
              </Text>
            </View>
            
            <View style={styles.statItem}>
              <Text variant="headlineMedium" style={styles.statNumber}>
                {mockUserData.averageScore}%
              </Text>
              <Text variant="bodyMedium" style={styles.statLabel}>
                Average Score
              </Text>
            </View>
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.settingsCard}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.settingsTitle}>
            Account Settings
          </Text>
          
          <List.Item
            title="Personal Information"
            description="Update your profile details"
            left={props => <List.Icon {...props} icon="person" />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => {}}
          />
          
          <Divider />
          
          <List.Item
            title="Notification Settings"
            description="Manage your notifications"
            left={props => <List.Icon {...props} icon="notifications" />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => {}}
          />
          
          <Divider />
          
          <List.Item
            title="Privacy & Security"
            description="Password and privacy settings"
            left={props => <List.Icon {...props} icon="security" />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => {}}
          />
          
          <Divider />
          
          <List.Item
            title="Help & Support"
            description="Get help and contact support"
            left={props => <List.Icon {...props} icon="help" />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => {}}
          />
          
          <Divider />
          
          <List.Item
            title="About"
            description="App version and information"
            left={props => <List.Icon {...props} icon="info" />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => {}}
          />
        </Card.Content>
      </Card>

      <View style={styles.logoutContainer}>
        <Button
          mode="outlined"
          onPress={() => {}}
          style={styles.logoutButton}
          textColor="#f44336"
          icon="logout"
        >
          Logout
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  profileCard: {
    margin: 16,
    marginBottom: 8,
  },
  profileContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  avatar: {
    backgroundColor: '#2196F3',
    marginBottom: 16,
  },
  name: {
    marginBottom: 4,
    fontWeight: 'bold',
  },
  email: {
    marginBottom: 8,
    opacity: 0.7,
  },
  joinDate: {
    opacity: 0.6,
  },
  subscriptionCard: {
    margin: 16,
    marginVertical: 8,
    backgroundColor: '#E8F5E8',
  },
  subscriptionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  planBadge: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    overflow: 'hidden',
  },
  subscriptionDetails: {
    marginBottom: 20,
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
  renewButton: {
    backgroundColor: '#4CAF50',
  },
  statsCard: {
    margin: 16,
    marginVertical: 8,
  },
  statsTitle: {
    marginBottom: 20,
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontWeight: 'bold',
    color: '#2196F3',
  },
  statLabel: {
    marginTop: 4,
    opacity: 0.7,
  },
  settingsCard: {
    margin: 16,
    marginVertical: 8,
  },
  settingsTitle: {
    marginBottom: 16,
  },
  logoutContainer: {
    padding: 16,
    alignItems: 'center',
  },
  logoutButton: {
    borderColor: '#f44336',
    minWidth: 150,
  },
});