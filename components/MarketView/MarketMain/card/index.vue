<script setup>
import wly from '~/assets/NFT/WLY.jpg'
import fj from '~/assets/NFT/FJ.jpg'
import cp from '~/assets/NFT/cp.webp'
import dog from '~/assets/NFT/Dog.jpg'
import gbl from '~/assets/NFT/GBL.jpg'
import hx from '~/assets/NFT/HX.jpg'
const arr = [
  { NFT: wly },
  { NFT: fj },
  { NFT: cp },
  { NFT: dog },
  { NFT: gbl },
  { NFT: hx },
]
</script>
<template>
  <a href="#" class="card" v-for="data in arr">
    <div class="card__body">
      <div class="card__top">
        <div class="card__owner">
          <div class="card__avatar"></div>
          <div class="card__user">
            <span class="card__user__title">出售卖家</span>
            <span class="card__user__code">2304RC</span>
          </div>
        </div>
        <div class="card__creator">
          <div class="card__avatar"></div>
          <div class="card__user">
            <span class="card__user__title">最高价用户</span>
            <span class="card__user__code">20AR02</span>
          </div>
        </div>
      </div>
      <div class="card__image">
        <img :src="data.NFT" alt="" />
      </div>
    </div>
    <div class="card__info">
      <p><b>链上价格:</b> ETH 2.00</p>
      <p>($3,565.48)</p>
    </div>
    <div class="card__footer">
      <span class="card__btn card__btn--secondary">收藏</span>
      <span class="card__btn card__btn--primary">立刻购买</span>
    </div>
  </a>
</template>

<style>
.card {
  width: 30%;
  max-width: 90%;
  border: solid 4px #fff;
  border-radius: 2rem;
  padding: 1.75rem;
  text-decoration: none;
  color: inherit;
  background: #eceff1;
  box-shadow: 0 16px 32px #cfd8dc;
  transition: all 400ms ease;
}
.card:hover {
  background: #fff;
}
.card__body {
  background: #fff;
  border-radius: 1.25rem;
  padding: 0.75rem;
}
.card__top {
  display: flex;
  font-weight: 500;
}
.card__owner,
.card__creator {
  width: 50%;
  display: flex;
}
.card__owner {
  position: relative;
}
.card__owner::after {
  content: '';
  position: absolute;
  top: 0;
  right: -1px;
  width: 2px;
  height: 100%;
  border-radius: 2px;
  background: #eceff1;
}
.card__creator {
  flex-direction: row-reverse;
  text-align: right;
}
.card__avatar {
  width: 3rem;
  height: 3rem;
  background: #eceff1;
  border-radius: 100%;
  flex-shrink: 0;
}
.card__user {
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card__user__title {
  font-size: 0.75rem;
  color: #b0bec5;
}
.card__image {
  padding-top: 75%;
  position: relative;
  overflow: hidden;
  margin-top: 0.75rem;
  border-radius: 1rem;
  background: #eceff1;
  box-shadow: 0 16px 32px #eceff1;
}
.card__image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card__info {
  margin: 0.75rem;
  display: flex;
  justify-content: space-between;
}
.card__info p {
  margin: 0;
}
.card__footer {
  background: #fff;
  padding: 0.75rem;
  border-radius: 0.75rem 0.75rem 1.75rem 1.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card__btn {
  width: 48%;
  padding: 1rem;
  text-align: center;
  font-weight: 500;
  transition: all 200ms ease;
}
.card__btn--primary {
  background: #263238;
  color: #eceff1;
  border-radius: 0.5rem 0.5rem 1.25rem 0.5rem;
}
.card__btn--primary:hover {
  background: #304ffe;
}
.card__btn--secondary {
  border-radius: 0.5rem 0.5rem 0.5rem 1.25rem;
}
.card__btn--secondary:hover {
  background: #eceff1;
  color: #304ffe;
}
</style>
