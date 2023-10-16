
export function objToCookieStr(obj: any) {
  obj = obj || {}

  let cookieStr = ''

  for (let key in obj) {
    if (obj[key]) {
      cookieStr += `${key}=${obj[key]};`
    }
  }

  return cookieStr
}

