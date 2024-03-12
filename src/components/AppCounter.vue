<script>

import store from '../store.js';

export default {
  name: 'AppCounter',

  data() {
    return {
      store
    };
  }
}

</script>

<template>

<section>

    <ul>
        <li v-for="currentItem in store.state.counters">
            <span v-html="currentItem.logo"></span>
            <div>
                <p class="count_number">{{ currentItem.count }}</p>
                <p>{{ currentItem.title }}</p>
            </div>         
        </li>
    </ul>
</section>

</template>


<style lang="scss" scoped>

@use '../style/variables' as *;
@use '../style/mixins' as *;

section {
    display: grid;
    place-items: center;

    height: 600px;
    background-image: url(/images/counter-1919x1101.jpg);
    background-size: cover;

    ul {
        @include ulDefault;
        max-width: $maxWidth;
        width: 100%;

        justify-content: space-around;
        align-items: center;

        li {
            display: flex;
            align-items: center;
            gap: 20px;

            color: #ffffff;

            span {
                font-size: 55px;
            }

            div {
                .count_number {
                    color: $primaryColor;
                    font-size: 30px;
                    font-weight: bold;
                }
                p {
                    margin: 0;

                }
            }
        }
    }
}

</style>