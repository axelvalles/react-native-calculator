import {StyleSheet, Text, View} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';
import {CalculatorButton} from '../components';
import {useCalculator} from '../hooks';

export const CalculatorScreen = () => {
  const {
    prevNumber,
    formula,
    buildNumber,
    clear,
    deleteOperation,
    toggleSign,
    addOperation,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    calculateResult,
  } = useCalculator();
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={styles.resultContainer}>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={globalStyles.mainResult}>
          {formula}
        </Text>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={globalStyles.subResult}>
          {prevNumber === '0' ? ' ' : prevNumber}
        </Text>
      </View>

      <View style={styles.actionsContainer}>
        <CalculatorButton
          onPress={() => clear()}
          blackText
          label="C"
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={() => toggleSign()}
          blackText
          label="+/-"
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={() => deleteOperation()}
          blackText
          label="Del"
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={() => divideOperation()}
          label="/"
          color={colors.orange}
        />
      </View>
      <View style={styles.actionsContainer}>
        <CalculatorButton onPress={() => buildNumber('7')} label="7" />
        <CalculatorButton onPress={() => buildNumber('8')} label="8" />
        <CalculatorButton onPress={() => buildNumber('9')} label="9" />
        <CalculatorButton
          onPress={() => multiplyOperation()}
          label="X"
          color={colors.orange}
        />
      </View>
      <View style={styles.actionsContainer}>
        <CalculatorButton onPress={() => buildNumber('4')} label="4" />
        <CalculatorButton onPress={() => buildNumber('5')} label="5" />
        <CalculatorButton onPress={() => buildNumber('6')} label="6" />
        <CalculatorButton
          onPress={() => subtractOperation()}
          label="-"
          color={colors.orange}
        />
      </View>
      <View style={styles.actionsContainer}>
        <CalculatorButton onPress={() => buildNumber('1')} label="1" />
        <CalculatorButton onPress={() => buildNumber('2')} label="2" />
        <CalculatorButton onPress={() => buildNumber('3')} label="3" />
        <CalculatorButton
          onPress={() => addOperation()}
          label="+"
          color={colors.orange}
        />
      </View>
      <View style={styles.actionsContainer}>
        <CalculatorButton
          onPress={() => buildNumber('0')}
          label="0"
          doubleSize
        />
        <CalculatorButton onPress={() => buildNumber('.')} label="." />
        <CalculatorButton
          onPress={() => calculateResult()}
          label="="
          color={colors.orange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});
