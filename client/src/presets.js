import * as React from 'react';
import { Typography, Colors } from 'react-native-ui-lib';
import { ThemeManager } from 'react-native-ui-lib';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dimensions, PixelRatio} from 'react-native';

const width = percent => {
  const screenWidth = Dimensions.get('window').width;
  const elemWidth = parseFloat(percent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const height = percent => {
  const screenHeight = Dimensions.get('window').height;
  const elemWidth = parseFloat(percent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemWidth) / 100);
};

// Define Theme Variables here
// App Colors  , Typography , theme .etc
// example

const colors = {
  dark: {
    colortext: '#ecf0f1',
    bg: '#121212',
    grey : "#fff",
  },
  light: {
    colortext: '#000',
    bg: '#ffffff',
    grey : "grey",
  },
  default : {
    app : '#ff4040'
  }
};

export default async function configureDesignSystem() {
  Typography.loadTypographies({
    h1: { fontSize: 22, fontWeight: '300', lineHeight: 80 },
    h2: { fontSize: 28, fontWeight: '300', lineHeight: 64 },
    bold : {
      fontWeight : "bold"
    }
  });
  ThemeManager.setComponentTheme('Text', {
    colortext: true, // will set the teal color by default
  });
  ThemeManager.setComponentTheme('View', (props) => {
    return {
      style: {
        width: props?.w || props?.width,
        height: props?.h || props?.height,
        position: props?.position,
        top: props?.ptop,
        left: props?.pleft,
        bottom: props?.pbottom,
        right: props?.pright,
        zIndex: props?.zIndex,
      },
    };
  });
  // Setting colors according to theme
  Colors.loadSchemes(colors);
  const theme = await colorModeManager.get();
  console.log(theme);
  Colors.loadColors(colors[theme]);
}

const colorModeManager = {
  get: async () => {
    try {
      let val = await AsyncStorage.getItem('@flybnb-app-color-mode');
      return val === 'dark' ? 'dark' : 'light';
    } catch (e) {
      console.log(e);
      return 'light';
    }
  },
  set: async (value) => {
    try {
      await AsyncStorage.setItem('@flybnb-app-color-mode', value);
      console.log('Saving...');
    } catch (e) {
      console.log(e);
    }
  },
};

// Change the theme through screens
const useTheme = () => {
  const [darkTheme, setDarkTheme] = React.useState(false);
  Colors.setScheme(darkTheme ? 'dark' : 'light');
  React.useEffect(() => {
    loadCurrentTheme();
  }, []);
  async function loadCurrentTheme() {
    const theme = await colorModeManager.get();
    setDarkTheme(theme === 'dark' ? true : false);
  }
  return { setDarkTheme };
};

export { colorModeManager, useTheme , colors  , width , height};
