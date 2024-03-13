<script>

import moment from 'moment';

export default {
  name: 'AppCountdown',

  data() {
    return {
      countdown: { days: 0, hours: 0, minutes: 0, seconds: 0 }
    };
  },
  mounted() {
    this.calculateCountdown();
    setInterval(this.calculateCountdown, 1000);
  },
  methods: {
    calculateCountdown() {
      const endDate = moment('2024-06-07'); // Specifica la data di fine del countdown
      const now = moment(); // Ottieni la data e l'ora correnti
      const duration = moment.duration(endDate.diff(now)); // Calcola la differenza tra le date
      this.countdown = {
        months: duration.months(),
        days: duration.days(),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds()
      };
    }
  }
}

</script>

<template>
    
<section>
    <h3>Limited Sale: <span>All courses with 55% off</span></h3>
    <div class="input-group mb-3 my_input">
        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
    </div>
    <div id="countdown">
        {{ countdown.months }} months {{ countdown.days }} days {{ countdown.hours }} hours {{ countdown.minutes }} minutes {{ countdown.seconds }} seconds
    </div>
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

    padding: 55px 65px 0;

    height: 240px;
    max-width: $maxWidth;
    width: 100%;
    background-color: $primaryColor;
    border-radius: 6px;

    .my_input {
        max-width: 570px;
    }
}

</style>