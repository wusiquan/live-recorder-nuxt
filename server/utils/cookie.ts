export function objToCookieStr(obj: Record<string, string>) {
  obj = obj || {}

  let cookieStr = ''

  for (let key in obj) {
    if (obj[key]) {
      cookieStr += `${key}=${obj[key]};`
    }
  }

  return cookieStr
}
