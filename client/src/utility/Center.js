import { View } from 'react-native-ui-lib';

export default ({ children, style, bg, rounded, p, m, w, h, align , flex }) => {
  return (
    <View
      centerH
      centerV
      flex={flex}
      {...style}
      style={{
        borderRadius: rounded,
        padding: p,
        margin: m,
        backgroundColor: bg,
        width: w,
        height: h,
        alignItems: align,
      }}>
      {children}
    </View>
  );
};
