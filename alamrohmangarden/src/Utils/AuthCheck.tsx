import axios from "axios"
import { SecureStoragePlugin } from "capacitor-secure-storage-plugin"
import { host } from "../Variables"

const AuthCheck = async () => {
  const token = await SecureStoragePlugin
    .get({key: 'token'})
    .then(value => value.value)
    .catch(() => null)
  
  const isLoggedIn = await axios
    .get(host + '/check', {headers: {Authorization: `Bearer ${token}`}})
    .then(res => res.data.isLoggedIn)
    .catch(() => false)

  return {token, isLoggedIn}
}

export { AuthCheck }