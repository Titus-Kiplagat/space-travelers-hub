/** @format */

import { Table, Button } from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missionsSlice';

const Missions = () => {
  const { missions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <Table>
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
            <td>{missionName}</td>
            <td>{description}</td>
            <div className="buttons">
              <Button variant="secondary">NOT A MEMBER</Button>
              <Button variant="light">JOIN MISSION</Button>
            </div>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Missions;
