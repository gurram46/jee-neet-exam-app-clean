import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function OptionButton({ option, onPress, selected, disabled }) {
  return (
    <Button
      mode={selected ? 'contained' : 'outlined'}
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, selected && styles.selected]}
      contentStyle={styles.content}
    >
      {option}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  selected: {
    backgroundColor: '#2196F3',
  },
  content: {
    paddingVertical: 8,
  },
});