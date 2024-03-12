<script>

import AppNav from './components/AppNav.vue';
import AppJumbo from './components/AppJumbo.vue';
import AppCourses from './components/AppCourses.vue';
import AppJumboBook from './components/AppJumboBook.vue';
import AppWhyUs from './components/AppWhyUs.vue';

export default {

  components: {
    AppNav,
    AppJumbo,
    AppCourses,
    AppJumboBook,
    AppWhyUs,
  },
}

</script>

<template>
  <AppNav></AppNav>
  <AppJumbo></AppJumbo>
  <AppCourses></AppCourses>
  <AppJumboBook></AppJumboBook>
  <AppWhyUs></AppWhyUs>
</template>

<style>

</style>
