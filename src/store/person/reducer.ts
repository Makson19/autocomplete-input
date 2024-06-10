import { createReducer } from '@reduxjs/toolkit'
import { Contacts } from '../../models/IContacts'
import { fetchContactsFailure, fetchContactsRequest, fetchContactsSuccess } from './actions'
import { AnyAction } from 'redux-saga'

interface StateType {
  isFetching: boolean
  isSaving: boolean
  isSuccess: boolean
  isError: boolean
  messageError: string | null,
  items: Contacts[]
}

const initialState: StateType = {
  isFetching: false,
  isSaving: false,
  isSuccess: false,
  isError: false,
  messageError: null,
  items: [],
}

const contactsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchContactsRequest, (state: StateType) => ({
      ...state,
      isFetching: true,
      isSaving: false,
      isSuccess: false,
      isError: false,
      messageError: null
    }))
    .addCase(fetchContactsSuccess, (state: StateType, action: AnyAction) => ({
      ...state,
      isFetching: false,
      isSaving: false,
      isSuccess: false,
      isError: false,
      messageError: null,
      items: action.payload
    }))
    .addCase(fetchContactsFailure, (state: StateType, action: AnyAction) => ({
      ...state,
      isFetching: false,
      isSaving: false,
      isSuccess: false,
      isError: true,
      messageError: action.payload
    }))
})

export default contactsReducer
