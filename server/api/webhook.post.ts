import * as crypto from 'crypto'

const WEBHOOK_SECRET: string = 'ilovesirui001'

const verifySignature = (body: any, signature256: string) => {
  const signature = crypto
    .createHmac("sha256", WEBHOOK_SECRET)
    .update(JSON.stringify(body))
    .digest("hex");
  console.log(222, `sha256=${signature}`, signature256)
  let trusted = Buffer.from(`sha256=${signature}`, 'ascii');
  let untrusted = Buffer.from(signature256, 'ascii');
  return crypto.timingSafeEqual(trusted, untrusted);
};

export default defineEventHandler(async (event) => {
  const headers = getRequestHeaders(event)
  const body = await readBody(event)
  const signature256 = headers['x-hub-signature-256']
  console.log(111, body, signature256)
  if (!signature256) {
    setResponseStatus(event, 401)
    return send(event, 'Unauthorized')
  }
  
  const result = verifySignature(body, signature256!)

  if (result) {
    setResponseHeader(event, 'Access-Control-Allow-Origin', 'https://github.com/')
    setResponseStatus(event, 201)
    await send(event, `haha ${result}`)
  } else {
    setResponseStatus(event, 401)
    return send(event, 'Unauthorized')
  }

  console.log(333)
})
