import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Service from 'App/Models/Service'

export default class DashboardController {
  public async services({ response }: HttpContextContract) {
    try {
      const data = await Service.query().select(['title', 'slug', 'images'])
      const mapped = data.map((item) => {
        return {
          ...(item.$attributes as typeof Service),
          images: item.images.split(','),
        }
      })

      return response.ok(mapped)
    } catch (error) {
      return response.notFound(error)
    }
  }
}
