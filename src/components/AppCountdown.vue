<script>

import store from '../store.js';

export default {
  name: 'AppCountdown',

  data() {
    return {
      store
    };
  }
}

</script>

<template>
    
<section>
    
</section>

</template>


<style lang="scss" scoped>

@use '../style/variables' as *;
@use '../style/mixins' as *;

section {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateY(40%) translateX(-50%);

    height: 240px;
    max-width: $maxWidth;
    width: 100%;
    background-color: $primaryColor;
    border-radius: 6px;
}

</style>