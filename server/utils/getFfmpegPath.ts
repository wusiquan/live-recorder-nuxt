const ffmpegInfo = {
  // 先设置固定全局命令ffmepg
  ffmpegPath: 'ffmpeg' 
}

function getFfmpegPath() {
  return ffmpegInfo.ffmpegPath
}

export {
  getFfmpegPath
}
