import 'bootstrap/scss/bootstrap.scss';
import './scss/main.scss'
import { data } from './data';
import { EventDetails, EventCard, EventActions } from './components/Event.jsx'
import { FavDetails } from './components/Favourites.jsx'
// let list = [], page = 1, perpage = 2;



// let list = data.slice(0, 1);


const EventsList = ({ list, isAdmin }) => (
  <div>
    <h2>Upcoming events</h2>
    <hr />
    <div>
      {list
        .sort((a, b) => a.date > b.date)
        .map((e) => <EventCard data={e} key={e.id} Details={EventDetails}> <EventActions isAdmin={isAdmin} /> </EventCard>)}
    </div>
  </div>
)

const FavEventsList = ({ list }) => (
  <div>
    <h2>Favourite events</h2>
    <hr />
    <div>
      {list
        .sort((a, b) => a.date > b.date)
        .map((e) => <EventCard data={e} key={e.id} Details={FavDetails} />)}
    </div>
  </div>
)


class App extends React.Component {

  constructor(props) {
    super();
    this.state = {
      page: 1,
      list: props.list.slice(0, 1)
    }
  }

  loadMore() {
    let page = this.state.page + 1;
    let list = this.props.list.slice(0, page * 2)
    this.setState({
      page: page,
      list: list
    })
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Company events</span>
        </nav>
        <div className="container">
          {/* <FavEventsList list={favEventsList} isAdmin={true} /> */}
          <EventsList list={this.state.list} isAdmin={true} />
          <button onClick={this.loadMore.bind(this)}>Show More</button>
        </div>
      </div>
    )
  }
}

ReactDom.render(<App list={data} />, document.getElementById('app'))
