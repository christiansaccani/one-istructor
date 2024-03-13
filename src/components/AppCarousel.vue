<script>

import store from '../store.js';

export default {
  name: 'AppCarousel',

  data() {
    return {
      pages: store.state.pages,
      currentPageIndex: 1
    };
  },

  methods: {
    showPage(index) {
      this.currentPageIndex = index;
    },

    prevPage() {
      if (this.currentPageIndex > 0) {
        this.currentPageIndex--;
      } else if (this.currentPageIndex == 0) {
        this.currentPageIndex = this.pages.length - 1;
      }
    },

    nextPage() {
      if (this.currentPageIndex < this.pages.length - 1) {
        this.currentPageIndex++;
      } else if (this.currentPageIndex == this.pages.length - 1) {
        this.currentPageIndex = 0;
      }
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

  <div id="thumb-container">
    <i id="prev-arrow" @click="prevPage" class="fa-solid fa-chevron-left"></i>
    <div v-for="(page, index) in pages" :key="index" class="carousel-page" @click="showPage(index)" :class="{ 'active': currentPageIndex === index }">
      <img :src="page.avatar" alt="">
    </div>
    <i id="next-arrow" @click="nextPage" class="fa-solid fa-chevron-right"></i>
  </div>
  
  <div id="content-container">
    <div id="content">
      <h4>{{ currentPage.title }}</h4>
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

  margin: 80px 0;

  h2 {
    font-size: 45px;
    font-weight: bolder;
  }

  #thumb-container {
    display: flex;
    justify-content: center;
    align-items: center;
    
    max-width: $maxWidth;
    width: 100%;
  }

  .carousel-page {
    display: flex;
    justify-content: space-around;

    text-align: center;
    padding: 1em;
    box-sizing: border-box;
    cursor: pointer;

    img {
      width: 65px;
      border-radius: 50%;
    }
  }

  #content-container {
    padding: 10px;
    max-width: 760px;

    #content {
      text-align: center;

      h4 {
        font-weight: bold;
      }

      .fa-star.filled {
        color: $primaryColor;
      }

      .fa-star.empty {
        color: rgb(0, 0, 0);
      }

      p {
        padding-top: 20px;
        font-size: 18px;
      }
    }
    
  }
}

.carousel-page.active img {
  transform: scale(1.2);
}

#prev-arrow,
#next-arrow {
  cursor: pointer;
  padding: 0 25px;
}


</style>