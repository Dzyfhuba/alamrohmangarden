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
      Logger.info(Application.publicPath(`services/${request.param('image')}`))
      // const fromFs = fs.existsSync(Application.publicPath(`services/${request.param('image')}`))
      // Logger.info(fromFs)
      const image = await Drive.getStream(
        Application.publicPath(`services/${request.param('image')}`)
      )

      return response.stream(image)
    } catch (error) {
      return response.internalServerError(error)
    }
  }
}
