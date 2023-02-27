<script setup lang="ts">
//q:ref是干什么的?
</script>

<template>
  <!-- Hero -->
  <div class="relative overflow-hidden">
    <section
      class="overflow-hidden _date-bg-linear sm:grid sm:grid-cols-2 sm:items-center"
    >
      <div class="p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="mx-auto max-w-6xl text-center sm:text-left">
          <h2 class="lg:text-5xl font-bold _date-border md:text-4xl">
            Welcome to OPcoin !
          </h2>

          <p
            class="hidden dark:text-white md:mt-4 md:block text-5xl text-center"
          >
            Trading and Art Creation
          </p>

          <p
            class="hidden dark:text-white md:mt-4 md:block text-5xl text-center"
          >
            Journey with <i>NFT !</i>
          </p>

          <div class="mt-4 md:mt-8 flex justify-center">
            <button
              class="inline-block rounded _date-button-bg px-12 py-3 text-sm font-medium text-white transition"
            >
              去创作
            </button>
            <button
              class="inline-block rounded _date-button-two-bg mx-5 px-12 py-3 text-sm font-medium text-white transition"
            >
              去探索
            </button>
          </div>
        </div>
      </div>

      <img
        alt="Violin"
        src="../../../assets/img/banner.svg"
        class="_date-welcoem-banner object-cover object-center relative mr-24 mt-36"
      />
    </section>
  </div>
  <!-- End Hero -->
</template>

<style>
._date-border {
  -webkit-text-stroke: 1px #fff;
  color: rgba(255, 255, 255, 0);
}
._date-bg-linear {
  background: linear-gradient(90deg, black 0%, #180019 70%, #400138 100%);
}
._date-button-bg {
  background: rgba(99, 94, 255, 1);
  border: #ffffff00 solid 1px;
}
._date-button-two-bg {
  background: rgba(0, 0, 0, 0);
  border: #fff solid 1px;
}
._date-button-bg:hover {
  background: rgba(0, 0, 0, 0);
  border: #fff solid 1px;
}
._date-button-two-bg:hover {
  background: rgb(12, 223, 163);
  border: #ffffff00 solid 1px;
}
._date-welcoem-banner {
  width: 100%;
  height: 100%;
}
</style>
