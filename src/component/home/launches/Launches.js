import React from 'react';
import { useSelector } from 'react-redux';
import {Button, Card} from 'react-bootstrap';

function Launches() {
    const launches = useSelector((state) => state.allLaunches.launches);
    // const {id, title} = launches[0];
    return (
        <div>
            <h1>Launcehs Comm</h1>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        </div>
    );
}

export default Launches;