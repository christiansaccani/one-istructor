<script>

import store from '../store.js';

import AppWhyUsCard from './AppWhyUsCard.vue';

export default {
    name: 'AppWhyUs',

    components: {
        AppWhyUsCard,
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
    <h2>
        Why my Courses?
    </h2>
    <ul>
      <AppWhyUsCard 
      v-for="currentWhyUs in store.state.whyUs"
      :whyus="currentWhyUs"></AppWhyUsCard>
    </ul>
</section>

</template>


<style lang="scss" scoped>

@use '../style/variables' as *;
@use '../style/mixins' as *;

section {
    background-color: #ffffff;
    padding: 80px 0px 40px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        margin: 0 auto;
        font-weight: bold;
    }

    ul {
        margin-top: 55px;
        margin-bottom: 55px;

        @include ulDefault;
        max-width: $maxWidth;
        row-gap: 1.5em;

        justify-content: space-between;
        flex-wrap: wrap;
    }
}

</style>