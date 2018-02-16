export const eventCard = (event) => {
  return (
    <div className="card">
  <div className="card-body">
  <div className="media">
      <div className="media-left">
        <img className="mr-3" src={event.src} alt="image" />
      </div>
      <div className="media-body">
        <h5 className="mt-0">{event.name}</h5>
        <p className="badge badge-primary">{event.category}</p>
        <p>{event.desc}</p>
        {event.isPromo ? <span className="badge badge-primary">Promo</span> : null}
        <div className="btn-group d-flex float-sm-right" role="group">
        <button className="btn btn-default">Sign in</button>
        <button className="btn btn-default">Add to favourite</button>
        </div>
      </div>
      <div className="media-right">
        <table className="table" style={{ width: 200 }}>
          <tbody>
            <tr>
              <th>Date</th>
              <td>{event.date}</td>
            </tr>
            <tr>
              <th>Place</th>
              <td>Gdańsk</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  </div>
</div>

  )
}
