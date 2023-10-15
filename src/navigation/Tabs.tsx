import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, StatusBar } from 'react-native';
import Logo from '../components/Icon/Logo';
import IcDiary from '../components/Icon/TabBar/IcDiary';
import IcHome from '../components/Icon/TabBar/IcHome';
import IcMyPage from '../components/Icon/TabBar/IcMyPage';
import TabBarLabel from '../components/TabBarLabel';
import Home from '../screen/Home';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <>
      <SafeAreaView>
        <StatusBar />
      </SafeAreaView>
      <Tab.Navigator
        sceneContainerStyle={{ backgroundColor: '#222', paddingTop: 8 }}
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent',
            height: 26,
          },
          headerShadowVisible: false,
          headerTitle() {
            return <Logo />;
          },
          headerTitleAlign: 'center',
          tabBarStyle: {
            paddingHorizontal: 20,
            paddingTop: 8,
            paddingBottom: 8,
            backgroundColor: '#383838',
            borderTopColor: '#FFB93B',
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
          component={Home}
          options={{
            tabBarLabel: ({ focused }) => (
              <TabBarLabel label="내기록" isCurrentRoute={focused} />
            ),
            tabBarIcon: ({ focused }) => <IcDiary isCurrentRoute={focused} />,
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: ({ focused }) => (
              <TabBarLabel label="홈" isCurrentRoute={focused} />
            ),
            tabBarIcon: ({ focused }) => <IcHome isCurrentRoute={focused} />,
          }}
        />
        <Tab.Screen
          name="MyPage"
          component={Home}
          options={{
            tabBarLabel: ({ focused }) => (
              <TabBarLabel label="마이페이지" isCurrentRoute={focused} />
            ),
            tabBarIcon: ({ focused }) => <IcMyPage isCurrentRoute={focused} />,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Tabs;
