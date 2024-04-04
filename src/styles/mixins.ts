import { Dimensions, PixelRatio } from 'react-native';
import { ICalculateRatio } from '../types/styles';

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 780;

export const scaleSize = (size: number) =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const verticalScale = (size: number) =>
  (WINDOW_HEIGHT / guidelineBaseHeight) * size;

export const moderateScale = (size: number, factor = 0.5) =>
  size + (scaleSize(size) - size) * factor;

export const scaleFont = (size: number) =>
  size * PixelRatio.getFontScale();

export const calculateAspectRatioFit = ({
  width,
  height,
  maxWidth,
  maxHeight
}: ICalculateRatio) => {
  const ratio = Math.min(maxWidth / width, maxHeight / height);
  return {
    width: width * ratio,
    height: height * ratio
  };
};
