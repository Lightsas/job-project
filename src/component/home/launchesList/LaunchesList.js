import React, {useEffect} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux';
import { setLaunches } from '../../redux/action/missionAction';
import Launches from '../launches/Launches';
import { Col, Container, Row } from 'react-bootstrap';

function LaunchesList () {
    const launches = useSelector((state) => state);
    const dispatch = useDispatch();

        const fetchLaunches = async () => {
            const response = await axios
            .get("http://api.spacexdata.com/v3/launches")
            .catch((err) => {
                console.log("Err", err);
            });
            dispatch(setLaunches(response.data))
        };

        useEffect(() => {
            fetchLaunches();
        },[])


        // console.log("launches: ", launches)
    return (
        <div>
            <Container fluid>
                <Row>

                    <Launches></Launches>

                </Row>
            </Container>
        </div>
    );
};

export default LaunchesList;