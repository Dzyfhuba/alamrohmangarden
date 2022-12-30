import { DateTime } from 'luxon'
import {
  afterFind,
  BaseModel,
  beforeCreate,
  beforeSave,
  beforeUpdate,
  column,
} from '@ioc:Adonis/Lucid/Orm'
import { slugify } from '@ioc:Adonis/Addons/LucidSlugify'

export default class Article extends BaseModel {
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
  public static imagesBC(article: Article) {
    if (
      typeof article.images !== 'string' &&
      article.images !== undefined &&
      article.images !== null
    ) {
      article.images = article.images.toString()
    }
  }

  @beforeSave()
  public static imagesBS(article: Article) {
    if (
      typeof article.images !== 'string' &&
      article.images !== undefined &&
      article.images !== null
    ) {
      article.images = article.images.toString()
    }
  }

  @beforeUpdate()
  public static imagesBU(article: Article) {
    if (
      typeof article.images !== 'string' &&
      article.images !== undefined &&
      article.images !== null
    ) {
      article.images = article.images.toString()
    }
  }

  @beforeCreate()
  public static tagsBC(article: Article) {
    article.tags = article.tags.toString()
  }

  @beforeSave()
  public static tagsBS(article: Article) {
    article.tags = article.tags.toString()
  }

  @beforeUpdate()
  public static tagsBU(article: Article) {
    article.tags = article.tags.toString()
  }

  @afterFind()
  public static parsingAfterFind(article: Article) {
    if (article.images) {
      article.images = article.images as string
      article.images = article.images.split(',')
    }
  }

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
