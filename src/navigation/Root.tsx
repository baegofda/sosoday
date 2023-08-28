import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';

const RootNavigator = createNativeStackNavigator();

const Root = () => {
  return (
    <RootNavigator.Navigator
      screenOptions={{ headerShown: false, presentation: 'modal' }}>
      <RootNavigator.Screen name="Tabs" component={Tabs} />
      {/* <RootNavigator.Screen name="Stack" component={Stack} /> */}
    </RootNavigator.Navigator>
  );
};

export default Root;
