import { defineStore } from 'pinia'

export const test = defineStore('test', {
  state: () => {
    return {
      test_text: '测试仓库',
    }
  },
})
