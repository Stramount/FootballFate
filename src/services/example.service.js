import api from './API'

export async function exampleGetRequest() {
  return (await api.get('/api')).data
}