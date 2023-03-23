<script setup lang="ts">
import { storeToRefs } from 'pinia'

/*测试store*/
const test = useStore.test()
const { test_text } = storeToRefs(test)
console.log(test_text.value)
</script>

<template>
  <div>
    <!-- 头部 -->
    <TopView />
    <!-- Home中间部分 -->
    <HomeViewHomeMain />
    <!-- 底部 -->
    <FooterView />
  </div>
</template>

<style></style>
