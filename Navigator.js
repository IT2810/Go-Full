import { createStackNavigator } from 'react-navigation';
import ScheduleScreen from './src/screens/scheduleScreen';
import EventScreen from './src/screens/eventScreen';
import CreateEventScreen from './src/screens/createEventScreen';

const NavigatorConfig = {
  initialRouteName: 'Schedule',
  shifting: false,
  backBehavior: 'initialRoute',
  barStyle: { backgroundColor: 'orange' },
  swipeEnabled: true,
};


const Navigator = createStackNavigator(({
  Schedule: {
    screen: ScheduleScreen,
  },
  Event: {
    screen: EventScreen,
  },
  createEvent: {
    screen: CreateEventScreen,
  },
}), NavigatorConfig);

export default Navigator;
