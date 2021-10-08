import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {Button, Card, Col} from 'react-bootstrap';


function Launches() {
    const launches = useSelector((state) => state.allLaunches.launches);
    const renderList = launches.map((launches) => {
        const {mission_name, flight_number, lit, launch_year} = launches;
        return (        
            <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={lit} />
                
                <Card.Body>
                    <Card.Title>{mission_name}</Card.Title>
                    <Card.Text>{launch_year}</Card.Text>
                    <Link to={`/launches/${flight_number}`}>
                    <Button  variant="primary">Details</Button>
                    </Link>
                </Card.Body>
                </Card>
            </Col> 

        );
    });

    return <>{renderList}</>;

}

export default Launches;