import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import About from 'App/Models/About'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await About.create({
      name: 'Alam Rohman Garden',
      phone: '',
      instagram: 'alamrohmangarden',
      maps: `https://www.google.com/maps/place/Tukang+Taman+Gresik+Alam+Rohman+Garden/@-7.1380627,112.610907,15z/data=!4m8!1m2!3m1!2sTukang+Taman+Gresik+Alam+Rohman+Garden!3m4!1s0x0:0x8a734a088804ff11!8m2!3d-7.1471123!4d112.6193368`,
      address:
        'Jl. Kng Brotonegoro No.11, Yosowilangun, Kec. Manyar, Kabupaten Gresik, Jawa Timur 61151',
      description:
        'Alam Rohman Garden adalah tukang taman profesional wilayah kabupaten Gresik dan sekitarnya. Mengerjakan taman, taman kering, taman vertikal, karpot/ampyangan, kolam minimalis, kolam tebing, relief 3D. Serta menawarkan jasa perawatan taman.',
    })
  }
}
