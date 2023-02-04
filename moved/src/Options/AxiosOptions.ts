import { AxiosRequestConfig } from "axios"
import { SecureStoragePlugin } from "capacitor-secure-storage-plugin"

type AuthorizationOption = () => Promise<AxiosRequestConfig>

const authorizationOption: AuthorizationOption = async () => {
  const token = await SecureStoragePlugin.get({key: 'token'})

  return {
    headers: {
      Authorization: `Bearer ${token.value}`
    }
  }
}

export {
  authorizationOption
}
