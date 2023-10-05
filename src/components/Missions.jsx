/** @format */

import { Table, Button, Badge } from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMission } from '../redux/missionsSlice';

const Missions = () => {
  const { missions, loading, error } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  if (loading) {
    return <h1 className="container align-middle text-center">Loading...</h1>;
  }
  if (error) {
    return <h1 className="container align-middle text-center">{error}</h1>;
  }
  return (
    <Table striped className="container">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th colSpan={4}>Status</th>
        </tr>
      </thead>
      <tbody>
        {missions.map(({ missionId, missionName, description }) => (
          <tr key={missionId}>
            <td className="bold">{missionName}</td>
            <td>{description}</td>
            <td className="align-middle text-center">
              <Badge className="bold bg-secondary" variant="secondary">
                Not a Member
              </Badge>
            </td>
            <td className="align-middle text-center">
              <Button className="btn btn-outline-secondary border-2 bold btn-sm" variant="light" onClick={() => dispatch(joinMission(missionId))}>
                Join Mission
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Missions;
