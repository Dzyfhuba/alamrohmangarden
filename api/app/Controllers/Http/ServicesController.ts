import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Service from 'App/Models/Service'
import Drive from '@ioc:Adonis/Core/Drive'
import Application from '@ioc:Adonis/Core/Application'
import Logger from '@ioc:Adonis/Core/Logger'
import fs from 'fs'

export default class ServicesController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const data = await Service.all()

      return response.ok(data)
    } catch (error) {
      return response.internalServerError(error)
    }
  }

  public async image({ request, response }: HttpContextContract) {
    try {
      const location = Application.resourcesPath(`storages/services/${request.param('image')}`)
      Logger.info(Application.resourcesPath(`storages/services/${request.param('image')}`))
      const fromFs = fs.existsSync(location)

      const image = fs.createReadStream(location)

      return response.stream(image)
    } catch (error) {
      return response.internalServerError(error)
    }
  }
}
