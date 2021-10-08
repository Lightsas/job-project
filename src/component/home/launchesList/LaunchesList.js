import React, {useEffect} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux';
import { setLaunches } from '../../redux/action/missionAction';
import Launches from '../launches/Launches';

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


        console.log("launches: ", launches)
    return (
        <div>
            <h1>Liotn</h1>
            <Launches></Launches>
        </div>
    );
};

export default LaunchesList;