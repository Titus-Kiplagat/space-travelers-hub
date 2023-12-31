/** @format */

import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

const Profile = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const { missions } = useSelector((state) => state.missions);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const reservedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className="px-5 d-flex justify-content-between gap-5">
      <div className="w-100">
        <h3 className="font-bold py-2">My Missions</h3>
        {reservedMissions.length === 0 && (
          <p className="fs-2">You have no reserved missions</p>
        )}
        <ListGroup className="my-2">
          {reservedMissions.map(({ missionName, missionId }) => (
            <ListGroup.Item className="py-4" key={missionId}>{missionName}</ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="w-100">
        <h3 className="font-bold py-2">My Rockets</h3>
        {reservedRockets.length === 0 && (
          <p className="fs-2">You have no reserved rockets</p>
        )}
        <ListGroup className="my-2">
          {reservedRockets.map(({ name, id }) => (
            <ListGroup.Item className="py-4" key={id}>{name}</ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default Profile;
