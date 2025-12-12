// screens/ProfileScreen.js

import { View, Text, StyleSheet, Pressable, useWindowDimensions, Image, Linking } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADII, FONTS, SIZES } from '../theme';

// Import the local image
const profileImage = require('../assets/picture.jpeg');

export default function ProfileScreen() {
  const [theme, setTheme] = useState('light');
  const currentTheme = COLORS[theme];
  
  // Get window width for responsive design
  const { width } = useWindowDimensions();
  const isLargeScreen = width > 500;

  // Determine profile image size based on screen width
  const profileImageSize = isLargeScreen ? SIZES.profileImageLarge : SIZES.profileImageSmall;

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Function to open LinkedIn URL
  const openLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/in/efeysr/');
  };

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.bg }]}>
      
      {/* Theme Toggle Button */}
      <Pressable onPress={toggleTheme} style={styles.themeToggle}>
        <Ionicons 
          name={theme === 'light' ? 'moon' : 'sunny'} 
          size={28} 
          color={currentTheme.text} 
        />
      </Pressable>

      <View style={[
          styles.card, 
          { 
              backgroundColor: currentTheme.card,
              width: isLargeScreen ? '60%' : '85%',
              padding: isLargeScreen ? SPACING.xl : SPACING.lg 
          }
      ]}>
        
        {/* Profile Image Component */}
        <Image
          source={profileImage}
          style={[
            styles.profileImage, 
            { 
              width: profileImageSize, 
              height: profileImageSize,
              borderRadius: profileImageSize / 2
            }
          ]}
        />
        
        <Text style={[styles.name, { color: currentTheme.text }]}>
          Efe Yaşar
        </Text>
        <Text style={[styles.role, { color: currentTheme.text }]}>
          Student / Developer
        </Text>

        {/* LinkedIn Button (Updated) */}
        <Pressable 
            style={({pressed}) => [
                styles.socialButton,
                // LinkedIn Brand Colors: Normal #0077b5, Pressed #004182
                { backgroundColor: pressed ? '#004182' : '#0077b5' }
            ]}
            onPress={openLinkedIn}
        >
            <Ionicons name="logo-linkedin" size={24} color="#fff" />
            <Text style={styles.socialText}>Connect</Text>
        </Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  themeToggle: {
    position: 'absolute',
    top: 50,
    right: 20,
    padding: SPACING.sm,
  },
  card: {
    borderRadius: RADII.md,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  profileImage: {
    marginBottom: SPACING.sm,
    resizeMode: 'cover',
  },
  name: {
    fontFamily: FONTS.bold,
    fontSize: 24,
    marginTop: SPACING.md,
  },
  role: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    marginTop: SPACING.sm,
    opacity: 0.7,
  },
  // Updated styles for the social button
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    borderRadius: 50,
    marginTop: SPACING.md,
  },
  socialText: {
    color: '#fff',
    fontFamily: FONTS.bold,
    fontSize: 16,
    marginLeft: SPACING.sm,
  },
});