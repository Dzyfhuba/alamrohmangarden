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
  public images: string

  @column()
  public tags: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
