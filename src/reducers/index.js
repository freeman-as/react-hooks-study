import { combineReducers } from 'redux';

import events from './events';
import operatoinLogs from './operationLogs';

export default combineReducers({
  events,
  operatoinLogs
});
