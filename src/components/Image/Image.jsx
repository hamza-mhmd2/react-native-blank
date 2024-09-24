import { Image as RNImage } from 'react-native';

function Image() {
  return (
    <RNImage transition={transition ?? 0} contentFit={contentFit ?? 'contain'} {...others} />
  );
}

export default Image;
