<script setup lang="ts"></script>

<template>
  <div class="grid _date-grid-Mainconfig _date-bg-linear">
    <!-- 标题组 -->
    <div class="left m-auto ml-8">
      <h1
        class="text-white text-6xl font-bold _date-text-border justify-center grid pb-5"
      >
        Welcome OP-Coin NFT
      </h1>
      <p class="grid text-lg text-white relative justify-center pt-5">
        Trading and Art Creation Journey with NFT !
      </p>

      <!-- 按钮组 -->
      <div class="grid grid-cols-2 pt-8">
        <!-- 去创作 -->
        <button
          class="w-6/12 h-12 ml-auto bg-violet-500 rounded-full text-white hover:bg-black hover:border-white hover:border-2"
        >
          去创作
        </button>
        <!-- 去探索 -->
        <button
          class="w-6/12 h-12 mr-auto mx-3 bg-black border-white border-2 rounded-full text-white hover:bg-violet-500 hover:border-0"
        >
          去探索
        </button>
      </div>

      <!-- Welcome to OP-Coin NFT Trading and Art Creation Journey with NFT ! -->
    </div>

    <!-- banner海报 -->
    <div class="right grid">
      <img
        src="~/assets/img/banner.svg"
        alt=""
        class="object-cover w-full h-full"
      />
    </div>
  </div>
</template>

<style>
._date-bg-linear {
  background: linear-gradient(90deg, black 0%, #180019 70%, #400138 100%);
}
._date-grid-Mainconfig {
  grid-template-columns: 1fr 1.2fr;
  grid-template-rows: 1fr;
  height: 64vh;
}
._date-text-border {
  color: rgba(0, 0, 0, 0);
  -webkit-text-stroke: 1px #fff;
}
</style>
