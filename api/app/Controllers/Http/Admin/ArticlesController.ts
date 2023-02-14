import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Article from 'App/Models/Article'
import ArticleStoreValidator from 'App/Validators/ArticleStoreValidator'
import { nanoid } from 'nanoid'
import Application from '@ioc:Adonis/Core/Application'
import fs from 'fs'
import ArticleUpdateValidator from 'App/Validators/ArticleUpdateValidator'

export default class ArticlesController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const { title } = request.qs() as { title: string }
      if (title) {
        const data = await Article.query()
          .whereRaw('LOWER(title) LIKE ?', [`%${title.toLocaleLowerCase()}%`])
          .select(['title', 'slug', 'updated_at'])
          .orderBy('updated_at', 'desc')

        return response.ok(data)
      }

      const data = await Article.query()
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
      const payload = await request.validate(ArticleStoreValidator)

      if (!payload.images?.length) {
        const item = await Article.create({ ...payload, images: undefined })
        return response.created(item)
      }

      // save image first
      const images = payload.images!.map((image) => {
        const filename = `${nanoid()}.${image.extname}`
        image.clientName = filename
        return image
      })
      images.forEach(async (image) => {
        await image.move(Application.publicPath('articles'), { name: image.clientName })
      })

      const item = await Article.create({
        ...payload,
        images: images.map((image) => image.clientName),
      })

      return response.created(item)
    } catch (error) {
      return response.badRequest(error)
    }
  }

  public async show({ request, response }: HttpContextContract) {
    try {
      const { id } = request.params()
      const item = await Article.findOrFail(id)
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
      const payload = await request.validate(ArticleUpdateValidator)
      const item = await Article.findOrFail(id)
      item.title = payload.title
      item.content = payload.content
      item.tags = payload.tags
      await item.save()
      return response.created(item)
    } catch (error) {
      return response.badRequest(error)
    }
  }

  public async destroy({ request, response }: HttpContextContract) {
    try {
      const { id } = request.params()
      const item = await Article.findOrFail(id)

      item.images = item.images as string[]
      item.images.forEach((image) => {
        const path = `${Application.publicPath('articles')}/${image}`
        if (fs.existsSync(path)) {
          fs.unlinkSync(path)
        }
      })

      await item.delete()

      return response.ok(item)
    } catch (error) {
      return response.notFound(error)
    }
  }
}
