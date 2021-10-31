import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Cam from './components/scanner.js';
import SplashScreen from './components/splash_screen.js';
import StartPage from './components/start_page.js';

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="splashscreen" component={SplashScreen} title="Pramaan" />
      <Scene key="home" component={StartPage} title="Pramaan" />
      <Scene key="cam" component={Cam} title="Scanner" />
    </Scene>
  </Router>
);
export default Routes;
