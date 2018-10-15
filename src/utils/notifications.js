import { Notifications } from 'expo';

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
      time: date,
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
};

export default notificationUtil;
