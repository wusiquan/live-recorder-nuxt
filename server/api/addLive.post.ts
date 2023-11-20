import { getRoomInfo } from '../provider/bilibili'
import { record } from '../recorder/ffmpeg'

// 2276730 Ghibli直播间
// 如果 redis 队列有数据就定时, 没有就不定时
export default defineEventHandler(async (event) => {
  let { liveId } = await readBody(event)
  console.log(11, liveId)
  if (!liveId) {
    return {
      code: -1,
      data: {
        errMsg: 'liveId必须传递'
      }
    }
  }

  let streamUrl = await getRoomInfo(liveId)
  console.log(22, streamUrl)
  if (streamUrl) {
    record(streamUrl)
  }

  return {
    code: 200,
    message: 'ok',
    data: {
      msg: 'i love you'
    }
  }
})
