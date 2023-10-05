/** @format */

import { Table, Button, Badge } from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMissions,
  joinMission,
  leaveMission,
} from '../redux/missionsSlice';

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
    <div className="px-5">
      <Table striped bordered className="container-fluid">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th colSpan={4}>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map(({
            missionId, missionName, description, reserved,
          }) => (
            <tr key={missionId}>
              <td className="bold">{missionName}</td>
              <td colSpan={9}>{description}</td>
              <td className="align-middle text-center">
                {reserved ? (
                  <Badge className="bold bg-primary" variant="secondary">
                    Active Member
                  </Badge>
                ) : (
                  <Badge className="bold bg-secondary" variant="secondary">
                    NOT A MEMBER
                  </Badge>
                )}
              </td>
              <td className="align-middle">
                {reserved ? (
                  <Button
                    className="btn btn-outline-danger border-2 bold max-content-width"
                    variant="light"
                    onClick={() => dispatch(leaveMission(missionId))}
                  >
                    Leave Mission
                  </Button>
                ) : (
                  <Button
                    className="btn btn-outline-secondary border-2 bold max-content-width"
                    variant="light"
                    onClick={() => dispatch(joinMission(missionId))}
                  >
                    Join Mission
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
