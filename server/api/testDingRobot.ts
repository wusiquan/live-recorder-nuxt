// 参考文档 https://open.dingtalk.com/document/robots/custom-robot-access
export default defineEventHandler(async (event) => {
  return $fetch('/api/testRedis', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      msgtype: 'text',
      text: {
        text: '纵跳王者数据1',
      }
    }
  })
  
  // return $fetch('https://oapi.dingtalk.com/robot/send?access_token=520c9ac8d939a1fb5430506125ad348b680e0cdfc97dda1acd35d9d488cda2ab', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: {
  //     msgtype: 'text',
  //     text: {
  //       text: '纵跳王者数据1',
  //     }
  //   }
  // }).then(res => {
  //   console.log(res)
  //   return res
  // })
})
