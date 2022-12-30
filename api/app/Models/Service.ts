import { slugify } from '@ioc:Adonis/Addons/LucidSlugify'
import {
  afterFind,
  BaseModel,
  beforeCreate,
  beforeSave,
  beforeUpdate,
  column,
} from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class Service extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  @slugify({
    fields: ['title'],
    strategy: 'dbIncrement',
  })
  public slug: string

  @column()
  public title: string

  @column()
  public content: string

  @column()
  public images: string[] | string

  @column()
  public tags: string[] | string

  @beforeCreate()
  public static imagesBC(service: Service) {
    if (
      typeof service.images !== 'string' &&
      service.images !== undefined &&
      service.images !== null
    ) {
      service.images = service.images.toString()
    }
  }

  @beforeSave()
  public static imagesBS(service: Service) {
    if (
      typeof service.images !== 'string' &&
      service.images !== undefined &&
      service.images !== null
    ) {
      service.images = service.images.toString()
    }
  }

  @beforeUpdate()
  public static imagesBU(service: Service) {
    if (
      typeof service.images !== 'string' &&
      service.images !== undefined &&
      service.images !== null
    ) {
      service.images = service.images.toString()
    }
  }

  @beforeCreate()
  public static tagsBC(service: Service) {
    service.tags = service.tags.toString()
  }

  @beforeSave()
  public static tagsBS(service: Service) {
    service.tags = service.tags.toString()
  }

  @beforeUpdate()
  public static tagsBU(service: Service) {
    service.tags = service.tags.toString()
  }

  @afterFind()
  public static parsingAfterFind(service: Service) {
    if (service.images) {
      service.images = service.images as string
      service.images = service.images.split(',')
    }
  }

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
