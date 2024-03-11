<script>

export default {
    name: 'AppCoursesCard',

    props: {
        course: Object,
    },
}

</script>

<template>

<li>
    <img :src="course.cover" alt="">
    <p id="offer" v-if="course.special === true">SPECIAL</p>
    <h3>{{ course.title }}</h3>
    <h4>{{ course.type }}</h4>
    <div>
        <p>
            <i class="fa-solid fa-check"></i>
            {{ course.difficulty }}
        </p>
        <p>
            <i class="fa-solid fa-list-ul"></i>
            {{ course.lectures }} Lectures
        </p>
        <p>
            <i class="fa-regular fa-clock"></i>
            {{ course.hours }} Hours
        </p>
    </div>
</li>

</template>


<style lang="scss" scoped>

@use '../style/variables' as *;
@use '../style/mixins' as *;

li {
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;

    background-color: #ffffff;
    width: 370px;

    #offer {
        position: absolute;
        top: 1em;
        right: 1em;

        font-size: 9px;

        color: #ffffff;
        background-color: #f09b23;
        padding: .3em .3em .2em;
        border-radius: 3px;
    }

    img {
        width: 100%;
    }

    h3 {
        max-width: $cardMaxWidth;
        font-size: 20px;
        font-weight: 600;

        text-align: center;
        margin-top: 1.2em;
    }

    h4 {
        width: 100%;
        max-width: $cardMaxWidth;
        font-size: 15px;

        color: #aaaaaa;

        text-align: center;
        margin-top: 1em;
        padding-bottom: 1em;
        border-bottom: 1px solid #aaaaaa;
    }

    div{
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: $cardMaxWidth;

        font-size: 15px;
        padding: .25em 0;

        i {
            color: $primaryColor;
        }
    }
}

</style>