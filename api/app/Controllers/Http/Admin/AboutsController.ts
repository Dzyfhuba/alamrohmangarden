import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import About from 'App/Models/About'
import AboutStoreValidator from 'App/Validators/AboutStoreValidator'
import Logger from '@ioc:Adonis/Core/Logger'

export default class AboutsController {
  public async index({ response }: HttpContextContract) {
    try {
      const item = await About.query().firstOrFail()

      return response.ok(item)
    } catch (error) {
      return response.notFound(error)
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(AboutStoreValidator)
      const exist = await About.all()
      Logger.info(JSON.stringify(exist))
      if (exist.length) {
        const item = await About.findOrFail(exist[0].id)
        item.name = payload.name
        item.address = payload.address
        item.description = payload.description
        await item.save()

        return response.created(item)
      } else {
        const item = await About.create(payload)

        return response.created(item)
      }
    } catch (error) {
      return response.badRequest(error)
    }
  }
}
