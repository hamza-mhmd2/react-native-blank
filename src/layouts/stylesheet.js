import { colors } from '@theme';
import { StyleSheet } from 'react-native';

export const theme = StyleSheet.create({
  verticalCenter: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 'auto',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
  },
  centerLeft: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  centerRight: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  topCenter: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  horizontolCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
  },
  rowCenterLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 22,
    backgroundColor: colors.lightPurple,
    height: 44,
    width: '50%',
  },
  title: {
    fontFamily: 'inter',
    fontWeight: '600px',
    fontSize: 24,
    lineHeight: 29.05,
  },
  name: {
    fontFamily: 'inter',
    fontWeight: '600px',
    fontSize: 18,
    lineHeight: 21.78,
  },
});
