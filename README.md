<<<<<<< HEAD
# JEE-NEET Exam App

A comprehensive React Native Expo application for JEE and NEET mock examinations with practice tests, competitions, and detailed analytics.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- Expo CLI (`npm install -g @expo/cli`)
- EAS CLI (`npm install -g eas-cli`)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gurram46/jee-neet-exam-app-clean.git
   cd jee-neet-exam-app-clean
   ```

2. **Install dependencies (IMPORTANT - Use yarn for best compatibility):**
   ```bash
   yarn install
   ```
   
   > ⚠️ **Note**: Use `yarn` instead of `npm` to avoid Metro configuration issues that were resolved in this project.

3. **Start the development server:**
   ```bash
   expo start
   ```

4. **Run on device:**
   - Install Expo Go app on your phone
   - Scan the QR code from the terminal
   - Or run on simulator: `expo start --android` / `expo start --ios`

## 📱 Features

- **Practice Tests**: Questions organized by difficulty and topic
- **Timed Exams**: Auto-progression with time limits
- **Detailed Analytics**: Performance tracking and results
- **Monthly Competitions**: Competitive exam environment
- **User Profiles**: Personal progress management
- **Cross-platform**: Works on both Android and iOS

## 🏗️ Building for Production

### Android APK (Recommended)
```bash
eas build --platform android --profile preview
```

### Production Build
```bash
eas build --platform android --profile production
```

## 📋 Technical Details

- **Expo SDK**: 50.0.17
- **React Native**: 0.73.6
- **Build System**: EAS Build (Managed Workflow)
- **Navigation**: React Navigation v6
- **UI Components**: React Native Paper
- **Charts**: React Native Chart Kit

## 🔧 Troubleshooting

### Common Issues Resolved

1. **Metro Configuration Errors**: Fixed by using `yarn` instead of `npm`
2. **Gradle Plugin Issues**: Resolved by switching to managed workflow
3. **expo-modules-core Conflicts**: Fixed through proper dependency management

### If You Encounter Issues

1. **Clear cache and reinstall:**
   ```bash
   expo start --clear
   yarn install
   ```

2. **For build issues, ensure you're using managed workflow:**
   - Check `eas.json` - should NOT contain `buildType: "apk"`
   - Use managed workflow for better compatibility

## 🎯 Build Information

**Latest Successful Build:**
- **Platform**: Android
- **Profile**: preview
- **Workflow**: Managed
- **Status**: ✅ Successfully Built
- **Install URL**: https://expo.dev/accounts/gurram_46/projects/jee-neet-exam-app/builds/45a7b174-db9a-4702-bdc5-833701eba805

## 📁 Project Structure

```
jee-neet-exam-app-clean/
├── App.js                 # Main application entry
├── app.json              # Expo configuration
├── eas.json              # EAS Build configuration
├── package.json          # Dependencies and scripts
├── components/           # Reusable UI components
├── screens/             # Application screens
├── navigation/          # Navigation structure
├── data/               # Question data and content
├── assets/             # Images and static files
└── styles/             # Theme and styling
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

---

**Ready to use!** This project has been thoroughly tested and all major build issues have been resolved. Follow the installation steps above for a smooth setup experience.
