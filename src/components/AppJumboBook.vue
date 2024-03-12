<script>

import store from '../store.js';

export default {
  name: 'AppJumboBook',

  data() {
    return {
      store
    };
  }
}

</script>

<template>

<section>

    <div id="left_section">
        <h2>
            Get My Exclusive Investing<br>
            Book just for $19.50
        </h2>
        <p>
            Vestibulum imentum eu urna vel cursus. Aenean
            vehicula quam quam, vitae pallentesque urna elementum cursus.
        </p>
        <img src="/images/amazon.png" alt="">

    </div>
    <div id="right_section">
        <img src="/images/book.png" alt="">
    </div>

</section>

</template>


<style lang="scss" scoped>

@use '../style/variables' as *;
@use '../style/mixins' as *;

section {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 600px;
    background-image: url(./images/slider_1-1917x607-1914x606.jpg);
    background-size: cover;

    margin-bottom: 20px;

    #left_section {
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 1em;

        max-width: 569px;
        text-align: center;

        h2 {
            font-size: 35px;
            font-weight: bolder;
            color: $primaryColor;
        }
        p {
            font-size: 25px;
            font-style: oblique;
            color: #ffffff;
        }
        img {
            max-width: 225px;
            cursor: pointer;
        }
    }
    #right_section {
        max-width: 569px;
        align-self: flex-end;
    }
} 

</style>