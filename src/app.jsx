import 'bootstrap/scss/bootstrap.scss';
import './scss/main.scss'
import { data } from './data';
import { EventCard } from './cardEvent.jsx';


let list = data.slice(0, 3);

const EventsList = (list)=> (
    <div>
      {list
        .sort((a, b) => a.date > b.date)
        .map((e) => <EventCard data={e} key={e.id}/>)}
    </div>
  )

ReactDom.render(EventsList(list), document.getElementById('app'));



