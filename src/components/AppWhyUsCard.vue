<script>

export default {
    name: 'AppCoursesCard',

    props: {
        whyus: Object,
    },
}

</script>

<template>

<li>
    <span v-html="whyus.logo"></span>
    <p>
        <h4>{{ whyus.title }}</h4>
        {{ whyus.description }}
    </p>
</li>

</template>


<style lang="scss" scoped>

@use '../style/variables' as *;
@use '../style/mixins' as *;

li {
    display: flex;
    width: 570px;
    height: 220px;
    gap: 30px;

    border-left: 5px solid $primaryColor;
    padding: 45px 0 0 40px;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: $primaryColor;
        span {
            color: #ffffff;
        }
        
    }

    span {
        font-size: 50px;
        color: $primaryColor;
    }

    p {
        display: flex;
        flex-direction: column;
        gap: 1em;

        max-width: 395px;
        color: #5c5c5c;

        h4 {
            font-size: 22px;
            font-weight: bold;
            color: #000000;
        }
    }
}

</style>