import * as React from 'react';
import {Button, View, Text, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();

function Screen() {
  return (
    <View>
      <Text style={{color: '#fff'}}>Light Screen</Text>
      <Button title="Next screen" color="#fff" />
    </View>
  );
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="A"
        component={Screen}
        // options={{tabBarLabel: 'Home!'}}
      />
    </HomeStack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="B"
        component={Screen}
        // options={{tabBarLabel: 'Settings!'}}
      />
    </SettingsStack.Navigator>
  );
}

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen
//           name="Home"
//           component={HomeTabs}
//           options={({route}) => ({
//             tabBarLabel: 'Home!',
//             headerTitle: getHeaderTitle(route),
//           })}
//         />
//         <Tab.Screen
//           name="Settings"
//           component={SettingsStackScreen}
//           options={{tabBarLabel: 'Settings!'}}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={HomeTabs}
          options={({route}) => ({
            tabBarLabel: 'Home!',
            headerTitle: getHeaderTitle(route),
          })}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

function getHeaderTitle(route) {
  // Access the tab navigator's state using `route.state`
  const routeName = route.state
    ? // Get the currently active route name in the tab navigator
      route.state.routes[route.state.index].name
    : // If state doesn't exist, we need to default to `screen` param if available, or the initial screen
      // In our case, it's "Feed" as that's the first screen inside the navigator
      route.params?.screen || 'Feed';

  switch (routeName) {
    case 'Feed':
      return 'News feed';
    case 'Profile':
      return 'My profile';
    case 'Account':
      return 'My account';
  }
}

function HomeTabs({navigation, route}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({headerTitle: getHeaderTitle(route)});
  }, [navigation, route]);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Screen} />
      <Tab.Screen name="Profile" component={Screen} />
      <Tab.Screen name="Account" component={Screen} />
    </Tab.Navigator>
  );
}
