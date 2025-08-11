import React from 'react';
import { Appbar } from 'react-native-paper';

export default function Header({ title, onBack, showBack = false }) {
  return (
    <Appbar.Header>
      {showBack && <Appbar.BackAction onPress={onBack} />}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}