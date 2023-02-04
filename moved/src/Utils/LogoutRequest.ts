import axios from "axios"
import { SecureStoragePlugin } from "capacitor-secure-storage-plugin"
import { host } from "../Variables"

// const navigate = useNavigate()
const LogoutRequest = async () => {
  const token = await SecureStoragePlugin.get({key: 'token'})
  const response = await axios.get(host + '/logout', {
    headers: {
      Authorization: `Bearer ${token.value}`
    }
  })
    .then(() => true)
    .catch(() => false)
  await SecureStoragePlugin.remove({key: 'token'})
  await SecureStoragePlugin.remove({key: 'user'})

  return {isSuccess: response}
}

export default LogoutRequest