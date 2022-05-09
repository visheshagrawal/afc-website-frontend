import Cors from 'cors'
import initMiddleware from '../../lib/init-middleware'
import redis, { errorResponseError, okResponseBody } from '../../lib/redis'

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

export default async function handler(req, res) {
  try {
    // Run cors
    await cors(req, res)

    // Get a card by id
    // FRONTEND: fetch(`http://localhost:3001/api/lalaji?card=${email}`, { method: 'GET' }).then((res) => res.json()).then((res) => { console.log(res.data) })
    if (req.method === 'GET') {
      const { card } = req.query
      if (card) {
        const data = JSON.parse(await redis.hget('cards', card))
        res.status(200).json({ data: data })
      }
      return
    }

    // POST a card by id
    // FRONTEND: fetch(`http://localhost:3001/api/lalaji`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ name: 'Something', id: 'something@someone.com', tasks: [{ id: 1 }] })) }).then((res) => res.json()).then((res) => { console.log(res.data) })
    else if (req.method === 'POST') {
      const { id, name, tasks } = req.body
      if (id) {
        await redis.hset('cards', id, JSON.stringify({ id, name, tasks })) // { id: value, name: value, tasks: [] }
        res.status(200).json(okResponseBody)
      }
      return
    }

    // EDIT a card by id
    // FRONTEND: fetch(`http://localhost:3001/api/lalaji`, { method: 'PUT', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ name: 'Something', id: 'something@someone.com', tasks: [{ id: 1 }] })) }).then((res) => res.json()).then((res) => { console.log(res.data) })
    else if (req.method === 'PUT') {
      const { id, name, tasks } = req.body
      if (id) {
        const data = JSON.parse(await redis.hget('cards', id))
        const updatedData = { ...data, name: 'New Name' }
        await redis.hset('cards', id, JSON.stringify(updatedData)) // { id: value, name: value, tasks: [] }
        res.status(200).json(okResponseBody)
      }
      return
    }
  } catch (e) {
    console.log(e)
    res.status(400).json(errorResponseError)
  }
}
