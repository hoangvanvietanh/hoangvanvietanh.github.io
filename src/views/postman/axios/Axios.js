import axios from 'axios'

async function get(domain, _headers) {
  if (_headers !== '') {
    return await axios.get(domain, { headers: _headers })
  }
  return await axios.get(domain)
}
async function post(domain, bodyForm, _headers) {
  return await axios.post(domain, bodyForm, { headers: _headers })
}
export default {
  get,
  post
}
