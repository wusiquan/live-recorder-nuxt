// import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

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

  // build: {
  //   transpile:
  //     process.env.NODE_ENV === 'production'
  //       ? [
  //           'naive-ui',
  //           'vueuc',
  //           '@css-render/vue3-ssr',
  //           '@juggle/resize-observer'
  //         ]
  //       : ['@juggle/resize-observer']
  // },

  vite: {
    // ssr: {
    //   noExternal: ['naive-ui'],
    // },

    plugins: [
      // AutoImport({
      //   imports: [
      //     {
      //       'naive-ui': [
      //         'NSpace',
      //         'NDataTable',
      //         'NTag',
      //         'NButton'
      //       ]
      //     }
      //   ]
      // }),
      Components({
        dts: true,
        resolvers: [
          NaiveUiResolver()
        ],
      })
    ],

    // optimizeDeps: {
    //   include:
    //     process.env.NODE_ENV === 'development'
    //       ? ['naive-ui', 'vueuc', 'date-fns-tz/formatInTimeZone']
    //       : []
    // }
  }
})
