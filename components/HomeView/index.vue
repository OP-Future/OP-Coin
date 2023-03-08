<script setup lang="ts">
import { storeToRefs } from 'pinia'

/*测试store*/
const test = useStore.test()
const { test_text } = storeToRefs(test)
console.log(test_text.value)
</script>

<template>
  <div>
    <!-- Home头部 -->
    <HomeViewHomeHeader />
    <!-- Home中间部分 -->
    <HomeViewHomeMain />
    <!-- Home底部 -->
    <HomeViewHomeFooter />
  </div>
</template>

<style></style>
