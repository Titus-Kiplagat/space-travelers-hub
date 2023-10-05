import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { fetchRockets } from '../redux/rocketsSlice';
import RocketListItem from './RocketListItem';

const Rockets = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <ListGroup className="my-2 px-5">
      {
        rockets.map((rocket) => (
          <RocketListItem key={rocket.id} rocket={rocket} />
        ))
      }
    </ListGroup>
  );
};

export default Rockets;
