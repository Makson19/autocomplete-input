import { combineReducers } from 'redux'
import contactsReducer from './person/reducer'

const rootReducer = combineReducers({
  contacts: contactsReducer
})

export default rootReducer
