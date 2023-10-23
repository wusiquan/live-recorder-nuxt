const runtimeConfig = useRuntimeConfig()

const userAgent = runtimeConfig.userAgent
const { baseURL } = runtimeConfig.qq

// 1) 利用http请求 flv文件
// 2) ffmpeg -headers "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36"$'\r\n' -headers "Referer: https://live.qq.com/10000881"$'\r\n' -i "https://flv-tencent-wplay.qiecdn.com/live/10000881rHNK3o1J.flv?txSecret=5c8e0f0b412f78756ad3f6989c969910&token=99b5e1e50ecf75e1c6a0436e694e4ef2&txTime=1698055091" -c copy -bsf:a aac_adtstoasc hello.mp4 out.mp4
async function getRoomInfo(roomId: string) {
  
}

export {
  getRoomInfo
}
