
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { PropsWithChildren, useEffect } from 'react';
import { Appearance } from 'react-native';

import { Colors } from '@/constants/Colors';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout({children}: PropsWithChildren) {
  const colorScheme = Appearance.getColorScheme()
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;  
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    
      <Stack screenOptions={{ headerStyle: { backgroundColor: theme.background }, headerTintColor: theme.text, headerShadowVisible:false }}>
        <Stack.Screen name="index" options={{ headerShown: false , title:`Home` }}/>
       < Stack.Screen name="Contact" options={{ headerShown: true , title:`Contact`,headerTitle:`Contact Us` }}/>
         < Stack.Screen name="Menu" options={{ headerShown: true , title:`Menu`,headerTitle:`Coffee Shop Menu` }}/>

        <Stack.Screen name ="+not-found" options= {{headerShown:false}}/>
      </Stack>
    
  );
}