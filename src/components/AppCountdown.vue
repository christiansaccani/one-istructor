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
    <div id="registration">
        <h3>Limited Sale: <span>All courses with 55% off</span></h3>
        <div class="input-group mb-3 my_input">
            <input type="text" class="form-control my_form" placeholder="Enter your e-mail" aria-label="Recipient's username" aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary my_button" type="button" id="button-addon2">SUBSCRIBE</button>
        </div>
    </div>

    <div id="countdown">
        <p>
            <span>{{ countdown.months }}</span> months
        </p>
        <p>
            <span>{{ countdown.days }}</span> days
        </p>
        <p>
            <span>{{ countdown.hours }}</span> hours
        </p>
        <p>
            <span>{{ countdown.minutes }}</span> minutes
        </p>
        <p>
            <span>{{ countdown.seconds }}</span> seconds
        </p>
    </div>
</section>

</template>


<style lang="scss" scoped>

@use '../style/variables' as *;
@use '../style/mixins' as *;

section {
    display: flex;
    justify-content: space-around;
    align-items: center;

    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateY(40%) translateX(-50%);

    padding: 0 65px;
    margin: 0 15px;

    height: 220px;
    max-width: $maxWidth;
    width: 100%;
    background-color: $primaryColor;
    border-radius: 6px;

    #registration {

        h3 {
            font-weight: bolder;

            span {
                color: #ffffff;
            }
        }

        .my_input {
            max-width: 570px;
            margin-top: 22px;

            background-color: #ffffff;
            border-radius: 50px;

            .my_form {
                padding: 16px;
                border: none;
                border-top-left-radius: 50px;
                border-bottom-left-radius: 50px;
            }

            .my_button {
                background-color: #2d4649;
                color: #ffffff;

                padding: 8px 16px;
                border-radius: 50px;
            }
        }
    } 

    #countdown {
        display: flex;
        gap: 40px;

        p {
            display: flex;
            flex-direction: column;
            align-items: center;

            font-size: 20px;
            font-weight: bold;

            span {
                font-size: 55px;
                font-weight: bolder;
                color: #ffffff;
            }
        }
    }

}

</style>