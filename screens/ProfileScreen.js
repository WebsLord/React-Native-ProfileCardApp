// screens/ProfileScreen.js

import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
// Import icons from Expo
// Expo'dan ikonları içe aktar
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADII, FONTS } from '../theme';

export default function ProfileScreen() {
  const [theme, setTheme] = useState('light');
  const currentTheme = COLORS[theme];

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.bg }]}>
      
      {/* Main Profile Card Container */}
      {/* Ana Profil Kartı Konteyneri */}
      <View style={[styles.card, { backgroundColor: currentTheme.card }]}>
        
        {/* Profile Image Icon */}
        {/* Profil Resmi İkonu */}
        <Ionicons 
            name="person-circle-outline" 
            size={80} 
            color={currentTheme.text} 
        />
        
        {/* Personal Information */}
        {/* Kişisel Bilgiler */}
        <Text style={[styles.name, { color: currentTheme.text }]}>
          Efe Yaşar
        </Text>
        
        <Text style={[styles.role, { color: currentTheme.text }]}>
          Student / Developer
        </Text>
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
  card: {
    width: '85%',
    borderRadius: RADII.md,
    alignItems: 'center',
    padding: SPACING.lg,
    
    // Shadow properties for iOS
    // iOS için gölge özellikleri
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    
    // Elevation property for Android
    // Android için yükseklik (gölge) özelliği
    elevation: 6,
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
});