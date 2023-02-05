import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const id = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ name: 'Example' })
}

export default id