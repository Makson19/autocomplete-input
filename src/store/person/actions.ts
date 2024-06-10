import { createAction } from '@reduxjs/toolkit'
import { withPayloadType } from '../../utils/functions'
import { Contacts } from '../../models/IContacts'

export const fetchContactsRequest = createAction('contacts/FETCH_CONTACTS_REQUEST')
export const fetchContactsSuccess = createAction('contacts/FETCH_CONTACTS_SUCCESS', withPayloadType<Contacts[]>())
export const fetchContactsFailure = createAction('contacts/FETCH_CONTACTS_FAILURE')
