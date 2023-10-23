import { getRoomInfo } from '../provider/bilibili'
// 2276730 Ghibli直播间
// 如果 redis 队列有数据就定时, 没有就不定时
export default defineEventHandler(async (event) => {
  await getRoomInfo('2276730')
  return {
    code: 200,
    message: 'ok',
    data: {
      msg: 'i love you'
    }
  }
})
