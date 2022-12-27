import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class RegisterController {
  public async index({ auth, request, response }: HttpContextContract) {
    try {
      const user = await User.create(request.body())

      const token = await auth.use('api').generate(user)

      return response.created({ user, token })
    } catch (error) {
      return response.badRequest(error)
    }
  }
}
