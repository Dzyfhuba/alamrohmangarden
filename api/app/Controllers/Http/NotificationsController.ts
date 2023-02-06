import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Logger from '@ioc:Adonis/Core/Logger'
import NotificationSubscription from 'App/Models/NotificationSubscription'

export default class NotificationsController {
  public async saveSubscribtion({ response, request }: HttpContextContract) {
    try {
      const body = request.toJSON()
      const item = await NotificationSubscription.create({ subscription: body as JSON })
      return response.created(item)
    } catch (error) {
      return response.badRequest(error)
    }
  }

  public async send({ response }: HttpContextContract) {
    try {
      //
    } catch (error) {
      return response.internalServerError(error)
    }
  }
}
