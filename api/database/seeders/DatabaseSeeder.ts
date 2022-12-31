import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
// import ArticleFactory from 'Database/factories/ArticleFactory'
// import ServiceFactory from 'Database/factories/ServiceFactory'
import AboutSeeder from './AboutSeeder'
import UserSeeder from './UserSeeder'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await new UserSeeder(this.client).run()
    // await ServiceFactory.createMany(20)
    // await ArticleFactory.createMany(20)
    await new AboutSeeder(this.client).run()
  }
}
