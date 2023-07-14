import { NextApiRequest, NextApiResponse } from 'next'
import Database from '@database'

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new Database()
  const avos = await db.getAll()

  response.status(200).json({ data: avos })
}

export default allAvos
