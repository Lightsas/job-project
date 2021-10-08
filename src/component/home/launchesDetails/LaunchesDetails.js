import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedLaunches, removeselectedLaunches } from '../../redux/action/missionAction';

function LaunchesDetails() {
    const launches = useSelector((state) => state.launches);
    const { launchesId } = useParams();
    const dispatch = useDispatch();
    console.log(launches)

    const fetchLaunchesDetails = async () => {
        const response = await axios
        .get(`https://api.spacexdata.com/v3/launches/${launchesId}`)
        .catch((err) => {
            console.log("Err", err)
        });
        dispatch(selectedLaunches(response.data));
    };
    useEffect(() => {
        if(launchesId && launchesId !== "") fetchLaunchesDetails();
        return () => {
            dispatch(removeselectedLaunches)
        }
    }, [launchesId]);
    return (
        <div>
            
        </div>
    );
}

export default LaunchesDetails;