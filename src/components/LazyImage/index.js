import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';

import { Small, Original } from './styles';

const OriginalAnimated = Animated.createAnimatedComponent(Original);

export default function LazyImage({
  smallSource,
  source,
  aspectRatio,
  shouldLoad
}) {
  const opacity = new Animated.Value(0);

  const [loaded, setLoaded] = useState(false);

  function handleAnimate() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  useEffect(() => {
    if (shouldLoad) {
      setLoaded(true);
    }
  }, [shouldLoad]);

  return (
    <Small
      ratio={aspectRatio}
      source={smallSource}
      blurRadius={2}
      resizeMode="contain"
    >

      {loaded && (
        <OriginalAnimated
          style={{ opacity }}
          source={source}
          ratio={aspectRatio}
          resizeMode="contain"
          onLoadEnd={handleAnimate}
        />
      )}
    </Small>
  );
}
