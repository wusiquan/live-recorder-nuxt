// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  runtimeConfig: {
    common: {
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
    },

    // 抖音
    douyin: {
      baseURL: 'https://live.douyin.com',
    },

    // b站
    bilibili: {
      baseURL: 'https://api.live.bilibili.com',
    },

    // 企鹅体育
    qq: {
      baseURL: 'https://live.qq.com'
    }

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
