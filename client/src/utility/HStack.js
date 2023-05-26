import { View } from 'react-native-ui-lib';

export default ({ children, style, bg, rounded, p, m, w, h , align }) => {
  return (
    <View
      row
      {...style}
      style={{
        borderRadius: rounded,
        padding: p,
        margin: m,
        backgroundColor: bg,
        width: w,
        height: h,
        alignItems : align
      }}>
      {children}
    </View>
  );
};
