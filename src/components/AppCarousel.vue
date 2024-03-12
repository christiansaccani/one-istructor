<script>

import store from '../store.js';

export default {
  name: 'AppCarousel',

  data() {
    return {
      pages: store.state.pages,
      currentPageIndex: 0
    };
  },

  methods: {
    showPage(index) {
      this.currentPageIndex = index;
    }
  },

  computed: {
    currentPage() {
      return this.pages[this.currentPageIndex];
    }
  },
}

</script>

<template>

<section>
  <h2>What Students Say</h2>
  <div id="carousel-container">
    <div class="carousel-page" @click="showPage(0)" :class="{ 'active': currentPageIndex === 0 }">
      <img src="/images/1-100x100.jpg" alt="">
    </div>
    <div class="carousel-page" @click="showPage(1)" :class="{ 'active': currentPageIndex === 1 }">
      <img src="/images/2-100x100.jpg" alt="">
    </div>
    <div class="carousel-page" @click="showPage(2)" :class="{ 'active': currentPageIndex === 2 }">
      <img src="/images/4-100x100.jpg" alt="">
    </div>
  </div>
  <div id="content-container">
    <div id="content">
      <h2>{{ currentPage.title }}</h2>
      <i v-for="index in 5" :class="['fas', 'fa-star', {'filled': index <= currentPage.vote}, {'empty': index > currentPage.vote}]" :key="index"></i>
      <p>{{ currentPage.content }}</p>
    </div>
  </div>
</section>

</template>


<style lang="scss" scoped>

@use '../style/variables' as *;
@use '../style/mixins' as *;

section {
  display: flex;
  flex-direction: column;
  align-items: center;

    #carousel-container {
      display: flex;
      justify-content: center;
      overflow: hidden;
      max-width: $maxWidth;
      width: 100%;
    }

    .carousel-page {
      display: flex;
      justify-content: space-around;

      text-align: center;
      padding: 20px;
      box-sizing: border-box;
      cursor: pointer;
      transition: background-color 0.3s ease;

      img {
        border-radius: 50%;
      }
    }

    #content-container {
      padding: 20px;
      max-width: 760px;

      #content {
        text-align: center;

        .fa-star.filled {
          color: $primaryColor;
        }

        .fa-star.empty {
          color: rgb(0, 0, 0);
        }
      }
      
    }
}

.carousel-page.active img{
  transform: scale(1.2);}


</style>