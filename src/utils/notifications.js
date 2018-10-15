import { Notifications } from 'expo';

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

};

export default notificationUtil;
