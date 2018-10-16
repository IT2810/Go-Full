import cloneDeep from 'lodash/cloneDeep';
import moment from 'moment';

const Serializer = {
  deserializeState(state) {
    const tempState = state.events.map((event) => {
      const tempEvent = cloneDeep(event);
      tempEvent.time = moment(event.time);
      tempEvent.drinks = event.drinks.map((drink) => {
        const tempDrink = cloneDeep(drink); // i fucking love immutability baby wooo!
        tempDrink.timeStamp = moment(drink.timeStamp);
        return tempDrink;
      });
      return tempEvent;
    });
    console.log(tempState, 'deseriala<iaation');
    return tempState;
  },

  serializeState(deserializedState) {
    const tempState = deserializedState.events.map((event) => {
      const tempEvent = cloneDeep(event);
      tempEvent.time = event.time.valueOf();
      tempEvent.drinks = event.drinks.map((drink) => {
        const tempDrink = drink;
        tempDrink.timeStamp = drink.timeStamp.valueOf();
        return tempDrink;
      });
      return tempEvent;
    });
    console.log(tempState, 'serializatwsaahioon');
    return tempState;
  },
};
export default Serializer;
