// screens/ProfileScreen.js

import { View, Text, StyleSheet, Pressable, useWindowDimensions } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADII, FONTS } from '../theme';

export default function ProfileScreen() {
  const [theme, setTheme] = useState('light');
  const currentTheme = COLORS[theme];
  
  // Get window width for responsive design
  // Responsive tasarım için ekran genişliğini al
  const { width } = useWindowDimensions();
  // Check if the screen width is greater than 500px (e.g., tablet)
  // Ekran genişliğinin 500px'den büyük olup olmadığını kontrol et (örn: tablet)
  const isLargeScreen = width > 500;

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.bg }]}>
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
              // Adjust width and padding based on screen size
              // Ekran boyutuna göre genişlik ve dolguyu ayarla
              width: isLargeScreen ? '60%' : '85%',
              padding: isLargeScreen ? SPACING.xl : SPACING.lg 
          }
      ]}>
        <Ionicons 
            name="person-circle-outline" 
            // Make icon larger on tablets/desktops
            // Tablet/masaüstü cihazlarda ikonu büyüt
            size={isLargeScreen ? 100 : 80} 
            color={currentTheme.text} 
        />
        <Text style={[styles.name, { color: currentTheme.text }]}>
          Efe Yaşar
        </Text>
        <Text style={[styles.role, { color: currentTheme.text }]}>
          Student / Developer
        </Text>

        <Pressable 
            style={({pressed}) => [
                styles.likeButton,
                { backgroundColor: pressed ? '#e63946' : '#ff6b6b' }
            ]}
            onPress={() => console.log('Profile Liked!')}
        >
            <Ionicons name="heart" size={24} color="#fff" />
            <Text style={styles.likeText}>Like</Text>
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
    // Width and padding are now handled dynamically in the component
    // Genişlik ve dolgu artık bileşen içinde dinamik olarak yönetiliyor
    borderRadius: RADII.md,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
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
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    borderRadius: 50,
    marginTop: SPACING.md,
  },
  likeText: {
    color: '#fff',
    fontFamily: FONTS.bold,
    fontSize: 16,
    marginLeft: SPACING.sm,
  },
});