import {useEffect} from 'react';

function SplashScreen({navigation}) {
  useEffect(() => {
    function _bootstrapAsync() {
      // Check if user is logged and redirect to Auth or App
      navigation.replace('App');
    }

    _bootstrapAsync();
  }, [navigation]);

  return null;
}

export default SplashScreen;
