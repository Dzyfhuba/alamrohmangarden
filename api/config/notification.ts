import Env from '@ioc:Adonis/Core/Env'

const notification = {
  publicKey: Env.get('VAPID_PUBLIC_KEY'),
  privateKey: Env.get('VAPID_PRIVATE_KEY'),
}

export default notification
