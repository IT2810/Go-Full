import cloneDeep from 'lodash/cloneDeep';
import moment from 'moment';

const Serializer = {
  deserializeState(events) {
    const tempEvents = events.map((event) => {
      const tempEvent = cloneDeep(event);
      tempEvent.time = moment(event.time);
      tempEvent.drinks = event.drinks.map((drink) => {
        const tempDrink = cloneDeep(drink); // I fucking love immutability baby, wooo!
        tempDrink.timeStamp = moment(drink.timeStamp);
        return tempDrink;
      });
      return tempEvent;
    });
    return tempEvents;
  },

  serializeState(deserializedEvents) {
    const tempEvents = deserializedEvents.map((event) => {
      const tempEvent = cloneDeep(event);
      tempEvent.time = event.time.valueOf();
      tempEvent.drinks = tempEvent.drinks.map((drink) => {
        const tempDrink = cloneDeep(drink);
        tempDrink.timeStamp = drink.timeStamp.valueOf();
        // console.log('boop');
        // console.log(drink.timeStamp.valueOf());
        // console.log(drink);
        return tempDrink;
      });
      return tempEvent;
    });
    return tempEvents;
  },
};

export default Serializer;
