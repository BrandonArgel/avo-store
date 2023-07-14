import { NextApiRequest, NextApiResponse } from 'next'
import Database from '@database'

const avo = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new Database()
  const id = request.query.id
  const avo = await db.getById(id as string)

  if (avo) {
    response.status(200).json(avo)
  }

  response.status(404).end()
}

export default avo
