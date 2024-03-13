<script>

import store from '../store.js';

export default {
  name: 'AppFooter',

  data() {
    return {
      store,

      footer: store.state.footer,
    };
  }
}

</script>

<template>
    
<footer>
  <section>

    <div id="about_section">
      <h5>{{ footer[0].title }}</h5>
      <p>{{ footer[0].item }}</p>
      <ul>
        <li v-for="(item, index) in footer[0].socials" :key="index" v-html="item"></li>
      </ul>
    </div>

    <div id="contact_section">
      <h5>{{ footer[1].title }}</h5>
      <p>
        <ul>
          <li v-for="item in footer[1].items"> {{ item }}</li>
        </ul>
      </p>
    </div>

    <div id="pages_section">
      <h5>{{ footer[2].title }}</h5>
      <p>
        <ul>
          <li v-for="item in footer[2].items"> {{ item }}</li>
        </ul>
      </p>
    </div>

    <div id="blog_section">
      <h5>{{ footer[3].title }}</h5>
      <p>
        <ul>
          <li v-for="item in footer[3].items">
            <img :src="item.pic" alt="">
            <div class="text_box">
              <h6>{{ item.title }}</h6>
              <p>- {{ item.date }}</p>
            </div>
          </li>
        </ul>
      </p>
    </div>
    
  </section>
</footer>

</template>


<style lang="scss" scoped>

@use '../style/variables' as *;
@use '../style/mixins' as *;

footer {
    height: 380px;
    background-color: $primaryColor;

    display: flex;
    justify-content: center;
    align-items: center;

    section {
        display: flex;
        justify-content: space-between;
        max-width: $maxWidth;
        width: 100%;

        div {
          max-width: 285px;

          h5 {
            font-size: 21px;
            font-weight: bold;
            text-transform: uppercase;

            margin-bottom: 30px;
          }

          p {
            font-size: 18px;
          }
        }

        #about_section {

          ul {
            @include ulDefault;
            padding: 0;
            margin: 0;
            gap: 20px;
            font-size: 21px;

            li {
              cursor: pointer;
            }
          }

          p {
            margin-bottom: 12px;
          }
        }

        #contact_section {
          ul {
            @include ulDefault;
            display: flex;
            flex-direction: column;
            gap: 10px;

            padding: 0;
            margin: 0;

          }
        }

        #pages_section {
          ul {
            @include ulDefault;
            display: flex;
            flex-flow: column wrap;
            gap: 20px;
            column-gap: 20px;

            max-height: 130px;
            padding: 0;
            margin: 0;

            li {
              cursor: pointer;
            }
          }
        }

        #blog_section {

          ul {
            @include ulDefault;
            display: flex;
            flex-direction: column;
            gap: 10px;

            padding: 0;
            margin: 0;

            li {
              display: flex;
              gap: 20px;

              img {
                height: 90px;
                cursor: pointer;
              }

              h6 {
                font-size: 18px;
                font-weight: bold;
              }

              p {
                font-size: 14px;
              }
            }
          }
        }
    }
}

</style>