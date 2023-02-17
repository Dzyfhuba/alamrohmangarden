import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import webpush from 'web-push'
import NotificationSubscription from 'App/Models/NotificationSubscription'
import notification from 'Config/notification'
import Logger from '@ioc:Adonis/Core/Logger'

export default class NotificationsController {
  public async saveSubscription({ response, request }: HttpContextContract) {
    try {
      const body = request.body()
      const item = await NotificationSubscription.create({ subscription: body as JSON })
      return response.created(item)
    } catch (error) {
      return response.badRequest(error)
    }
  }

  public async send({ response }: HttpContextContract) {
    try {
      const data = await NotificationSubscription.all()

      const responseNotification = data.map(async (item) => {
        const res = await this.sendNotification(item.subscription, 'Test remote')
        return res
      })

      return response.ok({ message: 'success', responseNotification })
    } catch (error) {
      return response.internalServerError(error)
    }
  }

  public async sendNotification(subscription, data) {
    try {
      webpush.setVapidDetails(
        'mailto: uba21id@gmail.com',
        notification.publicKey,
        notification.privateKey
      )

      const response = await webpush.sendNotification(subscription, data).catch((error) => {
        Logger.info(JSON.stringify(error))
        // Logger.info(`type: ${typeof subscription.key}`)
      })
      // Logger.info(JSON.stringify(subscription))
      // Logger.info(JSON.stringify(data))
      // Logger.info(JSON.stringify(response))

      return response
    } catch (error) {
      return { error }
    }
  }
}
