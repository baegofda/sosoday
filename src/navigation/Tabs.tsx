import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, StatusBar } from 'react-native';
import Logo from '../components/Logo';
import Home from '../screen/Home';

const Tab = createBottomTabNavigator();

// NOTE - 탭바 위에 그라디언트는 어떻게하지..?
// https://stackoverflow.com/questions/45679160/gradient-background-for-tabbar
// TODO - 위 라이브러리 적용하면 safe-area는 어떻게 될까?
// https://medium.com/reactbrasil/react-native-set-different-colors-on-top-and-bottom-in-safeareaview-component-f008823483f3

const Tabs = () => {
  return (
    <>
      <SafeAreaView>
        <StatusBar backgroundColor={'#222'} />
      </SafeAreaView>
      <Tab.Navigator
        sceneContainerStyle={{ backgroundColor: '#222' }}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#222',
            height: 70,
          },
          headerShadowVisible: false,
          headerTitle() {
            return <Logo />;
          },
          headerTitleAlign: 'center',
          headerTitleContainerStyle: { marginTop: 'auto' },
          tabBarStyle: {
            backgroundColor: '#383838',
            borderTopWidth: 0,
          },
          tabBarIconStyle: { display: 'none' },
          tabBarLabelStyle: { color: '#fff' },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ tabBarLabel: '기록 리스트' }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Tabs;
