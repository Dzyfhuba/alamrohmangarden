import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        username: 'alamrohmangarden',
        email: 'alamrohmangarden@gmail.com',
        password: '12345678',
      },
      {
        username: 'ubaidillah',
        email: 'uba21id@gmail.com',
        password: '12345678',
      },
    ])
  }
}
