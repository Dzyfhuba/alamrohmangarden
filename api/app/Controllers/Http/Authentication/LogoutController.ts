import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LogoutController {
  public async index({ auth, response }: HttpContextContract) {
    try {
      await auth.use('api').revoke()

      return response.ok({ revoked: true })
    } catch (error) {
      return response.badRequest(error)
    }
  }
}
