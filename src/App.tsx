import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  }
});

type GreetingProps = {
  name: string;
};

const Greeting = (props: GreetingProps) => {
  return (
    <View>
      <Text>Hello, {props.name}!</Text>
    </View>
  )
}

const App = () => {
  return (
    <View
      style={[
        styles.center,
        {
          top: 50
        }
      ]}>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
    </View>
  );
};
export default App;