/** @format */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missionsSlice';

const Missions = () => {
  const { missions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  return (
    <div>
      {missions.map((mission) => (
        <pre key={mission.missionId}>{mission.missionName}</pre>
      ))}
    </div>
  );
};

export default Missions;
