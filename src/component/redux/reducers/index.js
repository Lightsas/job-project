import { combineReducers } from 'redux';
import { launchesReduce, selectedLaunchesReduce } from './launchesReduce';

const reducers = combineReducers ({
    allLaunches: launchesReduce,
    launches: selectedLaunchesReduce,
});

export default reducers;