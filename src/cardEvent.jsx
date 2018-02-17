import FaStar from 'react-icons/lib/fa/star';
import FaStarO from 'react-icons/lib/fa/star-o';


const EventDetails = ({ data }) => {
  return (
    <div>
      <table className="table" style={{ width: 200 }}>
        <tbody>
          <tr>
            <th>When</th>
            <td>{data.date}</td>
          </tr>
          <tr>
            <th>Where</th>
            <td>{data.city}</td>
          </tr>
        </tbody>
      </table>
      <FavButton isFavourite={false} />
    </div>
  )
}

const FavDetails = ()=> (
  <FavButton isFavourite={true}/>
)

const EventActions = () => (
  <div className="btn-group d-flex float-sm-right" role="group">
    <Button label='Sign in' />
    <Button label='Add to favourite' icon={<FaStar />} />
  </div>
)

const Button = props => (<button className="btn btn-outline-primary" {...props}>{props.icon} {props.label}</button>)

const FavButton = ({ className = "btn btn-sm btn-block", label, icon, isFavourite }) => (isFavourite
  ? <Button className={className + " btn-outline-danger"} icon={icon || <FaStar />} label={label || 'Remove from favourite'} />
  : <Button className={className + " btn-outline-success"} icon={icon || <FaStarO />} label={label || 'Add to favourite'} />
)


const EventCard = (props) => {
  let { data, Details } = props;
  return (
    <div className="card">
      <div className="card-body">
        <div className="media">
          <div className="media-left">
            <img className="mr-3" src={data.src} alt="image" />
          </div>
          <div className="media-body">
            <h5 className="mt-0">{data.name}</h5>
            <p className="badge badge-primary">{data.category}</p>
            <p>{data.desc}</p>
            {props.children}
          </div>
          <div className="media-right">
            <Details {...props} />
          </div>
        </div>
      </div>
    </div>

  )
}

export const EventsList = ({list}) => (
  <div>
    <h2>Upcoming events</h2>
    <hr />
    <div>
      {list
        .sort((a, b) => a.date > b.date)
        .map((e) => <EventCard data={e} key={e.id} Details={EventDetails}> <EventActions /> </EventCard>)}
    </div>
  </div>
)

export const FavEventsList = ({list}) => (
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
