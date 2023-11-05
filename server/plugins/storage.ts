// import redisDriver from 'unstorage/drivers/redis'
import fsDriver from 'unstorage/drivers/fs'

// 逻辑和nitro/src/storage.ts nitro/src/rollup/plugins/storage.ts中使用storage类似
// https://nuxt.com/docs/guide/directory-structure/server#server-storage
export default defineNitroPlugin(() => {
  const storage = useStorage()

  // const driver = redisDriver({
  //   base: 'redis',
  //   host: useRuntimeConfig().redis.host,
  //   port: useRuntimeConfig().redis.port,
  //   password: 'wusiquan123'
  // })

  // Mount driver
  // storage.mount('redis', driver)

  const driver = fsDriver({ 
    base: 'public/storage' 
  })

  storage.mount('wsqfs', driver)
})
