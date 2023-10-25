<template>
  <div @click="test">测试呗</div>
</template>

<script lang="ts" setup>
async function test() {
  const r = await $fetch('/api/addLive')
  console.log('前端结果')
  console.log(r)
}
</script>