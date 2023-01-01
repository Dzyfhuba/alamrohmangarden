import { SecureStoragePlugin } from "capacitor-secure-storage-plugin"
import { redirect, useNavigate } from "react-router-dom"

// const navigate = useNavigate()
const LogoutRequest = () => {
  SecureStoragePlugin.remove({key: 'token'})
  SecureStoragePlugin.remove({key: 'user'})

  redirect('/')
}

export default LogoutRequest