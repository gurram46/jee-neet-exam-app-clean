# 🚀 Quick Setup Guide - JEE-NEET Exam App

This guide will help you set up the project without encountering the build issues we resolved.

## ⚡ 5-Minute Setup

### Step 1: Prerequisites
```bash
# Install Node.js (v16+) from nodejs.org
# Then install required CLI tools:
npm install -g @expo/cli eas-cli
```

### Step 2: Clone & Install
```bash
git clone https://github.com/gurram46/jee-neet-exam-app-clean.git
cd jee-neet-exam-app-clean

# IMPORTANT: Use yarn (not npm) to avoid Metro issues
yarn install
```

### Step 3: Run the App
```bash
expo start
```

### Step 4: Test on Device
- Install "Expo Go" app on your phone
- Scan the QR code from terminal
- App should load without issues!

## 🏗️ Building APK (Optional)

If you want to create an installable APK:

```bash
# Login to EAS (create free account if needed)
eas login

# Build for Android
eas build --platform android --profile preview
```

## ❌ Issues We Already Fixed

You won't encounter these problems because we've already resolved them:

1. **Metro Configuration Errors** ✅ Fixed
2. **Gradle Plugin Issues** ✅ Fixed  
3. **expo-modules-core Conflicts** ✅ Fixed
4. **Build Type Conflicts** ✅ Fixed
5. **Dependency Installation Issues** ✅ Fixed

## 🆘 If Something Goes Wrong

### Clear Everything and Restart:
```bash
# Clear Expo cache
expo start --clear

# Reinstall dependencies
rm -rf node_modules
yarn install

# Restart
expo start
```

### Still Having Issues?
- Check you're using `yarn` (not `npm`)
- Ensure Node.js version is 16+
- Make sure you're in the correct directory

## 🎯 Expected Results

- ✅ `yarn install` should complete without errors
- ✅ `expo start` should open Metro bundler
- ✅ App should load on Expo Go without crashes
- ✅ EAS build should work if you need an APK

## 📱 Ready-to-Install APK

If you just want to test the app, use our pre-built APK:
**Download**: https://expo.dev/accounts/gurram_46/projects/jee-neet-exam-app/builds/45a7b174-db9a-4702-bdc5-833701eba805

---

**That's it!** The project is now ready to use with all major issues resolved. 🎉