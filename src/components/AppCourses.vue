<script>

import store from '../store.js';

import AppCoursesCard from './AppCoursesCard.vue';

export default {
    name: 'AppCourses',

    components: {
        AppCoursesCard,
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
        New Courses
    </h2>
    <ul>
      <AppCoursesCard 
      v-for="currentCourse in store.state.courses"
      :course="currentCourse"></AppCoursesCard>
    </ul>
    <button>Load More</button>
</section>

</template>


<style lang="scss" scoped>

@use '../style/variables' as *;
@use '../style/mixins' as *;

section {
    background-color: #edf2f5;
    padding: 80px 0px 95px;

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

    button {
        border: none;
        background-color: $primaryColor;
        color: #ffffff;

        font-weight: bold;
        text-transform: uppercase;

        padding: .75em 1.5em;
        border-radius: 34px;
    }
}

</style>