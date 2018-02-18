import FaStar from 'react-icons/lib/fa/star';
import FaStarO from 'react-icons/lib/fa/star-o';

export const Button = props => (<button className="btn btn-primary" {...props}>{props.icon} {props.label}</button>)

export const FavButton = ({ className = "btn btn-sm btn-block", label, icon, isFavourite }) => (isFavourite
  ? <Button className={className + " btn btn-danger"} icon={icon || <FaStar />} label={label || 'Remove from favourite'} />
  : <Button className={className + " btn btn-success"} icon={icon || <FaStarO />} label={label || 'Add to favourite'} />
)

class StateButton extends React.Component {
  constructor(props) {
    super()
    this.state = {
      active: this.props.active
    }

    this.props = {
      active: true
    }
  }

  render() {
    return ( this.state.active
      ? <Button icon={<FaStar />} label={'Remove from favourite'} />
      : <Button icon={<FaStarO />} label={'Add to favourite'} />
    )
  }
}
