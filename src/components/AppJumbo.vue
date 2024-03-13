<script>

import store from '../store.js';
import AppCountdown from './/AppCountdown.vue';

export default {
  name: 'AppJumbo',

  components: {
    AppCountdown,
  },

  data() {
    return {
      store
    };
  }
}

</script>

<template>

<section>

    <div id="jumbo_image">
        <div id="text_box">
            <h1>
                Start your Human<br> 
                <span>Revolution</span> today
            </h1>
            <p>
                A wonderful serenity has taken possesion of my entire soul, like<br>
                these sweet mornings of spring which I enjoy with my whole heart.
            </p>
        </div>
        <AppCountdown></AppCountdown>
    </div>

    <div id="bottom_container">
        <div id="container">
            <div id="left">
                <strong>
                    Hey there, my name is<br>
                    John Dow. I'm the founder<br>
                    of the Brain Academy.
                </strong>
                <img src="/images/sign.jpg" alt="">
            </div>

            <div id="right">
                <p>
                    A wonderful serenity has taken possession of my entire soul, like these sweet
                    mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm
                    of existence in this spot, which was created for the bliss of souls like mine. I am so
                    happy, my dear friend, so absorded in the exquisite sense of mere tranquil existence,
                    that I neglet my talents. When, while the lovely valley teems with vapour around me,
                    and the meridian sun strikes the upper surface of the impenetrable foliage of my
                    trees, and but a few stray gleams steal into the inner sanctuary.
                </p>
            </div>
        </div>
    </div>


</section>

</template>


<style lang="scss" scoped>

@use '../style/variables' as *;
@use '../style/mixins' as *;

section {

    #jumbo_image {
        position: relative;

        height: 790px;
        background-image: url(./images/slide-1.jpg);
        background-size: cover;

        #text_box {
            display: flex;
            flex-direction: column;
            justify-content: center;

            gap: 1em;

            position: absolute;
            top: 220px;
            left: 880px;

            background-image: none;
            color: $secondaryColor;

            h1 {
                font-size: 60px;
                font-weight: bolder;

                span {
                    color: $primaryColor;
                }
            }

            p {
                font-size: 20px;
            }
        }
    }

    #bottom_container {
        height: 575px;

        display: flex;
        justify-content: center;

        #container {
            display: flex;
            justify-content: center;
            max-width: $maxWidth;
            width: 100%;
            gap: 110px;

            margin-top: 215px;

            #left{
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                gap: 2em;

                strong{
                font-size: 30px;
                }

                img {
                    height: 110px;
                    object-fit: contain;
                }

            }

            #right {
                
                p {
                    max-width: 606px;
                    line-height: 2em;
                }
            }
        }
    }
}

</style>