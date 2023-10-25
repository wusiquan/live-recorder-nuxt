
export default defineEventHandler(async (event) => {
  return {
    code: 200,
    message: 'ok',
    data: {
      msg: 'i love you'
    }
  }
})