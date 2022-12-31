import { SecureStoragePlugin } from "capacitor-secure-storage-plugin"
import { useNavigate } from "react-router-dom"

const LogoutRequest = async () => {
  await SecureStoragePlugin.remove({key: 'token'})
  await SecureStoragePlugin.remove({key: 'user'})

  const navigate = useNavigate()
  navigate('/')
}

export default LogoutRequest