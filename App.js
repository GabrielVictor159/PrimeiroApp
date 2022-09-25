
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Inicial from './componentes/Inicial';
import AdicionarItens from './componentes/AdicionarItens';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}
function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
    </View>
  );
}
const AppNavigator = createStackNavigator({
  Inicial,
  AdicionarItens,
  ListarItens
},
{
  initialRouteName: 'Inicial'
}
);



const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  );
}
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
    useLegacyImplementation
      screenOptions={{
        drawerStyle: {
          hideStatusBar: true,
          backgroundColor: 'black',
          overlayColor: '#6b52ae',
          contentOptions: {
            activeTintColor: '#fff',
            activeBackgroundColor: '#6b52ae',
          }
        },
      }}
    >
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}
const TabNavigator = createBottomTabNavigator({
Home: Home,
Feed: Feed,
Article: Article
});
export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
      
    </NavigationContainer>
    
  );
}