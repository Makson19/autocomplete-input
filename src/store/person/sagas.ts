import { all, call, put, takeLatest } from 'redux-saga/effects'
import { AxiosResponse, isAxiosError } from 'axios'
import { fetchContactsFailure, fetchContactsRequest, fetchContactsSuccess } from './actions'
import * as services from './services'

function* fetchContacts() {
  try {
    const response: AxiosResponse = yield call(services.getContacts)
    if (response.status === 200) {
      yield put(fetchContactsSuccess(response.data))
    }
  } catch (error) {
    if (isAxiosError(error)) {
      yield put(fetchContactsFailure(error.response?.data?.error))
    }
  }
}

function* watchFetchContacts() {
  yield takeLatest(fetchContactsRequest.type, fetchContacts)
}

export default function* contactsSagas() {
  yield all([
    watchFetchContacts()
  ])
}
