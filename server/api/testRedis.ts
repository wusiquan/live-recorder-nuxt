
export default defineEventHandler(async (event) => {
  // const storage = useStorage('wsqfs')

  return {
    code: 200,
    message: 'ok',
    data: {
      msg: 'i love you'
    }
  }
})