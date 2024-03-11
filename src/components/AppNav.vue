<script>

import store from '../store.js';

export default {
  name: 'AppNav',

  data() {
    return {
      store
    };
  }
}

</script>

<template>
    <nav>
      <div id="nav_container">
        <div id="logo">
          <img src="/images/MasterStudy-1.svg" alt="">
        </div>
        <section>
          <div id="link">
            <ul>
              <li v-for="(item, index) in store.state.arrayNav" :key="index">{{ item }}</li>
            </ul>
          </div>
          <div id="socials">
            <ul>
              <li v-for="(item, index) in store.state.arraySocials" :key="index" v-html="item"></li>
            </ul>
          </div>
        </section>
      </div>
    </nav>
  </template>


<style lang="scss" scoped>

@use '../style/variables' as *;
@use '../style/mixins' as *;

nav {
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;

    height: 145px;

    #nav_container {
        display: flex;
        justify-content: space-between;
        align-items: baseline;

        width: 1310px;

        img {
            height: 50px;
        }

        section {
            display: flex;
            gap: 50px;

            font-size: 20px;
            font-weight: bold;

            #link {

                ul {
                @include ulDefault;
                gap: 30px;
                }
            }

            #socials {
                
                ul {
                @include ulDefault;
                gap: 15px;
                }
            }
        }
    }
}

</style>
