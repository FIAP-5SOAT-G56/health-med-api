import { Environment } from '@/infra/web/nestjs/environment'

describe('Test for static methods of Environment class', () => {
  it('test validate method when process.env.NODE_ENV is configured', () => {
    process.env.NODE_ENV = 'test'
    expect(() => { Environment.validate() }).not.toThrow(new Error('NODE_ENV is not defined'))
  })

  it('test validate method when process.env.NODE_ENV is not configured', () => {
    delete process.env.NODE_ENV
    expect(() => { Environment.validate() }).toThrow(new Error('NODE_ENV is not defined'))
  })

  it('test get NODE_ENV method', () => {
    process.env.NODE_ENV = 'test'
    expect(Environment.NODE_ENV).toEqual('test')
  })

  it('test get NODE_ENV method default value', () => {
    delete process.env.NODE_ENV
    expect(Environment.NODE_ENV).toEqual('development')
  })

  it('test get IS_DEV_ENV method', () => {
    process.env.NODE_ENV = 'local'
    expect(Environment.IS_DEV_ENV).toEqual(true)
  })

  it('test get PORT method', () => {
    process.env.PORT = '3000'
    expect(Environment.PORT).toEqual('3000')
  })

  it('test get PORT method default value', () => {
    delete process.env.PORT
    expect(Environment.PORT).toEqual(3000)
  })

  it('test get SENTRY_DSN method', () => {
    process.env.SENTRY_DSN = 'test'
    expect(Environment.SENTRY_DSN).toEqual('test')
  })

  it('test get SENTRY_DSN method default value', () => {
    delete process.env.SENTRY_DSN
    expect(Environment.SENTRY_DSN).toEqual('')
  })

  it('test get DB_HOSTNAME method', () => {
    process.env.DB_HOSTNAME = 'test'
    expect(Environment.DB_HOSTNAME).toEqual('test')
  })

  it('test get DB_HOSTNAME method default value', () => {
    delete process.env.DB_HOSTNAME
    expect(Environment.DB_HOSTNAME).toEqual('local-mysql')
  })

  it('test get DB_PORT method', () => {
    process.env.DB_PORT = '3000'
    expect(Environment.DB_PORT).toEqual(3000)
  })

  it('test get DB_PORT method default value', () => {
    delete process.env.DB_PORT
    expect(Environment.DB_PORT).toEqual(3306)
  })

  it('test get DB_USERNAME method', () => {
    process.env.DB_USERNAME = 'test'
    expect(Environment.DB_USERNAME).toEqual('test')
  })

  it('test get DB_USERNAME method default value', () => {
    delete process.env.DB_USERNAME
    expect(Environment.DB_USERNAME).toEqual('root')
  })

  it('test get DB_PASSWORD method', () => {
    process.env.DB_PASSWORD = 'test'
    expect(Environment.DB_PASSWORD).toEqual('test')
  })

  it('test get DB_PASSWORD method default value', () => {
    delete process.env.DB_PASSWORD
    expect(Environment.DB_PASSWORD).toEqual('password')
  })

  it('test get DB_DATABASE method', () => {
    process.env.DB_DATABASE = 'test'
    expect(Environment.DB_DATABASE).toEqual('test')
  })

  it('test get DB_DATABASE method default value', () => {
    delete process.env.DB_DATABASE
    expect(Environment.DB_DATABASE).toEqual('health_med')
  })

  it('test get DB_CONNECTION_LIMIT method', () => {
    process.env.DB_CONNECTION_LIMIT = '1000'
    expect(Environment.DB_CONNECTION_LIMIT).toEqual(1000)
  })

  it('test get DB_CONNECTION_LIMIT method default value', () => {
    delete process.env.DB_CONNECTION_LIMIT
    expect(Environment.DB_CONNECTION_LIMIT).toEqual(10000)
  })

  it('test get DB_CONNECTION_TIMEOUT method', () => {
    process.env.DB_CONNECTION_TIMEOUT = '1000'
    expect(Environment.DB_CONNECTION_TIMEOUT).toEqual(1000)
  })

  it('test get DB_CONNECTION_TIMEOUT method default value', () => {
    delete process.env.DB_CONNECTION_TIMEOUT
    expect(Environment.DB_CONNECTION_TIMEOUT).toEqual(30000)
  })

  it('test get REDIS_HOSTNAME method', () => {
    process.env.REDIS_HOSTNAME = 'test'
    expect(Environment.REDIS_HOSTNAME).toEqual('test')
  })

  it('test get REDIS_HOSTNAME method default value', () => {
    delete process.env.REDIS_HOSTNAME
    expect(Environment.REDIS_HOSTNAME).toEqual('localhost')
  })

  it('test get REDIS_PORT method', () => {
    process.env.REDIS_PORT = '1000'
    expect(Environment.REDIS_PORT).toEqual(1000)
  })

  it('test get REDIS_PORT method default value', () => {
    delete process.env.REDIS_PORT
    expect(Environment.REDIS_PORT).toEqual(6379)
  })

  it('test get REDIS_DB method', () => {
    process.env.REDIS_DB = '1000'
    expect(Environment.REDIS_DB).toEqual(1000)
  })

  it('test get REDIS_DB method default value', () => {
    delete process.env.REDIS_DB
    expect(Environment.REDIS_DB).toEqual(1)
  })

  it('test get REDIS_ENABLED method', () => {
    process.env.REDIS_ENABLED = 'true'
    expect(Environment.REDIS_ENABLED).toEqual(true)
  })

  it('test get CACHE_ENABLED method', () => {
    process.env.CACHE_ENABLED = 'true'
    expect(Environment.CACHE_ENABLED).toEqual(true)
  })

  it('test get AWS_REGION method', () => {
    process.env.AWS_REGION = 'test'
    expect(Environment.AWS_REGION).toEqual('test')
  })

  it('test get AWS_REGION method default value', () => {
    delete process.env.AWS_REGION
    expect(Environment.AWS_REGION).toEqual('us-east-1')
  })

  it('test get AWS_ACCESS_KEY_ID method', () => {
    process.env.AWS_ACCESS_KEY_ID = 'test'
    expect(Environment.AWS_ACCESS_KEY_ID).toEqual('test')
  })

  it('test get AWS_ACCESS_KEY_ID method default value', () => {
    delete process.env.AWS_ACCESS_KEY_ID
    expect(Environment.AWS_ACCESS_KEY_ID).toEqual('qualquercoisa')
  })

  it('test get AWS_SECRET_ACCESS_KEY method', () => {
    process.env.AWS_SECRET_ACCESS_KEY = 'test'
    expect(Environment.AWS_SECRET_ACCESS_KEY).toEqual('test')
  })

  it('test get AWS_SECRET_ACCESS_KEY method default value', () => {
    delete process.env.AWS_SECRET_ACCESS_KEY
    expect(Environment.AWS_SECRET_ACCESS_KEY).toEqual('qualquercoisa')
  })

  it('test get SNS_TOPIC_ORDER_CREATED method', () => {
    process.env.SNS_TOPIC_ORDER_CREATED = 'test'
    expect(Environment.SNS_TOPIC_ORDER_CREATED).toEqual('test')
  })

  it('test get SNS_TOPIC_ORDER_CREATED method default value', () => {
    delete process.env.SNS_TOPIC_ORDER_CREATED
    expect(Environment.SNS_TOPIC_ORDER_CREATED).toEqual('qualquercoisa')
  })
})
