import { Button, ListGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { cancelRocket, reserveRocket } from '../redux/rocketsSlice';

const RocketListItem = ({ rocket }) => {
  const dispatch = useDispatch();
  const {
    id, name, images, description, reserved,
  } = rocket;
  return (
    <ListGroup.Item className="d-flex gap-3 border-0">
      <img className="custom-width" src={images[0]} alt={name} />
      <div className="w-100">
        <h3 className="fw-bolder">{name}</h3>
        <p className="fs-5 mb-4">{description}</p>
        {reserved ? (
          <Button
            onClick={() => dispatch(cancelRocket(id))}
            variant="outline-secondary"
          >
            Cancel Reservation
          </Button>
        ) : (
          <Button onClick={() => dispatch(reserveRocket(id))} variant="primary">
            Reserve Rocket
          </Button>
        )}
      </div>
    </ListGroup.Item>
  );
};

RocketListItem.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }),
};

RocketListItem.defaultProps = {
  rocket: {
    reserved: false,
  },
};

export default RocketListItem;
