import createStore from './createStore'

const AppStore = createStore({
  page: 1,
  events: [],
  events_map: [],
  list: [],
  favEventslist: []
},function(action)  {
  let payload = action.payload;
  let state = this.state;
  switch (action.type) {
    case 'LOAD_EVENTS':

    state.events = payload;

      state.events_map = payload.reduce((map, event) => {
        map[event.id] = event;
        return map
      }, {}),
        this.emitChange();
      break;

    case 'LOAD_MORE':
      this.emitChange();
      break;

    default:
      break;
  }
})

import { data as events_data } from '../data';

AppStore.subscribe(()=> {
  console.log(AppStore.getState())
})

AppStore.dispatch({
  type: 'LOAD_EVENTS',
  payload: events_data,
  meta: {
    timestamp: Date.now()
  }
})

console.log(AppStore)

export default AppStore;
