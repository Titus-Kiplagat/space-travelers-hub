import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import RocketListItem from './RocketListItem';

const Profile = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <div className="px-5">
      <h2 className="font-bold">Reserved Rockets</h2>
      {reservedRockets.length === 0 && <p className="fs-2">You have no reserved rockets</p>}
      <ListGroup className="my-2">
        {reservedRockets.map((rocket) => (
          <RocketListItem key={rocket.id} rocket={rocket} />
        ))}
      </ListGroup>
    </div>
  );
};

export default Profile;
