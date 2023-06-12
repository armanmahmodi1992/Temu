import {Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('window');

//Guideline sizes are based on standard ~5 screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
const screenSize = Math.sqrt(width * height) / 100;

const scale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;

const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const scaleSpace = (size: number) => {
  ((height / guidelineBaseHeight) * size).toFixed(2);
};
const scaleSpaceW = (size: number) => {
  (width / guidelineBaseWidth) * size;
};

const headerHeight = height > 700 ? verticalScale(40) : verticalScale(20);

const fontWeight = {
  thin: '100',
  ultraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  heavy: '800',
  black: '900',
};

const fontFamily = {
  light: 'Roboto-Light',
  regular: 'Roboto-Regular',
  medium: 'Roboto-Medium',
  bold: 'Roboto-Bold',
  thin: 'Roboto-Thin',
  number:'IRANSansMedium'
};

const fontSize = {
tooLarge: scale(27),
xxxLarge: scale(24),
xxLarge: scale(22),
xLarge: scale(20),
large: scale(18),
medium: scale(16),
xNormal: scale(15),
normal: scale(14),
small: scale(13),
tiny: scale(12),
xTiny: scale(11),
xxTiny: scale(10),
xxxTiny: scale(8),
heading1: scale(56),
heading2: scale(48),
heading3: scale(40),
heading4: scale(32),
heading5: scale(24),
heading6: scale(20),
}

export {
  scaleSpace,
  scale,
  verticalScale,
  moderateScale,
  screenSize,
  scaleSpaceW,
  fontWeight,
  fontFamily,
  headerHeight,
  fontSize
};
