<!-- Home页面 -->

<script setup lang="ts">
const show = ref(false)

onMounted(() => {
  // 如果第一次进入,则存入localStorage一个标识,下次进入不再显示LodinView页面
  if (!localStorage.getItem('isFirst')) {
    localStorage.setItem('isFirst', '1')
    show.value = true

    setTimeout(() => {
      show.value = false
    }, 5100)
  }
})
</script>

<template>
  <HomeView v-if="!show" />
  <LodinView v-if="show" />
</template>

<style></style>
