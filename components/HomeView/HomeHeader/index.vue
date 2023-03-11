<script setup lang="ts">
const router_config: any[] = [
  { name: '首页', path: '/' },
  { name: '市场', path: '/about' },
  { name: '区块浏览器', path: '/contact' },
  { name: '社区', path: '/Community' },
]
</script>

<template>
  <div
    class="h-16 grid _date-Header-gridconfig items-center justify-center bg-black"
  >
    <!-- LOGO -->
    <div class="start h-full w-16">
      <img src="~/assets/img/linkedin_profile_image.png" alt="" />
    </div>

    <!-- 搜索 -->
    <div class="center">
      <div class="absolute mt-1 ml-1">
        <svg
          class="icon fill-current text-white stroke-1"
          style="
            width: 1.0048828125em;
            height: 1em;
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
          "
          viewBox="0 0 1029 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2231"
        >
          <path
            d="M763.255227 547.144339l-76.016861-9.24788a279.51809 279.51809 0 0 0 2.021852-33.557963c0-127.580077-90.193755-240.468824-214.483835-268.344067l16.749072-74.700862a351.263938 351.263938 0 0 1 274.325878 343.044929 356.575787 356.575787 0 0 1-2.596106 42.805843zM463.889486 927.767008a463.985195 463.985195 0 0 1-180.578927-891.289921 463.997159 463.997159 0 0 1 361.157854 854.824798 461.006253 461.006253 0 0 1-180.578927 36.465123z m0-851.19982C250.32685 76.567188 76.543261 250.314886 76.543261 463.889486s173.783589 387.310335 387.346225 387.310335S851.211784 677.452122 851.211784 463.889486 677.452122 76.567188 463.889486 76.567188zM754.342328 802.672972l54.141376-54.141376 221.327028 221.327028-54.141377 54.141376z"
            p-id="2232"
          ></path>
        </svg>
      </div>
      <input
        type="text"
        class="w-5/12 mr-8 rounded-full bg-black border indent-6 text-gray-300"
      />
    </div>

    <!-- 导航 -->
    <div class="end grid _date-End-gridconfig items-center gap-4">
      <ul class="grid grid-flow-col ml-auto">
        <li
          v-for="router in router_config"
          class="text-white text-lg indent-3 font-bold border-white hover:opacity-80"
        >
          <nuxt-link :to="router.path"> {{ router.name }}</nuxt-link>
        </li>
      </ul>
      <button
        class="mx-auto w-4/6 rounded-full bg-purple-600 border-2 border-purple-600 text-white font-black"
      >
        连接到OPcoin
      </button>

      <svg
        class="ml-auto mx-4 icon fill-current text-white stroke-1"
        style="
          width: 2em;
          height: 2em;
          vertical-align: middle;
          fill: currentColor;
          overflow: hidden;
        "
        viewBox="0 0 1024 1024"
        version="1.5"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1519"
      >
        <path
          d="M800 625.066667V448c0-117.333333-70.4-217.6-170.666667-262.4-4.266667-61.866667-55.466667-110.933333-117.333333-110.933333s-113.066667 49.066667-117.333333 110.933333c-100.266667 44.8-170.666667 145.066667-170.666667 262.4v177.066667c-57.6 46.933333-85.333333 110.933333-85.333333 185.6 0 17.066667 14.933333 32 32 32h206.933333c14.933333 61.866667 70.4 106.666667 134.4 106.666666s119.466667-44.8 134.4-106.666666H853.333333c17.066667 0 32-14.933333 32-32 0-76.8-27.733333-138.666667-85.333333-185.6zM512 138.666667c19.2 0 36.266667 10.666667 44.8 25.6-14.933333-2.133333-29.866667-4.266667-44.8-4.266667-14.933333 0-29.866667 2.133333-44.8 4.266667 8.533333-14.933333 25.6-25.6 44.8-25.6z m0 746.666666c-29.866667 0-55.466667-17.066667-66.133333-42.666666h134.4c-12.8 25.6-38.4 42.666667-68.266667 42.666666z m-307.2-106.666666c6.4-46.933333 29.866667-83.2 70.4-113.066667 8.533333-6.4 12.8-14.933333 12.8-25.6v-192c0-123.733333 100.266667-224 224-224S736 324.266667 736 448v192c0 10.666667 4.266667 19.2 12.8 25.6 40.533333 29.866667 64 66.133333 70.4 113.066667H204.8z"
          fill="#fff"
          p-id="1520"
        ></path>
      </svg>
    </div>
  </div>
</template>

<style>
._date-Header-gridconfig {
  grid-template-columns: 8rem 0.8fr 0.8fr;
  grid-template-rows: 4rem;
}
._date-End-gridconfig {
  grid-template-columns: 1.4fr 0.9fr 0.2fr;
  grid-template-rows: 4rem;
}
</style>
