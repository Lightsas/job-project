import React, {useEffect} from 'react';
import axios from "axios";
import {useSelector} from 'react-redux';
import Launches from '../launches/Launches';

function LaunchesList () {
    const launches = useSelector((state) => state);

        const fetchLaunches = async () => {
            const response = await axios
            .get("http://api.spacexdata.com/v3/launches")
            .catch((err) => {
                console.log("Err", err);
            });
            console.log(response.data)
        };

        useEffect(() => {
            fetchLaunches();
        },[])


        console.log(launches)
    return (
        <div>
            <h1>Liotn</h1>
            <Launches></Launches>
        </div>
    );
};

export default LaunchesList;