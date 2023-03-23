<script setup>
import ETH from '~/assets/img/ETH.png'
import BNB from '~/assets/img/BNC.png'
import POY from '~/assets/img/poy.png'
import OKX from '~/assets/img/OKX.png'
const solidity = ref([
  {
    src: ETH,
    name: 'ETH',
  },
  {
    src: BNB,
    name: 'BNB',
  },
  {
    src: POY,
    name: 'POY',
  },
  {
    src: OKX,
    name: 'OKX',
  },
])
</script>

<template>
  <!--定义一个盒子用于存放内容-->
  <div class="_date-bg">
    <!--搜索栏-->
    <div class="search">
      <input type="text" class="input" placeholder="搜索您想了解的内容" />
      <span>
        <a href="#"><img src="" alt="" class="img" /></a>
      </span>
      <button typc="button" class="button">链上搜索</button>
    </div>
    <div class="box">
      <!--图标布局flex-->
      <span v-for="data in solidity">
        <img :src="data.src" :name="data.name" />
      </span>
    </div>
    <!--底部文字弹窗-->
    <div class="marquee-outer-wrapper">
      <div class="marquee-inner-wrapper">
        <span class="first-marquee"
          >支持以上公链&nbsp;提供一站式NFT交易服务!</span
        >
        <span class="second-marquee"
          >支持以上公链&nbsp;提供一站式NFT交易服务!</span
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
._date-bg {
  padding: 1px;
  background: linear-gradient(to right, black 0%, #180019 70%, #400138 100%);
}
.search {
  height: 50px;
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 100px;
  border: 1px solid white;
  border-radius: 8px;
}
.input {
  background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="%23fff"/><circle cx="50" cy="50" r="30" fill="%23f00"/><circle cx="50" cy="50" r="20" fill="%23ff0"/><circle cx="50" cy="50" r="10" fill="%2300f"/></svg>')
    no-repeat center;
  background-position: 2px center;
  text-indent: 60px;
  height: 50px;
  width: 100%;
  font-size: 20px;
  border: 0;
  outline: none;
  background-color: rgba(255, 255, 255, 0);
  color: white;
  margin: 0 10px;
  margin-left: 55px;
}
.img {
  position: absolute;
  left: 50vw;
  transform: translateX(-360px);
  margin-top: -40px;
  margin-left: 1px;
  height: 30px;
}

.button {
  background: linear-gradient(135deg, #00c3ff, #0198e1);
  border-radius: 30px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding: 15px 30px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  border-radius: 18px;
  margin-top: 30px;
  margin-left: 30%;
  margin-right: 30%;
  width: 40%;
  height: 50px;
  font-size: 20px;
  color: #ffffff;
}
.button:before {
  content: '';
  position: absolute;
  top: -20px;
  right: -20px;
  bottom: -20px;
  left: -20px;
  background: inherit;
  filter: blur(30px);
  z-index: -1;
}
.button:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 100%;
  transition: width 0.3s ease, height 0.3s ease;
}
.button:hover:after {
  width: 300px;
  height: 300px;
}
.box {
  margin-top: 10%;
  margin-left: 5%;
  margin-right: 5%;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: flex-start;
}
.box span {
  background-color: rgba(245, 245, 220, 0.168);
  width: 200px;
  height: 160px;
  margin-left: 10px;
  margin-top: 100px;
  border-radius: 5px;
}
.box span img {
  margin-left: 10%;
}
.marquee-outer-wrapper {
  overflow: hidden;
  width: 100%;
}

.marquee-inner-wrapper {
  background: #eee;
  height: 40px;
  font-size: 20px;
  color: black;
  line-height: 40px;
  margin: 0 auto;
  white-space: nowrap;
  position: relative;
}
/* 需要将两个文字内容一样的span放在最右边 */

.marquee-inner-wrapper span {
  position: absolute;
  top: 0;
  left: 100%;
  height: 100%;
}
/* 定义第一个span的animation：时长 动画名字 匀速 循环 正常播放 */

.first-marquee {
  -webkit-animation: 25s first-marquee linear infinite normal;
  animation: 25s first-marquee linear infinite normal;
  padding-right: 70%;
}

@keyframes first-marquee {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  /* 向左移动 */
  100% {
    -webkit-transform: translate3d(-200%, 0, 0);
    transform: translate3d(-200%, 0, 0);
    display: none;
  }
}

.second-marquee {
  /* 因为要在第一个span播完之前就得出现第二个span，所以就延迟12s才播放 */
  -webkit-animation: 25s first-marquee linear 12s infinite normal;
  animation: 25s first-marquee linear 12s infinite normal;
  padding-right: 53%;
}

@keyframes second-marquee {
  0% {
    -webkit-transform: translate3d(0%, 0, 0);
    transform: translate3d(0%, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(-200%, 0, 0);
    transform: translate3d(-200%, 0, 0);
    display: none;
  }
}
</style>
