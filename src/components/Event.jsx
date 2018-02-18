import {FavButton, Button} from './Button.jsx'

export const EventDetails = ({ data }) => {
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

export const EventActions = ({isAdmin}) => (
  <div className="btn-group d-flex float-sm-right" role="group">
    {isAdmin ? <Button label='Edit' /> : null}
    <Button label='Event details' />
  </div>
)

export const EventCard = (props) => {
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
