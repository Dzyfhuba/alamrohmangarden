import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Service from 'App/Models/Service'
import ServiceStoreValidator from 'App/Validators/ServiceStoreValidator'
import { nanoid } from 'nanoid'
import Application from '@ioc:Adonis/Core/Application'
import Drive from '@ioc:Adonis/Core/Drive'
import Logger from '@ioc:Adonis/Core/Logger'
import ServiceUpdateValidator from 'App/Validators/ServiceUpdateValidator'
import fs from 'fs'

export default class ServicesController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const { title } = request.qs() as { title: string }
      if (title) {
        const data = await Service.query()
          .whereRaw('LOWER(title) LIKE ?', [`%${title.toLocaleLowerCase()}%`])
          .select(['title', 'slug', 'updated_at'])
          .orderBy('updated_at', 'desc')

        return response.ok(data)
      }

      const data = await Service.query()
        .select(['title', 'slug', 'updated_at'])
        .orderBy('updated_at', 'desc')

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

      if (!payload.images?.length) {
        const item = await Service.create({
          ...payload,
          images: undefined,
          tags: payload.tags.join(','),
        })
        return response.created(item)
      }

      // save image first
      const images = payload.images!.map((image) => {
        Logger.info(JSON.stringify(image))
        const filename = `${nanoid()}.${image.extname}`
        image.clientName = filename
        return image
      })
      images.forEach(async (image) => {
        await image.moveToDisk('services', { name: image.clientName })
      })

      const item = await Service.create({
        ...payload,
        images: images
          .map(
            (image) =>
              `${request.protocol()}://${request.host()}/services/images/${image.clientName}`
          )
          .join(','),
        tags: payload.tags.join(','),
      })

      return response.created(item)
    } catch (error) {
      return response.badRequest(error)
    }
  }

  public async show({ request, response }: HttpContextContract) {
    try {
      const { id } = request.params()
      const item = await Service.findOrFail(id)
      return response.ok(item)
    } catch (error) {
      return response.notFound(error)
    }
  }

  public async edit({ response }: HttpContextContract) {
    return response.notFound()
  }

  public async update({ request, response }: HttpContextContract) {
    try {
      const { id } = request.params()
      const payload = await request.validate(ServiceUpdateValidator)
      const item = await Service.findOrFail(id)
      item.title = payload.title
      item.content = payload.content
      item.tags = payload.tags.join(',')
      await item.save()
      return response.created(item)
    } catch (error) {
      return response.badRequest(error)
    }
  }

  public async destroy({ request, response }: HttpContextContract) {
    try {
      const { id } = request.params()
      const item = await Service.findOrFail(id)

      const images = item.images.split(',')
      images.forEach((image) => {
        Logger.info(image.split('/').at(-1) as string)
        const path = Drive.application.resourcesPath(`services/${image.split('/').at(-1)}`)
        Logger.info(path)
        if (fs.existsSync(path)) {
          fs.unlinkSync(path)
        }
      })

      // await item.delete()

      return response.ok(item)
    } catch (error) {
      return response.notFound(error)
    }
  }
}
