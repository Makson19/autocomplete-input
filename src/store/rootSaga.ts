import { all } from 'redux-saga/effects'
import contactsSagas from './person/sagas'

function* rootSaga() {
  yield all([
    contactsSagas()
  ])
}

export default rootSaga
