import 'bootstrap/scss/bootstrap.scss';
import './scss/main.scss'
import { data as events_data } from './data';
import { EventDetails, EventCard, EventActions } from './components/Event'
import { FavDetails } from './components/Favourites'
import {Header} from './components/Header'
// import { Router, Route, hashHistory} from 'react-router'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Loadable from 'react-loadable';
import AppStore from './stores/appStore'
const Loading = () => <div>Loading...</div>;

const EventsList = ({ list, isAdmin }) => (
  <div>
    <h2>Upcoming events</h2>
    <hr />
    <div>
      {list
        .sort((a, b) => a.date > b.date)
        .map((e) => <EventCard data={e} key={e.id} actions={actions} Details={EventDetails}> <EventActions isAdmin={isAdmin} /> </EventCard>)}
    </div>
  </div>
)


const FavEventsList = ({ list }) => (
  <div>
    <h2>Favourite events</h2>
    <hr />
    <div>
      {list.length === 0 ? 'You have not added any favorite events yet.'
        :
        list
          .sort((a, b) => a.date > b.date)
          .map((e) => <EventCard data={e} key={e.id} Details={FavDetails} />)}
    </div>
  </div>
)


function StateStore() {

  this.state = {},

    this.dispatchEvents = function () {
      this.callback(this.state)
    }

  this.callback = function () { };

  this.addListener = (callback) => {
    this.callback = callback
  };

  this.createAction = (handler) => {
    var state = this.state;
    return function () {
      handler.apply(state, arguments);
      AppState.dispatchEvents();
    }
  }

  this.createActions = (handlersMap) => {
    let actions = {}
    for (let name in handlersMap) {
      actions[name] = this.createAction(handlersMap[name])
    }
    return actions
  }

}

const AppState = new StateStore();
AppState.state = {
  page: 1,
  events: events_data,
  events_map: events_data.reduce((map, event) => {
    map[event.id] = event;
    return map
  }, {}),
  list: events_data.slice(0, 1),
  favEventslist: []
}

window.AppState = AppState;

const actions = AppState.createActions({

  loadMore: function (e) {
    let page = this.page + 1;
    this.page = page;
    this.list = this.events.slice(0, this.page * 3)
  },

  // loadMore() {
  //   this.setState(prevState => {
  //     let page = prevState.page + 1
  //     return {
  //       page: page,
  //       list: prevState.events.slice(0, page * 2)
  //     }
  //   })
  // },

  addFavourites() {
    this.favEventslist.push(this.list[0])
    // this.setState(prevState => {
    //   prevState.favEventslist.push(prevState.list[0]);
    //   return {
    //     favEventslist : prevState.favEventslist
    //   }
    // })
  }
})

// const Header = () => (
//   <nav className="navbar navbar-light bg-light">
//     <span className="navbar-brand">Company events</span>
//     <ul className="nav">
//       <li className="nav-item">
//         <Link className="nav-link" to='/'>Home</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link" to='/fav'>Roster</Link>
//       </li>
//     </ul>
//   </nav>
// )


const Main = () => (
  <main>
    <Router>
      <Switch>
        <Route exact path='dist/' component={EventsList} />
        <Route path='dist/fav' component={FavEventsList} />
      </Switch>
    </Router>
  </main>
)

const EventListContainer = () => {
  return <div>test</div>
}

class App extends React.Component {

  constructor(props) {
    console.log(props);
    super(props);
    this.state = this.props.store.state;
    this.loadMore = this.props.actions.loadMore.bind(this);
  }

 componentWillMount() {
    console.log('will mount')
  }

  componentWillUpdate() {
    console.log('will update')
  }

  componentDidMount() {
    console.log('domponent did mount')
    this.props.store.addListener = (state) => {
      this.setState(prevState => {
        return {
          page: state.page,
          list: state.list,
          favEventslist: state.favEventslist
        }
      })
    }
  }

  //  loadMore() {
  //   this.setState(prevState => {
  //     let page = prevState.page + 1
  //     return {
  //       page: page,
  //       list: prevState.events.slice(0, page *2)
  //     }
  //   })



  render() {
    return (
      <div>
        <Header />
        <div className="container">
          {/* <Route exact path="/" component={EventListContainer} /> */}
          <Route exact path="/" component={() => (<EventsList list={this.state.list} isAdmin={true} />)} />
          <Route path="/fav" component={()=> <FavEventsList list={this.state.favEventslist} isAdmin={true} />} />
          {/* <FavEventsList list={this.state.favEventslist} isAdmin={true} />
          <EventsList list={this.state.list} isAdmin={true} /> */}
          <button onClick={this.loadMore}>Show More</button>
        </div>
      </div>

    )
  }
}

ReactDom.render(<Router><App store={AppState} actions={actions} /></Router>, document.getElementById('app'))
