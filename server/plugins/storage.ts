import redisDriver from 'unstorage/drivers/redis'

// 逻辑和nitro中使用storage类似
export default defineNitroPlugin(() => {
  const storage = useStorage()

  const driver = redisDriver({
    base: 'redis',
    host: useRuntimeConfig().redis.host,
    port: useRuntimeConfig().redis.port,
    password: 'wusiquan123'
  })

  // Mount driver
  storage.mount('redis', driver)
})
