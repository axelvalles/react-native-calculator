import {Pressable, Text} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';

interface Props {
  label: string;
  color?: string;
  doubleSize?: boolean;
  blackText?: boolean;
  onPress: () => void;
}

export const CalculatorButton = ({
  label,
  color = colors.darkGray,
  onPress,
  doubleSize = false,
  blackText = false,
}: Props) => {
  const buttonTextColor = blackText ? 'black' : 'white';

  return (
    <Pressable
      onPress={() => onPress()}
      style={({pressed}) => ({
        ...globalStyles.button,
        width: doubleSize ? 180 : 80,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
      })}>
      <Text
        style={{
          ...globalStyles.buttonText,
          color: buttonTextColor,
        }}>
        {label}
      </Text>
    </Pressable>
  );
};
