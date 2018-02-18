import 'bootstrap/scss/bootstrap.scss';
import './scss/main.scss'
import { data } from './data';
import {EventDetails, EventCard, EventActions} from './components/Event.jsx'
import {FavDetails} from './components/Favourites.jsx'
let list = [], page = 1, perpage = 2;

document.querySelector('#showMore').addEventListener('click', () => { page++; update() })

let favEventsList = data.slice(0, 1);


const EventsList = ({list, isAdmin}) => (
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

const FavEventsList = ({list}) => (
  <div>
    <h2>Favourite events</h2>
    <hr />
    <div>
      {list
        .sort((a, b) => a.date > b.date)
        .map((e) => <EventCard data={e} key={e.id} Details={FavDetails}/>)}
    </div>
  </div>
)


function update() {
  let count = page * perpage;
  list = data.slice(0, count);
  ReactDom.render(<div>
   <FavEventsList list={favEventsList} isAdmin={true} />
    <EventsList list={list} isAdmin={true} />
  </div>, document.getElementById('app'));
}


update();
