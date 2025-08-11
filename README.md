# JEE-NEET Exam App

A React Native Expo application for JEE and NEET mock examinations.

## Features

- Mock tests for JEE and NEET examinations
- User-friendly interface
- Cross-platform support (Android/iOS)

## Build Information

This app has been successfully built using EAS Build with the following configuration:

- **Build Profile**: preview
- **Platform**: Android
- **Workflow**: Managed
- **Build URL**: https://expo.dev/accounts/gurram_46/projects/jee-neet-exam-app/builds/45a7b174-db9a-4702-bdc5-833701eba805

## Installation

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Start the development server:
   ```bash
   expo start
   ```

3. Build for production:
   ```bash
   eas build --platform android --profile preview
   ```

## Technical Details

- **Expo SDK**: 50.0.17
- **React Native**: 0.73.6
- **Build System**: EAS Build (Managed Workflow)

## Fixes Applied

- Switched to managed workflow to resolve Gradle plugin issues
- Fixed Metro configuration by using yarn for dependency installation
- Resolved expo-modules-core conflicts
- Successfully built Android APK using EAS Build