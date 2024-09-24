import { StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { LinearGradient, LinearGradientProps } from 'react-native-linear-gradient';
import Button, { ButtonProps } from '../Button/Button';

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    overflow: 'hidden',
  },
  gradientBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export interface GradientButtonProps extends ButtonProps {
  gradientBackgroundProps: LinearGradientProps;
  gradientBackgroundStyle?: StyleProp<ViewStyle>;
}

function GradientButton({
  gradientBackgroundProps,
  gradientBackgroundStyle,
  style,
  ...others
}: GradientButtonProps) {
  return (
    <Button {...others} style={[styles.root, style]}>
      <LinearGradient
        {...gradientBackgroundProps}
        style={[styles.gradientBackground, gradientBackgroundStyle]}
      />
    </Button>
  );
}

export default GradientButton;
