import tripReducer from './tripReducer'
import customerReducer from './customerReducer'
import myAccountReducer from './myAccountReducer'

import {combineReducers} from 'redux'
const allReducers = combineReducers({
    trip: tripReducer,
    customer: customerReducer,
    myAccount: myAccountReducer,
})
export default allReducers