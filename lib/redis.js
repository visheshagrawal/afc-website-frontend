import Redis from 'ioredis'

const redis = new Redis({
  db: 2,
  port: 6379,
  host: '127.0.0.1',
})

export default redis

export const invalidMethodError = {
  code: 0, // error: 'Not acceptable method.',
}

export const okResponseBody = {
  code: 1,
}

export const errorResponseError = {
  code: 2, // error: 'Some error occured.',
}
