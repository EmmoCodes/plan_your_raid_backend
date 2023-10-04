import { getDB } from '../utils/db.js'
import { createToken } from '../utils/token.js'

const COL = 'user'

export const login = async (req, res) => {
  const db = await getDB()
  const result = await db.collection(COL).findOne(req.body)
  if (!result) {
    return res.status(403).end()
  }
  // create token
  const token = createToken({ id: result._id })
  res.json({ token })
}
export const register = async (req, res) => {
  const db = await getDB()
  const result = await db.collection(COL).insertOne(req.body)

  res.end(req.body.password)
}
