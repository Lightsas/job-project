import { combineReducers } from 'redux';
import { launchesReduce } from './launchesReduce';

const reducers = combineReducers ({
    allLaunches: launchesReduce,
})

export default reducers;