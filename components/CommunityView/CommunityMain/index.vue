<script setup lang="ts"></script>

<template>
  <div class="main">
    <div class="main-top">
      <img class="coin" src="./img/coin.png" />
      <img class="community" src="./img/addOPCommunity.png" />
      <img class="king" src="./img/king.png" />
      <div class="NTF_text">
        一起来改变传统NFT!
        <br />
        与全球数字资产投资者交流策略、区块链知识
      </div>
    </div>
    <div class="main-bottom">
      <div class="item">
        <img class="image" src="./img/twitter.png" />
        <div class="text">加入Twitter</div>
      </div>
      <div class="item">
        <img class="image" src="./img/Telegram.png" />
        <div class="text">加入Twitter</div>
      </div>
      <div class="item">
        <img class="image" src="./img/QQ.png" />
        <div class="text">加入Twitter</div>
      </div>
      <div class="item">
        <img class="image" src="./img/discord.png" />
        <div class="text">加入Twitter</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  background: linear-gradient(90deg, black 0%, #180019 70%, #400138 100%);
  background-color: #fff;
  display: grid; /* 将main设置为一个网格容器 */
  grid-template-rows: 1.3fr 0.75fr; /* 定义main内部的两个网格行 */
  grid-template-areas:
    'top'
    'bottom';
  gap: 10px;
}
.main-top {
  grid-area: top;
  padding: 20px;
  position: relative;
  display: flex;
  align-items: center;
}
.main-top .coin {
  width: 287px;
  height: 240px;
  position: absolute;
  top: 5rem;
  left: 10rem;
}
.main-top .community {
  width: 529px;
  position: absolute;
  top: 42px;
  left: 452px;
}
.main-top .king {
  width: 114px;
  position: absolute;
  top: 4px;
  left: 911px;
}
.main-top .NTF_text {
  color: white;
  position: absolute;
  top: 247px;
  left: 886px;
  font-size: 21px;
}

.main-bottom {
  grid-area: bottom;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
}
.main-bottom > .item {
  /* background-color: #ccc; */
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.main-bottom > .item .image {
  width: 150px;
  height: 150px;
}
.main-bottom > .item .text {
  margin: 0;
  width: 200px;
  height: 70px;
  border: 3px solid white;
  border-radius: 10px;
  text-align: center;
  line-height: 70px;
  font-weight: bold;
  color: white;
}
</style>
