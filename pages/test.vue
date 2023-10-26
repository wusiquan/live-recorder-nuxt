<template>
  <div @click="test">添加直播间</div>
</template>

<script lang="ts" setup>
async function test() {
  const r = await $fetch('/api/addLive', {
    method: 'POST',
    body: {
      liveId: '27563032'
    }
  })
  console.log('前端结果')
  console.log(r)
}
</script>
