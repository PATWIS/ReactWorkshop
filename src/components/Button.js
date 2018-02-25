import FaStar from 'react-icons/lib/fa/star';
import FaStarO from 'react-icons/lib/fa/star-o';
import PropTypes from 'prop-types';

export const Button = props => (<button className="btn btn-primary" {...props}>{props.icon} {props.label}</button>)

// export const FavButton = ({ className = "btn btn-sm btn-block", label, icon, isFavourite }) => (isFavourite
//   ? <Button className={className + " btn btn-danger"} icon={icon || <FaStar />} label={label || 'Remove from favourite'} />
//   : <Button className={className + " btn btn-success"} icon={icon || <FaStarO />} label={label || 'Add to favourite'} />
// )

export const FavButton = ({ className = "btn btn-sm btn-block", label, icon, isFavourite }) => (isFavourite
  ? <Button className={className + " btn btn-danger"} icon={icon || <FaStar />} label={label || 'Remove from favourite'} />
  : <Button className={className + " btn btn-success"} icon={icon || <FaStarO />} label={label || 'Add to favourite'} />
)

export class StateButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active: this.props.active,
      added: this.props.added
    }

    this.setActive = this.setActive.bind(this);
    this.setInactive = this.setInactive.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    this.setState(prevState => {
      return {
        active: nextProps.active
      }
    })
  }

  setActive(e) {
    this.setState(prevState => {
      return {
        active: true
      }
    })
    this.props.added()
  }

  setInactive(e) {
    this.setState(prevState => {
      return {
        active: false
      }
    })
    // this.props.added();
  }

  render() {
    return ( this.state.active
      ? <Button icon={<FaStar />} label={'Remove from favourite'} onClick={this.setInactive} />
      : <Button icon={<FaStarO />} label={'Add to favourite'} onClick={this.setActive}  />
    )
  }
}

StateButton.propTypes = {
  active: PropTypes.bool
}

