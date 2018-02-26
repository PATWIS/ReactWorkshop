import {EventEmitter} from 'events'

// const CHANGE_EVENT = 'change'
// class createStore extends EventEmitter {
//   constructor(initialState, actionsHandler, extraMethods) {
//     super()

//   }
// }

function createStore (initialState, actionsHandler, extraMethods) {
  const CHANGE_EVENT = 'change'

  const store = Object.assign({}, EventEmitter.prototype, {
    state: initialState || {},

    emitChange: function() {
      this.emit(CHANGE_EVENT)
    },

    subscribe: function(cb) {
      this.on(CHANGE_EVENT, cb)
    },

    removeChangeListener: function(cb) {
      this.removeListener(cb)
    },

    getState: function() { return this.state },

    dispatch: function(action) {
      actionsHandler.call(this, action)
    }
  })

  return store;
}

export default createStore;
