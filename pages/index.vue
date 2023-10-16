<script setup lang="ts">
async function test() {
  const { data } = await useFetch('/api/hello')

  console.log(111, data.value)
}
</script>

<template>
  <div @click="test">
    点击发送
  </div>
</template>
