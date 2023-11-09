import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Logo from 'src/components/Icon/Logo';
import Diary from 'src/screens/Diary';
import MyPage from 'src/screens/MyPage';
import IcDiary from '../components/Icon/TabBar/IcDiary';
import IcHome from '../components/Icon/TabBar/IcHome';
import IcMyPage from '../components/Icon/TabBar/IcMyPage';
import TabBarLabel from '../components/TabBarLabel';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <>
      <LinearGradient
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        useAngle={true}
        angle={225}
        angleCenter={{ x: 0.5, y: 0.5 }}
        colors={['#BCECFF', '#C2BBFF']}>
        <SafeAreaView style={{ flex: 1 }}>
          <Tab.Navigator
            initialRouteName="Home"
            sceneContainerStyle={{
              backgroundColor: 'transparent',
              paddingTop: 8,
            }}
            screenOptions={{
              headerStatusBarHeight: 0,
              headerShadowVisible: false,
              headerStyle: {
                height: 26,
                backgroundColor: 'transparent',
              },
              headerTitleAlign: 'center',
              tabBarStyle: {
                paddingHorizontal: 20,
                paddingTop: 8,
                paddingBottom: 8,
                backgroundColor: '#fff',
                borderTopColor: '#AAA3EE',
                borderTopWidth: 1,
                height: 70,
              },
              tabBarItemStyle: {
                height: 54,
                justifyContent: 'center',
              },
              tabBarIconStyle: {
                flex: 0,
                height: 20,
                marginBottom: 8,
              },
            }}>
            <Tab.Screen
              name="Diary"
              component={Diary}
              options={{
                headerTitle: () => <Text>내 기록</Text>,
                tabBarLabel: ({ focused }) => (
                  <TabBarLabel label="내 기록" isCurrentRoute={focused} />
                ),
                tabBarIcon: ({ focused }) => (
                  <IcDiary isCurrentRoute={focused} />
                ),
              }}
            />
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                headerTitle: () => <Logo />,
                tabBarLabel: ({ focused }) => (
                  <TabBarLabel label="홈" isCurrentRoute={focused} />
                ),
                tabBarIcon: ({ focused }) => (
                  <IcHome isCurrentRoute={focused} />
                ),
              }}
            />
            <Tab.Screen
              name="MyPage"
              component={MyPage}
              options={{
                headerShown: false,
                tabBarLabel: ({ focused }) => (
                  <TabBarLabel label="마이페이지" isCurrentRoute={focused} />
                ),
                tabBarIcon: ({ focused }) => (
                  <IcMyPage isCurrentRoute={focused} />
                ),
              }}
            />
          </Tab.Navigator>
        </SafeAreaView>
      </LinearGradient>
      <SafeAreaView style={{ flex: 0, backgroundColor: '#fff' }} />
    </>
  );
};

export default Tabs;
