import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Card, Stack, Container,
} from 'react-bootstrap';
import { fetchRockets, reserveRocket } from '../redux/rocketsSlice';

const Rockets = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <>
      {
      rockets.map(({
        id, name, images, description,
      }) => (
        <Card key={id} className="mb-3 border-0">
          <Container fluid>
            <Stack direction="horizontal" gap={3}>
              <Card.Img variant="top" src={images[0]} className="custom-width" />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button onClick={() => dispatch(reserveRocket(id))} variant="primary">Reserve Rocket</Button>
              </Card.Body>
            </Stack>
          </Container>
        </Card>
      ))
}
    </>
  );
};

export default Rockets;
