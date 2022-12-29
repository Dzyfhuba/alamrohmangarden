import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'
import LoginValidator from 'App/Validators/LoginValidator'

export default class LoginController {
  public async index({ auth, request, response }: HttpContextContract) {
    try {
      const { username, password } = await request.validate(LoginValidator)
      const user = await User.findByOrFail('username', username)

      if (!(await Hash.verify(user.password, password))) {
        return response.unauthorized('Invalid credentials')
      }

      const token = await auth.use('api').generate(user)

      return response.created({ user, token })
    } catch (error) {
      return response.badRequest({ error }, true)
    }
  }
}
