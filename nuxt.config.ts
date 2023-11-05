// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  runtimeConfig: {
    redis: {
      host: '10.115.89.6',
      port: 6379
    },

    // 公共
    common: {
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
    },

    // 抖音
    douyin: {
      baseURL: 'https://live.douyin.com',
    },

    // b站
    bilibili: {
      baseURL: 'https://api.live.bilibili.com',
      headers: {
        origin: 'https://live.bilibili.com',
        referer: 'https://live.bilibili.com/'
      }
    },

    // 企鹅体育
    // qq: {
    //   baseURL: 'https://live.qq.com'
    // }

    // liveStream: {
    //   quality: 0
    // }
  },

  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui']
          : []
    }
  }
})
