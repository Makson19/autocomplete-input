import api from '../../utils/api'

const contactsEndpoint = '/contacts'

export const getContacts = () => {
  return api.get(contactsEndpoint)
}
