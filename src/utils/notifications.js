import { Notifications } from 'expo';

// Usage
// import notificationUtil from './notifications'
// call notificationUtil.sendNotificationAsync(title, body, channelId, date)
// title and body are strings.
// channelId is one of these three strings 'test', 'mission-critical' and 'nudge'.
// date is a date object that decides when the notification is sent.

// if you want to have ability to cancel a notification you need
// to store the id that sendNotificationAsync returns
// to do this the function might have to be awaited.

const notificationUtil = {
  async sendNotificationAsync(title, body, channelId, date) {
    // Creating a notificationObject with configuration options.
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

    // Creating scheduling options, which simply needs a date object.
    // Here we also convert from a moment.js object to a standard date object.
    const schedulingOptions = {
      time: date.toDate(),
    };

    // Here we actually schedule the notification.
    const id = await Notifications.scheduleLocalNotificationAsync(
      notificationObject,
      schedulingOptions,
    );

    // We need this id to cancel notifications later.
    return id;
  },

  cancelNotification(id) {
    if (id === -1) return;
    Notifications.cancelScheduledNotificationAsync(id);
  },
};

export default notificationUtil;
