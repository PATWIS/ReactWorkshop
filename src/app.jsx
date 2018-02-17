import 'bootstrap/scss/bootstrap.scss';
import './scss/main.scss'
import { data } from './data';
import { EventsList, FavEventsList } from './cardEvent.jsx';



let list = [], page = 1, perpage = 2;

document.querySelector('#showMore').addEventListener('click', () => { page++; update() })

let favEventsList = data.slice(0, 1);


function update() {
  let count = page * perpage;
  list = data.slice(0, count);
  ReactDom.render(<div>
   <FavEventsList list={favEventsList} />
    <EventsList list={list} />
  </div>, document.getElementById('app'));
}


update();
