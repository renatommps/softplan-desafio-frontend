import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ProcessesReducer from './ProcessesReducer';
import ActiveProcessReducer from './ActiveProcessReducer';

const allReducers = combineReducers({
    form: formReducer,
    processes: ProcessesReducer,
    activeProcess: ActiveProcessReducer
});

export default allReducers;
