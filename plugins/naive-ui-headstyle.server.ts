import { setup } from '@css-render/vue3-ssr'
import { defineNuxtPlugin } from '#app'
import type { HeadTag } from '@unhead/schema'

// https://github.com/tusen-ai/naive-ui/issues/5220
export default defineNuxtPlugin({
  name: 'naive-ui-headstyle',
  enforce: 'pre',
  setup(nuxtApp) {
    const { collect } = setup(nuxtApp.vueApp)

    // unhead/createHead.ts 中调用
    nuxtApp.ssrContext?.head.hooks.hook('tags:resolve', (resolveCtx) => {
      //  insert Style after meta
      const lastMetaIndex = resolveCtx.tags.map(x => x.tag).lastIndexOf('meta')
      const styleTags = collect()
        .split('</style>')
        .filter(Boolean)
        .map(x => {
          const id = x.match(/cssr-id="(.+?)"/)?.[1] as string
          const style = (x.match(/>(.*)/s)?.[1] || '').trim()
          return {
            tag: 'style',
            props: { 'cssr-id': id },
            innerHTML: style
          } as HeadTag
        })
      
      resolveCtx.tags.splice(lastMetaIndex+1, 0, ...styleTags)
    })
  }
})