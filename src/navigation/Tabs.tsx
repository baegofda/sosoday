import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, StatusBar } from 'react-native';
import Logo from '../components/Logo';
import Home from '../screen/Home';
import LinearGradient from 'react-native-linear-gradient';

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
            height: 32,
          },
          headerShadowVisible: false,
          headerTitle() {
            return <Logo />;
          },
          headerTitleAlign: 'center',
          tabBarStyle: {
            paddingTop: 1,
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            height: 56,
          },
          tabBarItemStyle: { backgroundColor: '#383838' },
          tabBarIconStyle: { display: 'none' },
          tabBarLabelStyle: { color: '#fff' },
          tabBarBackground() {
            return (
              <LinearGradient
                colors={['#383838', '#FFB93B', '#383838']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ flex: 1 }}
              />
            );
          },
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
