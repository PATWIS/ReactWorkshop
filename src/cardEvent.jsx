import FaStar from 'react-icons/lib/fa/star';
import FaStarO from 'react-icons/lib/fa/star-o';
const EventDetails = ({ data }) => {
  return (
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
  )
}

const Button = ({icon, label}) => (<button className="btn btn-default">{icon} {label}</button>)

const EventActions = () => (
  <div className="btn-group d-flex float-sm-right" role="group">
    <Button label='Sign in' />
    <Button label='Add to favourite' icon={<FaStar/>}/>
  </div>
)

export const EventCard = (props) => {
  let { data } = props;
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
            <EventActions />
          </div>
          <div className="media-right">
            <EventDetails {...props} />
          </div>
        </div>
      </div>
    </div>

  )
}
