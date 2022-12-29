import Service from 'App/Models/Service'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Service, ({ faker }) => {
  return {
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(10),
    tags: [0, 1, 2].map(() => faker.music.genre()),
  }
}).build()
