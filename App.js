import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect } from 'react';
import Routes from './src/routes';
import theme from './src/global/styles/theme';
import * as SplashScreen from 'expo-splash-screen'
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import * as Font from 'expo-font';
import { ThemeProvider } from 'styled-components';
import { View } from 'react-native';

const App = () => {
    const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_500Medium, Roboto_700Bold})
    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
            await Font.loadAsync({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold});
        }
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            const result = await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded){
        return null
    }

    return  (
        <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
            <StatusBar color="light"/>
            <ThemeProvider theme={theme}>
                <Routes />
            </ThemeProvider>
        </View>
    )
}
export default App