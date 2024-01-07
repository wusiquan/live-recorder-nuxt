<template>
  <div @click="test" style="height: 32px; line-height: 32px;">监听直播间(调用一下)</div>
  <div style="height: 32px; line-height: 32px;">添加直播间</div>
</template>

<script lang="ts" setup>
async function test() {
  const r = await $fetch('/api/addLive', {
    method: 'POST',
    body: {
      liveId: '11954219'
    }
  })
  console.log('前端结果')
  console.log(r)
}
</script>
