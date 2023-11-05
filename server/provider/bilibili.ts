const runtimeConfig = useRuntimeConfig()

const { userAgent } = runtimeConfig.common
const { baseURL } = runtimeConfig.bilibili

// h5
const ROOMINFO_API = '/xlive/web-room/v2/index/getRoomPlayInfo?device=phone&platform=html5&scale=3&build=10000&protocol=0,1&format=0,1,2&codec=0,1'

// https://github.com/vooidzero/B23Downloader/issues/1
// https://bbs.itzmx.com/thread-99731-1-1.html
async function getRoomInfo(roomId: string) {
  const res: any = await $fetch(ROOMINFO_API + `&room_id=${roomId}`, {
    baseURL,

    headers: {
      Accept: 'application/json, text/plain, */*',
      'Cache-Control': 'no-cache',
      Origin: 'https://live.bilibili.com',
      'User-Agent': userAgent,
      Referer: 'https://live.bilibili.com/'
    }
  })

  // live.hooks.callHook('')
  
  let streamUrl = ''
  
  const roomInfo = res.data

  if (!roomInfo.playurl_info) {
    return streamUrl
  }

  // 有2种格式流 http_stream和http_hls
  // const format = roomInfo.playurl_info.playurl.stream[1].format
  
  // let codec: any[]
  // // 2种格式 flv和hls(.m3u8) 
  // if (format.length > 1) {
  //   codec = format[1].codec
  // } else {
  //   codec = format[0].codec
  // }

  // // 2种编码 avc和hevc
  // if (codec.length > 1) {
  //   // hevc m3u8
  //   streamAddr = codec[1]
  // } else {
  //   // avc flv
  //   streamAddr = roomInfo.playurl_info.playurl.stream[0].format[0].codec[0]
  // }

/*
  {
    "codec_name": "avc",
    "current_qn": 10000,
    "accept_qn": [
      10000
    ],
    "base_url": "/live-bvc/739044/live_6594864_2059782.flv?",
    "url_info": [
      {
        "host": "https://cn-jlcc-cu-03-06.bilivideo.com",
        "extra": "expires=1699116537&pt=html5&deadline=1699116537&len=0&oi=1875360846&platform=html5&qn=0&trid=1000ecccdc4b1dc341f684a8eee2ee7eace2&uipk=100&uipv=100&nbs=1&uparams=cdn,deadline,len,oi,platform,qn,trid,uipk,uipv,nbs&cdn=cn-gotcha01&upsig=af8c0c475bc8b4924dea1ff1b2f5117c&sk=334ca1cbe73bd2a6afff7008a00b1aae&p2p_type=0&sl=1&free_type=0&mid=0&sid=cn-jlcc-cu-03-06&chash=1&bmt=1&sche=ban&score=8&pp=rtmp&source=onetier&trace=8a1&site=be0dc54e8153620996c646d1cb68cf63&zoneid_l=151339010&sid_l=live_6594864_2059782&zoneid_l=151339010&sid_l=stream_name_cold&order=1",
        "stream_ttl": 3600
      }
    ],
    "hdr_qn": null,
    "dolby_type": 0,
    "attr_name": ""
  }
*/
  const streamInfo = roomInfo.playurl_info.playurl.stream[0].format[0].codec[0]

  // 可能有多个? 先取第一个吧
  const streamUrlInfoItem = streamInfo.url_info[0]
  streamUrl = streamUrlInfoItem.host + streamInfo.base_url + streamUrlInfoItem.extra

  return streamUrl
}

export {
  getRoomInfo
}
