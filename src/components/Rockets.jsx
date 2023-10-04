import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rocketsSlice';

const Rockets = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div>
      <h1>Rockets</h1>
      <ul>
        {rockets.map((rocket) => (
          <li key={rocket.id}>
            <strong>Name:</strong>
            {' '}
            {rocket.name}
            ,
            {' '}
            <strong>Type:</strong>
            {' '}
            {rocket.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
