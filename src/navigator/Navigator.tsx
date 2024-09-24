import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'react-native-splash-screen';
import BottomSheet from '@components/BottomSheet';
import { WelcomeBottomSheetContents } from '@layouts/BottomSheetContents';
import { loadImages, loadFonts } from '@theme';
import { isWeb } from '@utils/deviceInfo';

import StackNavigation from './stacks/verificationStack/Stack2';
import { View } from 'react-native';

// keep the splash screen visible while complete fetching resources
SplashScreen.preventAutoHideAsync();

function Navigator() {
  const [isOpen, setOpen] = useState(true);
  const [loaded, setLoaded] = useState(false);

  const preload = async () => {
    try {
      await Promise.all([loadImages(), loadFonts()]);
      setLoaded(true);
      SplashScreen.hideAsync();
    } catch (err) {
      console.log('[##] preload error:', err);
      SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    preload();
  }, []);

  return loaded ? (
    <>
      <NavigationContainer>
        {/* <DrawerNavigator /> */}
        {/* <TabNavigator /> */}
        <StackNavigation />
      </NavigationContainer>

      {!isWeb && (
        <BottomSheet isOpen={isOpen} initialOpen>
          <WelcomeBottomSheetContents onClose={() => setOpen(false)} />
        </BottomSheet>
      )}
    </>
  ) : (
    <View></View>
  );
}

export default Navigator;
