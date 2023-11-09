import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Logo from 'src/components/Icon/Logo';
import Diary from 'src/screens/Diary';
import MyPage from 'src/screens/MyPage';
import IcDiary from '../components/Icon/TabBar/IcDiary';
import IcHome from '../components/Icon/TabBar/IcHome';
import IcMyPage from '../components/Icon/TabBar/IcMyPage';
import TabBarLabel from '../components/TabBarLabel';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();
const TAB_BAR_COLOR = '#fff';

// TODO - 아이콘 높이 20px 받기
const Tabs = () => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar translucent backgroundColor={'transparent'} />
      <LinearGradient
        style={{ flex: 1, paddingTop: insets.top + 8 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        useAngle={true}
        angle={225}
        angleCenter={{ x: 0.5, y: 0.5 }}
        colors={['#BCECFF', '#C2BBFF']}>
        <Tab.Navigator
          initialRouteName="Home"
          sceneContainerStyle={{
            backgroundColor: 'transparent',
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
              backgroundColor: TAB_BAR_COLOR,
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
            tabBarLabelStyle: {
              height: 12,
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
              tabBarIcon: ({ focused }) => <IcDiary isCurrentRoute={focused} />,
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
              tabBarIcon: ({ focused }) => <IcHome isCurrentRoute={focused} />,
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
      </LinearGradient>
      <SafeAreaView style={{ flex: 0, backgroundColor: TAB_BAR_COLOR }} />
    </>
  );
};

export default Tabs;
