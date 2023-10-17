const runtimeConfig = useRuntimeConfig()

const userAgent = runtimeConfig.userAgent
const { baseURL } = runtimeConfig.douyin

// const ROOMINFO_API = "https://live.douyin.com/webcast/room/web/enter/?aid=6383&app_name=douyin_web&live_id=1&device_platform=web&language=zh-CN&browser_language=zh-CN&browser_platform=Win32&browser_name=Chrome&browser_version=116.0.0.0&web_rid=%s"

const mainInfoReg = /self\.__pace_f\.push\(\[1,"a:(\[.*\])\\n"\]\)/

// gen random string of 21 length 
function randNonceValue() {
  const randNonceChars = "1234567890abcdef"
  const nonceLength = randNonceChars.length
  let nonce = ''

  for (let i = 0; i < 21; i++) {
    let idx = floor(random() * (nonceLength - 1))
    nonce += randNonceChars[idx]
  }

  return nonce
}

// normal way -- crawl server data on live page
async function getRoomInfoFromLivePage(liveId: string) {
  const cookieStr = objToCookieStr({
    "Cache-Control": "no-cache",
    '__ac_nonce': randNonceValue(),
  })

  const pageHtml: any = await $fetch(`/${liveId}`, {
    baseURL,

    headers: {
      'User-Agent': userAgent,
      Cookie: cookieStr
    },

    // onResponse({ response }) {
    //   console.log(11, response.headers)
    // }
  })

  const matched = pageHtml.match(mainInfoReg)
  const info = matched?.[1]
  if (info) {
    const infoObj = JSON.parse('"' + info + '"')
    const mainInfo = infoObj[3]
    
  }
}

// fallback way -- call live room api
async function getRoomInfoFromApi(liveId: string) {
  
}

export {
  getRoomInfoFromLivePage,
  getRoomInfoFromApi
}
