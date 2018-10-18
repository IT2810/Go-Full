import { Notifications } from 'expo';
import { Platform } from 'react-native';

// Usage
// import notificationUtil from './notifications'
// call notificationUtil.sendNotificationAsync(title, body, channelId, date)
// title and body are strings.
// channelId is one of these three strings 'test', 'mission-critical' and 'nudge'.
// date is a date object that decides when the notification is sent.

// if you want to have ability to cancel a notification you need
// to store the id that sendNotificationAsync returns
// to do this the function must be awaited.

const notificationUtil = {
  async sendNotificationAsync(title, body, channelId, date) {
    const notificationObject = {
      title,
      body,
      ios: {
        sound: true,
      },
      android:
      {
        color: '#9C4DCC',
        channelId,
      },
    };

    const schedulingOptions = {
      time: date.toDate(),
    };

    const id = await Notifications.scheduleLocalNotificationAsync(
      notificationObject,
      schedulingOptions,
    );

    return id;
  },

  cancelNotification(id) {
    Notifications.cancelScheduledNotificationAsync(id);
  },
  setupNotificationChannels() {
    if (Platform.OS === 'android') {
      // Channel for test notifications
      Notifications.createChannelAndroidAsync('test', {
        name: 'Test notifications',
        sound: true,
        priority: 'max',
        vibrate: true,
      });

      // Channel for mission critical notifications
      Notifications.createChannelAndroidAsync('mission-critical', {
        name: 'Test notifications',
        sound: true,
        priority: 'high',
        vibrate: true,
      });

      // Channel for less important notifications
      Notifications.createChannelAndroidAsync('nudge', {
        name: 'Test notifications',
        sound: true,
        priority: 'low',
        vibrate: true,
      });
    }
  },
};

export default notificationUtil;
