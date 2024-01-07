import childProcess from 'node:child_process'
import process from 'node:process'
import fs from 'node:fs'
import path from 'node:path'
import { getFfmpegPath } from '../utils/getFfmpegPath'
// import { fileURLToPath } from "node:url"
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)

const runtimeConfig = useRuntimeConfig()

const { userAgent } = runtimeConfig.common
const { origin, referer } = runtimeConfig.bilibili.headers

function record(stremUrl: string) {
  const ffmpegPath = getFfmpegPath()

  const crlf = "\r\n"
  const headers = [
    `User-Agent: ${userAgent}`,
    // `Origin: ${origin}`,
    // `Referer: ${referer}`,
  ] + crlf

  const commandAgs = [
    '-headers', headers,
    '-i', stremUrl,
    '-c', 'copy',
    '-bsf:a', 'aac_adtstoasc',
    'public/xiabingbao20240107.ts'
  ]

  const cwd = process.cwd()

  const ffmpegProc = childProcess.spawn(ffmpegPath, commandAgs, {
    cwd
  })

  // ffmpegProc.stderr.setEncoding('utf8')


  ffmpegProc.stdout.on('data', (data) => {
    console.log('stdout data', data.toString("utf8"))
  })

  ffmpegProc.stderr.on('data', (data) => {
    console.log('stderr', data.toString("utf8"))
  })

  ffmpegProc.on('error', (err) => {
    console.log('错误', err)
  })

  ffmpegProc.on('exit', (code, signal) => {
    console.log('exit执行', `退出码: ${code}`, `信号: ${signal}`)

    if (signal == 'SIGKILL') {
      const file = 'public/xiabingbao20240107.ts'
      const filePath = path.resolve(cwd, file) 
      console.log('执行了没有', filePath)
      // 此时转mp4
      if (fs.statSync(filePath)) {
        const commandStr = [
          `ffmpeg`,
          // 省略文件有关ffmpeg本身的信息
          '-hide_banner',
          `-i ${filePath}.flv`,
          '-c copy',
          `${file}.mp4`
        ].join(' ')
  
        childProcess.exec(commandStr)
      }
    }
  })
    
  // })

  // setTimeout(() => {
  //   console.log(1111, '5秒了')
  //   const r = ffmpegProc.stdin?.write('q')
  //   if (!r) {
  //     ffmpegProc.kill('SIGKILL')
  //   }
  // }, 5000)  
}

export {
  record
}
