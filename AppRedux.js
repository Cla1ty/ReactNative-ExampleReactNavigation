import {Provider} from 'react-redux';
import {Button, View, Text, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

function Counter({value}) {
  return <Text>Count: {value}</Text>;
}

const CounterContainer = connect(state => ({value: state.count}))(Counter);

// Render the app container component with the provider around it
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Screen
          name="Test"
          component={TestScreen}
          options={{title: () => <CountContainer />}}
        />
      </NavigationContainer>
    </Provider>
  );
}
