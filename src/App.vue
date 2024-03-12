<script>

import AppNav from './components/AppNav.vue';
import AppJumbo from './components/AppJumbo.vue';
import AppCourses from './components/AppCourses.vue';
import AppJumboBook from './components/AppJumboBook.vue';
import AppWhyUs from './components/AppWhyUs.vue';
import AppCounter from './components/AppCounter.vue';

export default {

  components: {
    AppNav,
    AppJumbo,
    AppCourses,
    AppJumboBook,
    AppWhyUs,
    AppCounter,
  },
}

</script>

<template>
  <AppNav></AppNav>
  <AppJumbo></AppJumbo>
  <AppCourses></AppCourses>
  <AppJumboBook></AppJumboBook>
  <AppWhyUs></AppWhyUs>
  <AppCounter></AppCounter>
</template>

<style>

</style>
