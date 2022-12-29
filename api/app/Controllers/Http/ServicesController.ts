import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Service from 'App/Models/Service'
import ServiceStoreValidator from 'App/Validators/ServiceStoreValidator'
import { nanoid } from 'nanoid'
import Application from '@ioc:Adonis/Core/Application'
import Logger from '@ioc:Adonis/Core/Logger'

export default class ServicesController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const { title } = request.qs() as { title: string }
      if (title) {
        const data = await Service.query()
          .whereRaw('LOWER(title) LIKE ?', [`%${title.toLocaleLowerCase()}%`])
          .orderBy('updated_at', 'desc')

        return response.ok(data)
      }

      const data = await Service.all()

      return response.ok(data)
    } catch (error) {
      return response.badGateway(error, true)
    }
  }

  public async create({ response }: HttpContextContract) {
    return response.notFound()
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(ServiceStoreValidator)

      // save image first
      const images = payload.images.map((image) => {
        Logger.info(JSON.stringify(image))
        const filename = `${nanoid()}.${image.extname}`
        image.clientName = filename
        return image
      })
      images.forEach(async (image) => {
        await image.move(Application.publicPath('services'), { name: image.clientName })
      })

      Logger.info(images.toString())

      const item = await Service.create({
        ...payload,
        images: images.map((image) => image.clientName),
      })

      return response.created(item)
    } catch (error) {
      return response.badRequest(error)
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({ response }: HttpContextContract) {
    return response.notFound()
  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
