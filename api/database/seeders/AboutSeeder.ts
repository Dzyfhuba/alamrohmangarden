import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import About from 'App/Models/About'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await About.create({
      name: 'Alam Rohman Garden',
      address:
        'Jl. Kng Brotonegoro No.11, Yosowilangun, Kec. Manyar, Kabupaten Gresik, Jawa Timur 61151',
      description:
        'Alam Rohman Garden adalah tukang taman profesional wilayah kabupaten Gresik dan sekitarnya. Mengerjakan taman, taman kering, taman vertikal, karpot/ampyangan, kolam minimalis, kolam tebing, relief 3D. Serta menawarkan jasa perawatan taman.',
    })
  }
}
