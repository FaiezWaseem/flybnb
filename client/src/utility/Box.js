import { View } from 'react-native-ui-lib';

export default ({
  children,
  style,
  bg,
  rounded,
  p,
  m,
  w,
  h,
  alignItems,
  flex,
  flexDirection,
  justifyContent,
  position,
  zIndex,
  top,
  left,
  bottom,
  right,
  e,
}) => {

let el = e ? elevation[e] : {}

  return (
    <View
      {...style}
      flex={flex}
      style={{
        alignItems,
        flexDirection,
        justifyContent,
        position,
        zIndex,
        top,
        left,
        bottom,
        right,
        borderRadius: rounded,
        padding: p,
        margin: m,
        backgroundColor: bg,
        width: w,
        height: h,
        ...el
      }} >
      {children}
    </View>
  );
};
const elevation = {
  1: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  2: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  3: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  4: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  5: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
};
