const runtimeConfig = useRuntimeConfig()

const userAgent = runtimeConfig.userAgent
const { baseURL } = runtimeConfig.bilibili

// h5
const ROOMINFO_API = '/xlive/web-room/v2/index/getRoomPlayInfo?device=phone&platform=html5&scale=3&build=10000&protocol=0,1&format=0,1,2&codec=0,1'

// https://github.com/vooidzero/B23Downloader/issues/1
async function getRoomInfo(roomId: string) {
  const roomInfo: any = await $fetch(ROOMINFO_API + `&room_id=${roomId}`, {
    baseURL,

    headers: {
      'Cache-Control': 'no-cache',
      Origin: 'https://live.bilibili.com',
      'User-Agent': userAgent,
      Referer: 'https://live.bilibili.com'
    }
  })

  // live.hooks.callHook('')
  
  let streamAddr = ''

  // 有2种格式流 http_stream和http_hls
  const format = roomInfo.playurl_info.playurl.stream[1].format
  
  let codec: any[]
  // 2种格式 flv和hls(.m3u8) 
  if (format.length > 1) {
    codec = format[1].codec
  } else {
    codec = format[0].codec
  }

  // 2种编码 avc和hevc
  if (codec.length > 1) {
    // hevc m3u8
    streamAddr = codec[1]
  } else {
    // avc flv
    streamAddr = roomInfo.playurl_info.playurl.stream[0].format[0].codec[0]
  }

  console.log('哈哈', streamAddr)
}

export {
  getRoomInfo
}
