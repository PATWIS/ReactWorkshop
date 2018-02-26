import appStore from '../stores/appStore';
import ACTIONS from '../constants/actions'
import { data as events_data } from '../data';
const dispatch = appStore.dispatch.bind(appStore);

const actionsCreators = {

  loadEvents: function(e) {
    dispatch({
      type: ACTIONS.LOAD_MORE_EVENTS,
      payload: {},
      meta: {
        timestamp: Date.now()
      }
    })
  },

  loadMore: function() {
    dispatch({
      type: 'LOAD_EVENTS',
      payload: events_data,
      meta: {
        timestamp: Date.now()
      }
    })
  }

};
